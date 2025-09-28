import React, { useState } from 'react';
import type { CaseMetadata } from '@/types';

interface CaseMetadataFormProps {
  metadata: CaseMetadata;
  onChange: (metadata: CaseMetadata) => void;
}

export const CaseMetadataForm: React.FC<CaseMetadataFormProps> = ({ metadata, onChange }) => {
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleInputChange = (field: keyof CaseMetadata, value: string) => {
    onChange({
      ...metadata,
      [field]: value
    });
  };

  // Calculate completion progress
  const totalFields = 7;
  const completedFields = Object.values(metadata).filter(value => value.trim() !== '').length;
  const progressPercentage = (completedFields / totalFields) * 100;

  // Check if field is completed
  const isFieldCompleted = (field: keyof CaseMetadata) => {
    return metadata[field] && metadata[field].trim() !== '';
  };

  // Enhanced input styling with floating labels
  const getInputClass = (field: keyof CaseMetadata) => {
    const isCompleted = isFieldCompleted(field);
    const isFocused = focusedField === field;
    return `w-full px-4 py-3 text-base border-2 bg-white text-slate-900 placeholder:text-slate-400 transition-all duration-200 ${
      isCompleted 
        ? 'border-green-400 bg-green-50' 
        : isFocused 
          ? 'border-indigo-400 bg-indigo-50' 
          : 'border-slate-300 hover:border-slate-400'
    }`;
  };

  const sharedInputStyle: React.CSSProperties = {
    borderRadius: 12,
  };

  return (
    <div className="elevated-card card-shake p-8 overflow-hidden">
      <div className="mb-6">
        <div className="heading-bar heading-bar-bleed">
          <h2 className="panel-heading text-2xl text-white m-0 flex items-center gap-3">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Case Information
          </h2>
          <div className="flex items-center gap-3">
            <span className="text-sm text-white/80">{completedFields}/{totalFields}</span>
            <div className="w-16 h-2 bg-white/20 rounded-full overflow-hidden">
              <div 
                className="h-full bg-white transition-all duration-300 ease-out rounded-full"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Case Details Section */}
      <div className="bg-slate-50/50 rounded-xl p-4 mx-4 mb-8">
        <div className="flex items-center gap-2 mb-6">
          <h3 className="text-lg font-semibold text-slate-800">Case Details</h3>
        </div>
        
        <div className="space-y-6">
          <div className="relative">
            <label htmlFor="caseName" className="block text-sm font-semibold text-slate-700 uppercase tracking-wide mb-2">
              Case Name
            </label>
            <input
              type="text"
              id="caseName"
              value={metadata.caseName}
              onChange={(e) => handleInputChange('caseName', e.target.value)}
              onFocus={() => setFocusedField('caseName')}
              onBlur={() => setFocusedField(null)}
              className={getInputClass('caseName')}
              style={sharedInputStyle}
              placeholder="e.g., Smith v. Johnson Corp"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <label htmlFor="caseNumber" className="block text-sm font-semibold text-slate-700 uppercase tracking-wide mb-2">
                Case Number
              </label>
              <input
                type="text"
                id="caseNumber"
                value={metadata.caseNumber}
                onChange={(e) => handleInputChange('caseNumber', e.target.value)}
                onFocus={() => setFocusedField('caseNumber')}
                onBlur={() => setFocusedField(null)}
                className={getInputClass('caseNumber')}
                style={sharedInputStyle}
                placeholder="e.g., 22-CV-12345"
                required
              />
            </div>

            <div className="relative">
              <label htmlFor="jurisdiction" className="block text-sm font-semibold text-slate-700 uppercase tracking-wide mb-2">
                Jurisdiction
              </label>
              <input
                type="text"
                id="jurisdiction"
                value={metadata.jurisdiction}
                onChange={(e) => handleInputChange('jurisdiction', e.target.value)}
                onFocus={() => setFocusedField('jurisdiction')}
                onBlur={() => setFocusedField(null)}
                className={getInputClass('jurisdiction')}
                style={sharedInputStyle}
                placeholder="e.g., Superior Court of California"
                required
              />
            </div>
          </div>
        </div>
      </div>

      {/* People Section */}
      <div className="bg-blue-50/50 rounded-xl p-4 mx-4 mb-8">
        <div className="flex items-center gap-2 mb-6">
          <h3 className="text-lg font-semibold text-slate-800">People</h3>
        </div>
        
        <div className="space-y-6">
          <div className="relative">
            <label htmlFor="deponent" className="block text-sm font-semibold text-slate-700 uppercase tracking-wide mb-2">
              Deponent Name
            </label>
            <input
              type="text"
              id="deponent"
              value={metadata.deponent}
              onChange={(e) => handleInputChange('deponent', e.target.value)}
              onFocus={() => setFocusedField('deponent')}
              onBlur={() => setFocusedField(null)}
              className={getInputClass('deponent')}
              style={sharedInputStyle}
              placeholder="e.g., John Smith"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <label htmlFor="takingAttorney" className="block text-sm font-semibold text-slate-700 uppercase tracking-wide mb-2">
                Taking Attorney
              </label>
              <input
                type="text"
                id="takingAttorney"
                value={metadata.takingAttorney}
                onChange={(e) => handleInputChange('takingAttorney', e.target.value)}
                onFocus={() => setFocusedField('takingAttorney')}
                onBlur={() => setFocusedField(null)}
                className={getInputClass('takingAttorney')}
                style={sharedInputStyle}
                placeholder="e.g., Jane Doe, Esq."
                required
              />
            </div>

            <div className="relative">
              <label htmlFor="defendingAttorney" className="block text-sm font-semibold text-slate-700 uppercase tracking-wide mb-2">
                Defending Attorney
              </label>
              <input
                type="text"
                id="defendingAttorney"
                value={metadata.defendingAttorney}
                onChange={(e) => handleInputChange('defendingAttorney', e.target.value)}
                onFocus={() => setFocusedField('defendingAttorney')}
                onBlur={() => setFocusedField(null)}
                className={getInputClass('defendingAttorney')}
                style={sharedInputStyle}
                placeholder="e.g., Robert Johnson, Esq."
                required
              />
            </div>
          </div>
        </div>
      </div>

      {/* Date Section */}
      <div className="bg-emerald-50/50 rounded-xl p-4 mx-4">
        <div className="flex items-center gap-2 mb-6">
          <h3 className="text-lg font-semibold text-slate-800">Schedule</h3>
        </div>
        
        <div className="relative">
          <label htmlFor="depositionDate" className="block text-sm font-semibold text-slate-700 uppercase tracking-wide mb-2">
            Deposition Date
          </label>
          <input
            type="date"
            id="depositionDate"
            value={metadata.depositionDate}
            onChange={(e) => handleInputChange('depositionDate', e.target.value)}
            onFocus={() => setFocusedField('depositionDate')}
            onBlur={() => setFocusedField(null)}
            className={getInputClass('depositionDate')}
            style={sharedInputStyle}
            required
          />
        </div>
      </div>
    </div>
  );
};
