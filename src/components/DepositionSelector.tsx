'use client';

import { useState, useEffect } from 'react';
import { PlusIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import type { Matter, Deposition } from '@/types';
import { getMatterDepositions, createDeposition } from '@/lib/actions/depositions';

interface DepositionSelectorProps {
  selectedMatter: Matter | null;
  selectedDeposition: Deposition | null;
  onDepositionSelect: (deposition: Deposition | null) => void;
}

export function DepositionSelector({ 
  selectedMatter, 
  selectedDeposition, 
  onDepositionSelect 
}: DepositionSelectorProps) {
  const [depositions, setDepositions] = useState<Deposition[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [isCreating, setIsCreating] = useState(false);

  useEffect(() => {
    if (selectedMatter) {
      loadDepositions();
    } else {
      setDepositions([]);
      onDepositionSelect(null);
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

  const handleCreateDeposition = async (formData: FormData) => {
    if (!selectedMatter) return;
    
    setIsCreating(true);
    try {
      const result = await createDeposition(selectedMatter.id, formData);
      if (result.success) {
        await loadDepositions();
        onDepositionSelect(result.deposition);
        setShowCreateForm(false);
      }
    } catch (error) {
      console.error('Failed to create deposition:', error);
    } finally {
      setIsCreating(false);
    }
  };

  if (!selectedMatter) {
    return (
      <div className="elevated-card p-6">
        <div className="heading-bar">
          <h2 className="text-xl panel-heading text-white m-0 flex items-center gap-2">
            <DocumentTextIcon className="w-5 h-5" />
            Select Deposition
          </h2>
        </div>
        <div className="mt-4">
          <p className="text-gray-500 text-sm italic text-center py-8">
            Please select a matter first to view depositions.
          </p>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="elevated-card p-6">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded mb-4"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="elevated-card p-6">
      <div className="mb-4">
        <div className="heading-bar">
          <h2 className="text-xl panel-heading text-white m-0 flex items-center gap-2">
            <DocumentTextIcon className="w-5 h-5" />
            Select Deposition
          </h2>
          <button
            onClick={() => setShowCreateForm(true)}
            className="px-3 py-1 bg-white/20 hover:bg-white/30 text-white rounded-md text-sm font-medium transition-colors flex items-center gap-1"
          >
            <PlusIcon className="w-4 h-4" />
            New
          </button>
        </div>
      </div>

      {showCreateForm && (
        <div className="mb-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <form action={handleCreateDeposition} className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                  Deposition Title *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                  placeholder="e.g., Dr. Smith Deposition"
                />
              </div>
              <div>
                <label htmlFor="deponentName" className="block text-sm font-medium text-gray-700 mb-1">
                  Deponent Name *
                </label>
                <input
                  type="text"
                  id="deponentName"
                  name="deponentName"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                  placeholder="e.g., Dr. John Smith"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                  Deposition Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                />
              </div>
              <div>
                <label htmlFor="caseName" className="block text-sm font-medium text-gray-700 mb-1">
                  Case Name
                </label>
                <input
                  type="text"
                  id="caseName"
                  name="caseName"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                  placeholder="e.g., Smith v. Johnson"
                />
              </div>
            </div>

            <div className="flex gap-2">
              <button
                type="submit"
                disabled={isCreating}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:opacity-50 text-sm font-medium"
              >
                {isCreating ? 'Creating...' : 'Create Deposition'}
              </button>
              <button
                type="button"
                onClick={() => setShowCreateForm(false)}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 text-sm font-medium"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="space-y-2">
        {depositions.length === 0 ? (
          <p className="text-gray-500 text-sm italic text-center py-4">
            No depositions yet. Create your first deposition to get started.
          </p>
        ) : (
          depositions.map((deposition) => (
            <div
              key={deposition.id}
              onClick={() => onDepositionSelect(deposition)}
              className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                selectedDeposition?.id === deposition.id
                  ? 'bg-indigo-50 border-indigo-200'
                  : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900 text-sm">{deposition.title}</h3>
                  <p className="text-xs text-gray-600 mt-1">
                    Deponent: {deposition.deponentName}
                    {deposition.date && (
                      <span className="ml-2">
                        • {new Date(deposition.date).toLocaleDateString()}
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
