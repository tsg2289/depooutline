import React from 'react';
import type { OutlineSection } from '@/types';

interface SectionNotesPanelProps {
  sections: OutlineSection[];
  selectedSectionId: string | null;
  onSectionsChange: (sections: OutlineSection[]) => void;
}

export const SectionNotesPanel: React.FC<SectionNotesPanelProps> = ({ sections, selectedSectionId, onSectionsChange }) => {
  const selectedIndex = selectedSectionId ? sections.findIndex(s => s.id === selectedSectionId) : -1;
  const selectedSection = selectedIndex >= 0 ? sections[selectedIndex] : null;

  const updateNotes = (value: string) => {
    if (selectedIndex < 0) return;
    const next = [...sections];
    next[selectedIndex] = { ...next[selectedIndex], notes: value };
    onSectionsChange(next);
  };

  return (
    <div className="elevated-card p-8 overflow-hidden">
      <div className="mb-6">
        <div className="heading-bar heading-bar-bleed">
          <h2 className="text-2xl panel-heading text-white m-0">Section Notes</h2>
        </div>
      </div>

      {!selectedSection && (
        <p className="subtle-help">Select a section to add notes. Notes are saved with the outline.</p>
      )}

      {selectedSection && (
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-slate-700 uppercase tracking-wide">{selectedSection.title}</label>
          <textarea
            value={selectedSection.notes || ''}
            onChange={(e) => updateNotes(e.target.value)}
            placeholder="Type notes for this section here..."
            className="w-full px-3.5 py-2.5 text-base focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-slate-400 border bg-white text-slate-900 placeholder:text-slate-400"
            style={{ borderRadius: 10, backgroundColor: '#ffffff', borderColor: '#cbd5e1' }}
            rows={12}
          />
        </div>
      )}
    </div>
  );
};


