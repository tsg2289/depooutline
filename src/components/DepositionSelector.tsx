'use client';

import { useState, useEffect } from 'react';
import { PlusIcon, DocumentTextIcon, PencilIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import type { Matter, Deposition } from '@/types';
import { getMatterDepositions, createDeposition, updateDeposition } from '@/lib/actions/depositions';

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
  const [editingDeposition, setEditingDeposition] = useState<Deposition | null>(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

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

  const handleUpdateDeposition = async (formData: FormData) => {
    if (!editingDeposition) return;
    
    setIsUpdating(true);
    try {
      const result = await updateDeposition(editingDeposition.id, formData);
      if (result.success) {
        await loadDepositions();
        // Update selected deposition if it was the one being edited
        if (selectedDeposition?.id === editingDeposition.id) {
          onDepositionSelect(result.deposition);
        }
        setEditingDeposition(null);
      }
    } catch (error) {
      console.error('Failed to update deposition:', error);
    } finally {
      setIsUpdating(false);
    }
  };

  const handleEditClick = (e: React.MouseEvent, deposition: Deposition) => {
    e.stopPropagation(); // Prevent deposition selection when clicking edit
    setEditingDeposition(deposition);
  };

  if (!selectedMatter) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="text-center mb-6">
          <h2 className="text-xl font-medium text-gray-700">Select Deposition</h2>
        </div>
        <div className="text-center py-8">
          <div className="w-12 h-12 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
            <DocumentTextIcon className="w-6 h-6 text-gray-400" />
          </div>
          <p className="text-gray-500 text-sm">
            Please select a matter first to view depositions.
          </p>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-6">
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
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="text-center mb-6">
        <h2 className="text-xl font-medium text-gray-700">Select Deposition</h2>
      </div>

      {showCreateForm && (
        <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <form action={handleCreateDeposition} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                  Deposition Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="e.g., Dr. Smith Deposition"
                />
              </div>
              <div>
                <label htmlFor="deponentName" className="block text-sm font-medium text-gray-700 mb-1">
                  Deponent Name
                </label>
                <input
                  type="text"
                  id="deponentName"
                  name="deponentName"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="e.g., Dr. John Smith"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                  Deposition Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="e.g., Smith v. Johnson"
                />
              </div>
            </div>

            <div className="flex gap-2">
              <button
                type="submit"
                disabled={isCreating}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 text-sm font-medium"
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

      {editingDeposition && (
        <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <h3 className="text-sm font-medium text-gray-900 mb-3">Edit Deposition</h3>
          <form action={handleUpdateDeposition} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="edit-title" className="block text-sm font-medium text-gray-700 mb-1">
                  Deposition Title
                </label>
                <input
                  type="text"
                  id="edit-title"
                  name="title"
                  required
                  defaultValue={editingDeposition.title}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="e.g., John Smith Deposition"
                />
              </div>
              <div>
                <label htmlFor="edit-deponentName" className="block text-sm font-medium text-gray-700 mb-1">
                  Deponent Name
                </label>
                <input
                  type="text"
                  id="edit-deponentName"
                  name="deponentName"
                  required
                  defaultValue={editingDeposition.deponentName}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Full name of deponent"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="edit-date" className="block text-sm font-medium text-gray-700 mb-1">
                  Deposition Date
                </label>
                <input
                  type="date"
                  id="edit-date"
                  name="date"
                  defaultValue={editingDeposition.date ? editingDeposition.date.toISOString().split('T')[0] : ''}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="edit-caseName" className="block text-sm font-medium text-gray-700 mb-1">
                  Case Name
                </label>
                <input
                  type="text"
                  id="edit-caseName"
                  name="caseName"
                  defaultValue={editingDeposition.caseName || ''}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="e.g., Smith v. Johnson"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <button
                type="submit"
                disabled={isUpdating}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 text-sm font-medium"
              >
                {isUpdating ? 'Updating...' : 'Update Deposition'}
              </button>
              <button
                type="button"
                onClick={() => setEditingDeposition(null)}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 text-sm font-medium"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {!editingDeposition && (
        <div className="space-y-4">
          {depositions.length === 0 ? (
            <div className="text-center py-8">
              <div className="w-12 h-12 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <DocumentTextIcon className="w-6 h-6 text-gray-400" />
              </div>
              <p className="text-gray-500 text-sm">
                No depositions yet. Create your first deposition to get started.
              </p>
              <button
                onClick={() => setShowCreateForm(true)}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium flex items-center gap-2 mx-auto"
              >
                <PlusIcon className="w-4 h-4" />
                Create New Deposition
              </button>
            </div>
          ) : (
            <>
              <div className="relative">
                <label htmlFor="deposition-select" className="block text-sm font-medium text-gray-700 mb-1">
                  Deposition
                </label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-left focus:ring-2 focus:ring-blue-500 focus:border-blue-500 flex items-center justify-between"
                  >
                    <span className="text-gray-900">
                      {selectedDeposition ? selectedDeposition.title : 'Select a Deposition'}
                    </span>
                    <ChevronDownIcon className={`w-5 h-5 text-gray-400 transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {showDropdown && (
                    <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                      {depositions.map((deposition) => (
                        <button
                          key={deposition.id}
                          type="button"
                          onClick={() => {
                            onDepositionSelect(deposition);
                            setShowDropdown(false);
                          }}
                          className={`w-full px-3 py-2 text-left hover:bg-gray-50 flex items-center justify-between ${
                            selectedDeposition?.id === deposition.id ? 'bg-blue-50 text-blue-700' : 'text-gray-900'
                          }`}
                        >
                          <div>
                            <div className="font-medium">{deposition.title}</div>
                            <div className="text-sm text-gray-500">
                              {deposition.deponentName}
                              {deposition.date && ` • ${new Date(deposition.date).toLocaleDateString()}`}
                            </div>
                          </div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleEditClick(e, deposition);
                              setShowDropdown(false);
                            }}
                            className="ml-2 p-1 text-gray-400 hover:text-blue-600 rounded"
                            title="Edit deposition"
                          >
                            <PencilIcon className="w-4 h-4" />
                          </button>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex justify-center">
                <button
                  onClick={() => setShowCreateForm(true)}
                  className="px-4 py-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-md text-sm font-medium flex items-center gap-2"
                >
                  <PlusIcon className="w-4 h-4" />
                  Create New Deposition
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
