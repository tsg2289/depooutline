'use client';

import { useState, useEffect } from 'react';
import { DocumentTextIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import type { Matter, Deposition } from '@/types';
import { getMatterDepositions, deleteDeposition } from '@/lib/actions/depositions';

interface DepositionNavigationProps {
  selectedMatter: Matter | null;
  selectedDeposition: Deposition | null;
  onDepositionSelect: (deposition: Deposition | null) => void;
  onEditDeposition?: (deposition: Deposition) => void;
}

export function DepositionNavigation({ 
  selectedMatter, 
  selectedDeposition, 
  onDepositionSelect,
  onEditDeposition 
}: DepositionNavigationProps) {
  const [depositions, setDepositions] = useState<Deposition[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [deletingDeposition, setDeletingDeposition] = useState<Deposition | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (selectedMatter) {
      loadDepositions();
    } else {
      setDepositions([]);
    }
  }, [selectedMatter]);

  const loadDepositions = async () => {
    if (!selectedMatter) return;
    
    setIsLoading(true);
    try {
      const matterDepositions = await getMatterDepositions(selectedMatter.id);
      setDepositions(matterDepositions);
    } catch (error) {
      console.error('Failed to load depositions:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteClick = (e: React.MouseEvent, deposition: Deposition) => {
    e.stopPropagation();
    setDeletingDeposition(deposition);
  };

  const handleConfirmDelete = async () => {
    if (!deletingDeposition) return;
    
    setIsDeleting(true);
    try {
      const result = await deleteDeposition(deletingDeposition.id);
      if (result.success) {
        await loadDepositions();
        // Clear selected deposition if it was the one being deleted
        if (selectedDeposition?.id === deletingDeposition.id) {
          onDepositionSelect(null);
        }
        setDeletingDeposition(null);
      }
    } catch (error) {
      console.error('Failed to delete deposition:', error);
    } finally {
      setIsDeleting(false);
    }
  };

  if (!selectedMatter || isLoading) {
    return null;
  }

  // Filter out current deposition to show only other depositions
  const otherDepositions = depositions.filter(d => d.id !== selectedDeposition?.id);

  if (otherDepositions.length === 0) {
    return null;
  }

  return (
    <div className="elevated-card card-shake p-6 overflow-hidden">
      <div className="mb-4">
        <div className="heading-bar heading-bar-bleed">
          <h3 className="panel-heading text-lg text-white m-0 flex items-center gap-2">
            <DocumentTextIcon className="w-5 h-5" />
            Other Depositions in {selectedMatter.title}
          </h3>
        </div>
      </div>

      {deletingDeposition && (
        <div className="mb-4 p-4 bg-red-50 rounded-lg border border-red-200">
          <h4 className="text-sm font-medium text-red-900 mb-3">Delete Deposition</h4>
          <p className="text-sm text-red-700 mb-4">
            Are you sure you want to delete &ldquo;{deletingDeposition.title}&rdquo;? This action cannot be undone.
          </p>
          <div className="flex gap-2">
            <button
              onClick={handleConfirmDelete}
              disabled={isDeleting}
              className="px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 disabled:opacity-50 text-sm font-medium"
            >
              {isDeleting ? 'Deleting...' : 'Delete'}
            </button>
            <button
              type="button"
              onClick={() => setDeletingDeposition(null)}
              className="px-3 py-1 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 text-sm font-medium"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="bg-slate-50/50 rounded-xl p-4 mx-4">
        <div className="space-y-3">
          {otherDepositions.map((deposition) => (
            <div
              key={deposition.id}
              onClick={() => onDepositionSelect(deposition)}
              className="p-3 bg-white border-2 border-slate-200 rounded-lg cursor-pointer hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-200"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0">
                  <h5 className="font-medium text-slate-900 text-sm truncate">{deposition.title}</h5>
                  <div className="text-xs text-slate-600 mt-1">
                    <span className="font-medium">Deponent:</span> {deposition.deponentName}
                  </div>
                  {deposition.date && (
                    <div className="text-xs text-slate-600">
                      <span className="font-medium">Date:</span> {new Date(deposition.date).toLocaleDateString()}
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-1 ml-2">
                  {onEditDeposition && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onEditDeposition(deposition);
                      }}
                      className="p-1 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
                      title="Edit deposition"
                    >
                      <PencilIcon className="w-3 h-3" />
                    </button>
                  )}
                  <button
                    onClick={(e) => handleDeleteClick(e, deposition)}
                    className="p-1 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
                    title="Delete deposition"
                  >
                    <TrashIcon className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
