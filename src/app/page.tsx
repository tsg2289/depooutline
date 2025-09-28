'use client';

import { useState, useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { CaseMetadataForm } from '@/components/CaseMetadataForm';
import { SectionSelector } from '@/components/SectionSelector';
import { OutlinePreview } from '@/components/OutlinePreview';
import { MatterSelector } from '@/components/MatterSelector';
import { DepositionSelector } from '@/components/DepositionSelector';
import type { CaseMetadata, OutlineSection, Matter, Deposition } from '@/types';
import { DEPOSITION_SECTIONS } from '@/lib/template';

export default function Home() {
  const { data: session, status } = useSession();
  const [selectedMatter, setSelectedMatter] = useState<Matter | null>(null);
  const [selectedDeposition, setSelectedDeposition] = useState<Deposition | null>(null);
  const [metadata, setMetadata] = useState<CaseMetadata>({
    caseName: '', caseNumber: '', jurisdiction: '', deponent: '', depositionDate: '', takingAttorney: '', defendingAttorney: ''
  });
  const [sections, setSections] = useState<OutlineSection[]>(DEPOSITION_SECTIONS);

  // Update metadata when deposition is selected
  useEffect(() => {
    if (selectedDeposition) {
      setMetadata({
        caseName: selectedDeposition.caseName || '',
        caseNumber: selectedDeposition.caseNumber || '',
        jurisdiction: selectedDeposition.jurisdiction || '',
        deponent: selectedDeposition.deponentName || '',
        depositionDate: selectedDeposition.date ? selectedDeposition.date.toISOString().split('T')[0] : '',
        takingAttorney: selectedDeposition.takingAttorney || '',
        defendingAttorney: selectedDeposition.defendingAttorney || '',
      });
    }
  }, [selectedDeposition]);

  // Redirect to sign in if not authenticated
  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-grid flex items-center justify-center" style={{backgroundColor: '#f8fafc'}}>
        <div className="spinner w-8 h-8"></div>
      </div>
    );
  }

  if (status === 'unauthenticated') {
    redirect('/auth/signin');
  }

  const handleGenerateOutline = () => {
    console.log('Generating outline with metadata:', metadata);
    console.log('Selected sections:', sections.filter(s => s.enabled));
  };

  const isMetadataComplete = Boolean(
    metadata.caseName && metadata.caseNumber && metadata.jurisdiction && metadata.deponent && metadata.depositionDate && metadata.takingAttorney && metadata.defendingAttorney
  );

  return (
    <div className="min-h-screen bg-grid" style={{backgroundColor: '#f8fafc'}}>
      {/* Top colorful bar with title and user menu */}
      <div className="w-full" style={{
        background: 'linear-gradient(90deg, #60a5fa 0%, #7c3aed 50%, #ec4899 100%)',
        boxShadow: '0 10px 30px rgba(76, 29, 149, 0.25)'
      }}>
        <div className="max-w-7xl mx-auto container-pad py-6 md:py-8">
          <div className="flex items-center justify-between">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{
                background: '#ffffff',
                borderRadius: '50%',
                padding: '12px',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg style={{ width: '32px', height: '32px', color: '#4f46e5' }} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              DepoOutline
            </h1>
            
            {/* User menu */}
            <div className="flex items-center gap-4">
              <span className="text-white/90 text-sm">
                Welcome, {session?.user?.name || session?.user?.email}
              </span>
              <button
                onClick={() => signOut()}
                className="px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors text-sm font-medium"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Matter and Deposition Selectors */}
      <div className="max-w-7xl mx-auto container-pad py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <MatterSelector 
            selectedMatter={selectedMatter}
            onMatterSelect={setSelectedMatter}
          />
          <DepositionSelector
            selectedMatter={selectedMatter}
            selectedDeposition={selectedDeposition}
            onDepositionSelect={setSelectedDeposition}
          />
        </div>
      </div>

      {/* Main Content - Only show if deposition is selected */}
      {selectedDeposition && (
        <div className="max-w-7xl mx-auto container-pad py-8 md:py-12">
          <header className="text-center mb-8 md:mb-10">
            <p className="text-xl md:text-2xl font-semibold gradient-text">
              Working on: {selectedDeposition.title}
            </p>
            <p className="text-sm text-slate-600 mt-2">
              Matter: {selectedMatter?.title} | Deponent: {selectedDeposition.deponentName}
            </p>
          </header>

          <div className="grid grid-cols-1 xl:grid-cols-12 items-start gap-20 md:gap-32 mb-24 md:mb-32">
            <div className="xl:col-span-3 self-start">
              <CaseMetadataForm metadata={metadata} onChange={setMetadata} />
            </div>
            
            {/* Responsive separator: horizontal on small screens, vertical on xl+ */}
            <div className="flex xl:col-span-1 self-stretch items-stretch">
              <div
                className="w-full h-0.5 xl:w-1 xl:h-full rounded-full opacity-70"
                style={{
                  background: 'linear-gradient(90deg, #60a5fa 0%, #7c3aed 50%, #ec4899 100%)',
                  boxShadow: '0 10px 30px rgba(76, 29, 149, 0.25)'
                }}
              />
            </div>
            
            <div className="xl:col-span-4">
              <SectionSelector 
                sections={sections} 
                onSectionsChange={setSections} 
                metadata={metadata}
                depositionId={selectedDeposition.id}
                isE2EEEnabled={selectedMatter?.e2eeEnabled || false}
              />
            </div>
            
            {/* Matching responsive separator to keep equal spacing between cards */}
            <div className="flex xl:col-span-1 self-stretch items-stretch">
              <div
                className="w-full h-0.5 xl:w-1 xl:h-full rounded-full opacity-70"
                style={{
                  background: 'linear-gradient(90deg, #60a5fa 0%, #7c3aed 50%, #ec4899 100%)',
                  boxShadow: '0 10px 30px rgba(76, 29, 149, 0.25)'
                }}
              />
            </div>
            
            <div className="xl:col-span-3">
              <OutlinePreview sections={sections} metadata={metadata} />
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={handleGenerateOutline}
              disabled={!isMetadataComplete}
              className={`py-4 px-10 rounded-2xl font-bold text-xl shadow-2xl transition-all duration-300 transform ${!isMetadataComplete ? 'bg-gray-400 cursor-not-allowed text-white opacity-60' : 'text-white hover:scale-105 hover:shadow-3xl'}`}
              style={{ background: !isMetadataComplete ? undefined : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
            >
              {isMetadataComplete ? 'Generate Outline' : 'Fill Required Fields'}
            </button>
            <p className="text-base text-slate-600 mt-4 font-medium">Complete all required fields, then fine-tune your sections and export</p>
          </div>
        </div>
      )}

      {/* Show message if no deposition selected */}
      {!selectedDeposition && (
        <div className="max-w-7xl mx-auto container-pad py-16 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-12">
            <div className="mb-6">
              <div className="mx-auto w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Get Started</h2>
              <p className="text-gray-600 max-w-md mx-auto">
                Select or create a matter and deposition above to begin creating your professional deposition outline.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}