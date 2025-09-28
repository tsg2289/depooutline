'use client';

import { useState, useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { CaseMetadataForm } from '@/components/CaseMetadataForm';
import { SectionSelector } from '@/components/SectionSelector';
import { OutlinePreview } from '@/components/OutlinePreview';
import { MatterSelector } from '@/components/MatterSelector';
import { DepositionSelector } from '@/components/DepositionSelector';
import { DepositionNavigation } from '@/components/DepositionNavigation';
import type { CaseMetadata, OutlineSection, Matter, Deposition } from '@/types';
import { DEPOSITION_SECTIONS } from '@/lib/template';
import { saveDepositionProgress } from '@/lib/actions/save-progress';
import { loadDepositionProgress } from '@/lib/actions/load-progress';

export default function Home() {
  const { data: session, status } = useSession();
  const [selectedMatter, setSelectedMatter] = useState<Matter | null>(null);
  const [selectedDeposition, setSelectedDeposition] = useState<Deposition | null>(null);
  const [metadata, setMetadata] = useState<CaseMetadata>({
    caseName: '', caseNumber: '', jurisdiction: '', deponent: '', depositionDate: '', takingAttorney: '', defendingAttorney: ''
  });
  const [sections, setSections] = useState<OutlineSection[]>(DEPOSITION_SECTIONS);
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState<string | null>(null);

  // Update metadata and load saved progress when deposition is selected
  useEffect(() => {
    if (selectedDeposition) {
      // Update metadata
      setMetadata({
        caseName: selectedDeposition.caseName || '',
        caseNumber: selectedDeposition.caseNumber || '',
        jurisdiction: selectedDeposition.jurisdiction || '',
        deponent: selectedDeposition.deponentName || '',
        depositionDate: selectedDeposition.date ? selectedDeposition.date.toISOString().split('T')[0] : '',
        takingAttorney: selectedDeposition.takingAttorney || '',
        defendingAttorney: selectedDeposition.defendingAttorney || '',
      });

      // Load saved custom questions and notes
      loadDepositionProgress(selectedDeposition.id, DEPOSITION_SECTIONS)
        .then(result => {
          if (result.success && result.sections) {
            setSections(result.sections);
          } else {
            // If no saved progress, use default sections
            setSections(DEPOSITION_SECTIONS);
          }
        })
        .catch(error => {
          console.error('Failed to load deposition progress:', error);
          setSections(DEPOSITION_SECTIONS);
        });
    } else {
      // Reset to default sections when no deposition is selected
      setSections(DEPOSITION_SECTIONS);
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

  // Debug: log session status
  console.log('Session status:', status);
  console.log('Session data:', session);

  const handleGenerateOutline = () => {
    console.log('Generating outline with metadata:', metadata);
    console.log('Selected sections:', sections.filter(s => s.enabled));
  };

  const handleSaveProgress = async () => {
    if (!selectedDeposition) {
      setSaveMessage('Please select a deposition first');
      setTimeout(() => setSaveMessage(null), 3000);
      return;
    }

    setIsSaving(true);
    setSaveMessage(null);

    try {
      const result = await saveDepositionProgress(selectedDeposition.id, metadata, sections);
      
      if (result.success) {
        setSaveMessage('✅ Progress saved successfully!');
      } else {
        setSaveMessage(`❌ ${result.error}`);
      }
    } catch (error) {
      setSaveMessage('❌ Failed to save progress');
    } finally {
      setIsSaving(false);
      setTimeout(() => setSaveMessage(null), 3000);
    }
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
            <h1 className="text-5xl md:text-6xl font-extrabold text-white">
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

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto container-pad py-6">
        {/* Matter and Deposition Selectors */}
        <div className="grid grid-cols-1 xl:grid-cols-12 items-start gap-20 md:gap-32 mb-8">
          <div className="xl:col-span-3">
            <MatterSelector 
              selectedMatter={selectedMatter}
              onMatterSelect={setSelectedMatter}
            />
          </div>
          <div className="xl:col-span-1"></div>
          <div className="xl:col-span-4">
            <DepositionSelector
              selectedMatter={selectedMatter}
              selectedDeposition={selectedDeposition}
              onDepositionSelect={setSelectedDeposition}
            />
          </div>
          <div className="xl:col-span-1"></div>
          <div className="xl:col-span-3"></div>
        </div>

        {/* Main Content - Only show if deposition is selected */}
        {selectedDeposition && (
          <div className="py-2 md:py-6">
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
            
            <div className="xl:col-span-3 space-y-6">
              <DepositionNavigation
                selectedMatter={selectedMatter}
                selectedDeposition={selectedDeposition}
                onDepositionSelect={setSelectedDeposition}
              />
              <OutlinePreview sections={sections} metadata={metadata} />
            </div>
          </div>

          <div className="text-center space-y-4">
            {/* Save Message */}
            {saveMessage && (
              <div className="inline-block px-4 py-2 rounded-lg bg-white shadow-lg border">
                <span className="text-sm font-medium">{saveMessage}</span>
              </div>
            )}
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={handleSaveProgress}
                disabled={isSaving || !selectedDeposition}
                className={`py-4 px-10 rounded-2xl font-bold text-xl shadow-2xl transition-all duration-300 transform ${
                  isSaving || !selectedDeposition 
                    ? 'bg-gray-400 cursor-not-allowed text-white opacity-60' 
                    : 'text-white hover:scale-105 hover:shadow-3xl'
                }`}
                style={{ 
                  background: isSaving || !selectedDeposition 
                    ? undefined 
                    : 'linear-gradient(135deg, #10b981 0%, #059669 100%)' 
                }}
              >
                {isSaving ? 'Saving...' : '💾 Save Progress'}
              </button>
              
              <button
                onClick={handleGenerateOutline}
                disabled={!isMetadataComplete}
                className={`py-4 px-10 rounded-2xl font-bold text-xl shadow-2xl transition-all duration-300 transform ${
                  !isMetadataComplete 
                    ? 'bg-gray-400 cursor-not-allowed text-white opacity-60' 
                    : 'text-white hover:scale-105 hover:shadow-3xl'
                }`}
                style={{ 
                  background: !isMetadataComplete 
                    ? undefined 
                    : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
                }}
              >
                {isMetadataComplete ? '📄 Generate Outline' : 'Fill Required Fields'}
              </button>
            </div>
            <p className="text-base text-slate-600 mt-4 font-medium">Save your progress anytime, then complete all fields to generate the outline</p>
          </div>
          </div>
        )}
      </div>

      {/* Show message if no deposition selected */}
      {!selectedDeposition && (
        <div className="max-w-7xl mx-auto container-pad py-16 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-12">
            <div className="mb-6">
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