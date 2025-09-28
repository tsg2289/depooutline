import React, { useState, useRef, useEffect } from 'react';
import type { OutlineSection, CaseMetadata } from '@/types';
import { ChevronDownIcon, ChevronRightIcon, ArrowsUpDownIcon } from '@heroicons/react/24/outline';

interface SectionSelectorProps {
  sections: OutlineSection[];
  onSectionsChange: (sections: OutlineSection[]) => void;
  onSelectSection?: (sectionId: string) => void;
  metadata: CaseMetadata;
  depositionId?: string;
  isE2EEEnabled?: boolean;
}

export const SectionSelector: React.FC<SectionSelectorProps> = ({ sections, onSectionsChange, onSelectSection, metadata, depositionId, isE2EEEnabled }) => {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());
  const [dragIndex, setDragIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);
  const initialOrderRef = useRef<string[] | null>(null);
  const MAX_QUESTIONS = 25;

  useEffect(() => {
    if (!initialOrderRef.current) {
      initialOrderRef.current = sections.map(s => s.id);
    }
  }, [sections]);

  // no-op

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
      // Auto-populate one empty question when expanding
      const section = sections.find(s => s.id === sectionId);
      if (section && (!section.customQuestions || section.customQuestions.length === 0)) {
        const updatedSections = sections.map(s => 
          s.id === sectionId ? { ...s, customQuestions: [''] } : s
        );
        onSectionsChange(updatedSections);
      }
    }
    setExpandedSections(newExpanded);
  };

  const reorderSections = (from: number, to: number) => {
    if (from === to || from < 0 || to < 0 || from >= sections.length || to >= sections.length) return;
    const newOrder = [...sections];
    const [moved] = newOrder.splice(from, 1);
    newOrder.splice(to, 0, moved);
    onSectionsChange(newOrder);
  };

  const resetOrder = () => {
    if (!initialOrderRef.current) return;
    const indexOf = new Map(initialOrderRef.current.map((id, i) => [id, i] as const));
    const newOrder = [...sections].sort((a, b) => (indexOf.get(a.id) ?? 0) - (indexOf.get(b.id) ?? 0));
    onSectionsChange(newOrder);
  };

  const toggleSectionEnabled = (sectionId: string) => {
    const current = sections.find(s => s.id === sectionId);
    const newEnabled = !current?.enabled;

    const updatedSections = sections.map(section => {
      if (section.id === sectionId) {
        return {
          ...section,
          enabled: newEnabled,
          subsections: section.subsections?.map(sub => ({ ...sub, enabled: newEnabled }))
        };
      }
      return section;
    });

    onSectionsChange(updatedSections);

    setExpandedSections(prev => {
      const next = new Set(prev);
      if (newEnabled) {
        next.add(sectionId);
      } else {
        next.delete(sectionId);
      }
      return next;
    });
  };

  const toggleSubsectionEnabled = (parentId: string, subsectionId: string) => {
    const updatedSections = sections.map(section => {
      if (section.id === parentId && section.subsections) {
        const updatedSubsections = section.subsections.map(subsection => {
          if (subsection.id === subsectionId) {
            return { ...subsection, enabled: !subsection.enabled };
          }
          return subsection;
        });
        const anySubsectionEnabled = updatedSubsections.some(sub => sub.enabled);
        return { ...section, subsections: updatedSubsections, enabled: anySubsectionEnabled };
      }
      return section;
    });
    onSectionsChange(updatedSections);

    const parentAfter = updatedSections.find(s => s.id === parentId);
    setExpandedSections(prev => {
      const next = new Set(prev);
      if (parentAfter?.enabled) next.add(parentId);
      else next.delete(parentId);
      return next;
    });
  };

  const selectAll = () => {
    const updatedSections = sections.map(section => ({
      ...section,
      enabled: true,
      subsections: section.subsections?.map(sub => ({ ...sub, enabled: true }))
    }));
    onSectionsChange(updatedSections);
    setExpandedSections(new Set(updatedSections.map(s => s.id)));
  };

  const selectNone = () => {
    const updatedSections = sections.map(section => ({
      ...section,
      enabled: false,
      subsections: section.subsections?.map(sub => ({ ...sub, enabled: false }))
    }));
    onSectionsChange(updatedSections);
    setExpandedSections(new Set());
  };

  const renderSection = (section: OutlineSection, level: number = 0, index?: number) => {
    const hasSubsections = section.subsections && section.subsections.length > 0;

    const sectionTextColor = section.enabled ? 'text-slate-900' : 'text-slate-600';
    const sectionBadgeColor = section.enabled ? 'text-indigo-700 bg-indigo-100' : 'text-slate-600 bg-slate-100';

    const isTopLevel = level === 0 && typeof index === 'number';
    const isExpanded = expandedSections.has(section.id) && section.enabled;

    return (
      <div key={section.id} className={`mb-2 ${level === 0 ? 'pl-2' : 'pl-8'}`}>
        {!isExpanded && (
        <div
            className={`flex items-center gap-3 py-2.5 px-3 ${
              dragOverIndex === index ? 'ring-2 ring-indigo-200' : ''
            } transition-colors cursor-pointer`}
            style={{
              background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%)',
              border: '1px solid #e2e8f0',
              borderRadius: '16px'
            }}
          onClick={() => {
            if (hasSubsections && section.enabled) {
              toggleSection(section.id);
            }
              onSelectSection?.(section.id);
          }}
          draggable={isTopLevel}
          onDragStart={(e) => {
            if (!isTopLevel) return;
            setDragIndex(index!);
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text/plain', String(index));
          }}
          onDragOver={(e) => {
            if (!isTopLevel) return;
            e.preventDefault();
            setDragOverIndex(index!);
            e.dataTransfer.dropEffect = 'move';
          }}
          onDragLeave={() => {
            if (!isTopLevel) return;
            setDragOverIndex(null);
          }}
          onDrop={(e) => {
            if (!isTopLevel) return;
            e.preventDefault();
            const from = dragIndex ?? Number(e.dataTransfer.getData('text/plain'));
            const to = index!;
            reorderSections(from, to);
            setDragIndex(null);
            setDragOverIndex(null);
          }}
          onDragEnd={() => {
            setDragIndex(null);
            setDragOverIndex(null);
          }}
        >
          <input
            type="checkbox"
            checked={section.enabled}
            onChange={(e) => {
              e.stopPropagation();
              toggleSectionEnabled(section.id);
            }}
            className="w-5 h-5 rounded border transition-all"
            style={{
              accentColor: section.enabled ? '#4f46e5' : '#cbd5e1',
              borderColor: section.enabled ? '#818cf8' : '#cbd5e1'
            }}
          />

          {hasSubsections && (
            <div className="transition-transform duration-200">
              {isExpanded ? (
                <ChevronDownIcon className="w-6 h-6 text-indigo-600" />
              ) : (
                <ChevronRightIcon className={`w-6 h-6 ${section.enabled ? 'text-indigo-600' : 'text-slate-400'}`} />
              )}
            </div>
          )}

          <div className="flex-1">
            <label className={`cursor-pointer transition-colors duration-200 block ${sectionTextColor} text-xl ${level === 0 ? 'font-bold' : 'font-medium'}`}>
              {level === 0 && typeof index === 'number' ? (
                <>
                  <span className="font-black text-slate-900">{index + 1}.</span>{' '}
                  <span className="font-black underline underline-offset-4">{section.title}</span>
                </>
              ) : (
                section.title
              )}
            </label>
          </div>

          <span className={`hidden sm:inline-flex items-center gap-2 text-xs font-medium px-2.5 py-1 rounded-full ${sectionBadgeColor}`}>
            <ArrowsUpDownIcon className="w-4 h-4" /> drag to reorder
          </span>
        </div>
        )}

        {hasSubsections && isExpanded && (
          <div className="mt-4 bg-slate-50 border border-slate-200 p-4 mx-2" style={{ borderRadius: '16px' }}>
            {/* Section title with checkbox inside box */}
            <div className="mb-4 pb-3 border-b border-slate-300 flex items-center gap-3 p-3" style={{
              background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%)',
              border: '1px solid #e2e8f0',
              borderRadius: '16px'
            }}>
              <input
                type="checkbox"
                checked={section.enabled}
                onChange={(e) => {
                  e.stopPropagation();
                  toggleSectionEnabled(section.id);
                }}
                className="w-5 h-5 rounded border transition-all"
                style={{
                  accentColor: section.enabled ? '#4f46e5' : '#cbd5e1',
                  borderColor: section.enabled ? '#818cf8' : '#cbd5e1'
                }}
              />
              <label className={`cursor-pointer transition-colors duration-200 flex-1 ${sectionTextColor} text-xl font-bold`}>
                {level === 0 && typeof index === 'number' ? (
                  <>
                    <span className="font-black text-slate-900">{index + 1}.</span>{' '}
                    <span className="font-black underline underline-offset-4">{section.title}</span>
                  </>
                ) : (
                  section.title
                )}
              </label>
              <div className="flex items-center gap-2">
                <div className="flex flex-col gap-1">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      const updatedSections = sections.map(s => {
                        if (s.id === section.id && s.subsections) {
                          return {
                            ...s,
                            enabled: true,
                            subsections: s.subsections.map(sub => ({ ...sub, enabled: true }))
                          };
                        }
                        return s;
                      });
                      onSectionsChange(updatedSections);
                      setExpandedSections(prev => new Set([...prev, section.id]));
                    }}
                    className="px-2 py-1 text-xs font-medium text-white bg-green-600 border border-green-600 hover:bg-green-700 transition-colors"
                    style={{ 
                      borderRadius: '16px',
                      backgroundColor: '#16a34a',
                      borderColor: '#16a34a',
                      color: 'white'
                    }}
                  >
                    Select All
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      const updatedSections = sections.map(s => {
                        if (s.id === section.id && s.subsections) {
                          return {
                            ...s,
                            subsections: s.subsections.map(sub => ({ ...sub, enabled: false }))
                          };
                        }
                        return s;
                      });
                      onSectionsChange(updatedSections);
                    }}
                    className="px-2 py-1 text-xs font-medium text-white bg-red-600 border border-red-600 hover:bg-red-700 transition-colors"
                    style={{ 
                      borderRadius: '16px',
                      backgroundColor: '#dc2626',
                      borderColor: '#dc2626',
                      color: 'white'
                    }}
                  >
                    Clear All
                  </button>
                </div>
                <span className={`hidden sm:inline-flex items-center gap-2 text-xs font-medium px-2.5 py-1 rounded-full ${sectionBadgeColor}`}>
                  <ArrowsUpDownIcon className="w-4 h-4" /> drag to reorder
                </span>
              </div>
            </div>
            {/* Subsection list */}
            <div className="relative space-y-1.5 p-2 bg-transparent" style={{ marginLeft: '3.5rem' }}>
              <div className="absolute top-1 bottom-1 w-0.5 bg-slate-300 rounded-full" style={{ left: '0.5rem' }} />
            {section.subsections?.map((subsection) => {
              const subTextColor = subsection.enabled ? 'text-slate-900' : 'text-slate-600';
              const isSubheading = subsection.isSubheading;
              
              return (
                <div
                  key={subsection.id}
                    className={`flex items-center gap-2 py-1.5 pr-2 ${
                      subsection.enabled ? 'bg-white' : 'bg-slate-100/50'
                  } ${isSubheading ? 'pl-2 font-semibold' : 'pl-10'}`}
                    style={{ borderRadius: '12px' }}
                >
                  <input
                    type="checkbox"
                    checked={subsection.enabled}
                    onChange={(e) => {
                      e.stopPropagation();
                      toggleSubsectionEnabled(section.id, subsection.id);
                    }}
                    className="w-4 h-4 rounded border transition-all"
                    style={{
                      accentColor: subsection.enabled ? '#4f46e5' : '#cbd5e1',
                      borderColor: subsection.enabled ? '#818cf8' : '#cbd5e1'
                    }}
                  />
                    <label className={`flex-1 text-sm md:text-base cursor-pointer transition-colors duration-200 ${subTextColor} ${isSubheading ? 'font-bold text-base' : 'font-medium'}`}
                           onClick={() => { onSelectSection?.(section.id); }}>
                    {subsection.title.replace('[TAKING_ATTORNEY]', metadata.takingAttorney || '[Taking Attorney Name]')}
                  </label>
                </div>
              );
            })}
            </div>
            {/* Panels below checklist */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4">
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-slate-700 uppercase tracking-wide">Additional Questions</h4>
                </div>
                <div className="space-y-3 max-h-[280px] overflow-y-auto">
                  {(section.customQuestions || []).map((q, i) => (
                    <div className="flex items-center gap-3" key={i}>
                      <span className="text-xs text-slate-500 font-mono w-6">{i + 1}.</span>
                      <input
                        type="text"
                        value={q}
                        onChange={(e) => {
                          const next = sections.map(s => {
                            if (s.id !== section.id) return s;
                            const arr = [...(s.customQuestions || [])];
                            arr[i] = e.target.value;
                            return { ...s, customQuestions: arr };
                          });
                          onSectionsChange(next);
                        }}
                        placeholder="Enter your custom question..."
                        className="flex-1 px-3 py-2 text-sm border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        style={{ borderRadius: '12px' }}
                      />
                      <button
                        className="px-2 py-1 text-xs text-red-600 hover:text-red-800 hover:bg-red-50 rounded transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          const next = sections.map(s => {
                            if (s.id !== section.id) return s;
                            const arr = [...(s.customQuestions || [])];
                            arr.splice(i, 1);
                            return { ...s, customQuestions: arr };
                          });
                          onSectionsChange(next);
                        }}
                      >×</button>
                    </div>
                  ))}
                  <div className="mt-3 ml-8">
                    <button
                      className="px-3 py-1.5 text-sm font-medium text-indigo-600 bg-indigo-50 border border-indigo-200 rounded-md hover:bg-indigo-100 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        const current = section.customQuestions || [];
                        if (current.length >= MAX_QUESTIONS) return;
                        const next = sections.map(s => s.id === section.id ? { ...s, customQuestions: [...current, ''] } : s);
                        onSectionsChange(next);
                      }}
                      disabled={(section.customQuestions?.length || 0) >= MAX_QUESTIONS}
                    >+ Add Question</button>
                  </div>
                  {(section.customQuestions?.length || 0) === 0 && (
                    <p className="text-sm text-slate-500 italic text-center py-4">No additional questions yet</p>
                  )}
                </div>
              </div>

              <div className="px-6 py-4">
                <div className="mb-4 flex items-center justify-between">
                  <h4 className="text-sm font-semibold text-slate-700 uppercase tracking-wide">Section Notes</h4>
                  <span className="text-xs text-slate-500">Included in outline</span>
                </div>
                <div className="mx-2">
                  <textarea
                    value={section.notes || ''}
                    onChange={(e) => {
                      const next = sections.map(s => s.id === section.id ? { ...s, notes: e.target.value } : s);
                      onSectionsChange(next);
                    }}
                    placeholder={`Add notes for ${section.title}...`}
                    className="w-full px-3 py-2 text-sm border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                    style={{ borderRadius: '12px' }}
                    rows={6}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="elevated-card card-shake p-8 overflow-hidden">
      <div className="mb-6">
        <div className="heading-bar heading-bar-bleed">
          <h2 className="text-2xl panel-heading text-white m-0 flex items-center gap-3">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Select Sections
          </h2>
          <div className="flex space-x-3">
            <button onClick={selectAll} className="btn btn-success">Select All</button>
          </div>
        </div>
      </div>
      <p className="subtle-help mb-4">Tip: drag any section row to reorder. Checking a section reveals its questions.</p>

      <div className="space-y-3">
        {sections.map((section, idx) => renderSection(section, 0, idx))}
      </div>
      <div className="flex justify-end gap-3 mt-6">
        <button onClick={selectNone} className="btn btn-danger">Clear All</button>
        <button onClick={resetOrder} className="btn btn-info">Reset Order</button>
      </div>
    </div>
  );
};
