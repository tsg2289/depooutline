'use client';

import { useState, useEffect } from 'react';
import { PlusIcon, DocumentTextIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import type { Matter, Deposition } from '@/types';
import { getMatterDepositions, createDeposition, updateDeposition, deleteDeposition } from '@/lib/actions/depositions';

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
  const [deletingDeposition, setDeletingDeposition] = useState<Deposition | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  useEffect(() => {
    if (selectedMatter) {
      loadDepositions();
    } else {
      setDepositions([]);
      onDepositionSelect(null);
    }
  }, [selectedMatter]); // eslint-disable-line react-hooks/exhaustive-deps

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

  const handleDeleteClick = (e: React.MouseEvent, deposition: Deposition) => {
    e.stopPropagation(); // Prevent deposition selection when clicking delete
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

  // Enhanced input styling matching CaseMetadataForm
  const getInputClass = (fieldName: string, hasValue: boolean = false) => {
    const isFocused = focusedField === fieldName;
    return `w-full px-4 py-3 text-base border-2 bg-white text-slate-900 placeholder:text-slate-400 transition-all duration-200 ${
      hasValue 
        ? 'border-green-400 bg-green-50' 
        : isFocused 
          ? 'border-indigo-400 bg-indigo-50' 
          : 'border-slate-300 hover:border-slate-400'
    }`;
  };

  const sharedInputStyle: React.CSSProperties = {
    borderRadius: 12,
  };

  if (!selectedMatter) {
    return (
      <div className="elevated-card card-shake p-8 overflow-hidden">
        <div className="mb-6">
          <div className="heading-bar heading-bar-bleed">
            <h2 className="panel-heading text-2xl text-white m-0 flex items-center gap-3">
              <DocumentTextIcon className="w-6 h-6" />
              Select Deposition
            </h2>
          </div>
        </div>
        <div className="bg-slate-50/50 rounded-xl p-4 mx-4 mb-8">
          <div className="text-center py-8">
            <div className="w-12 h-12 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <DocumentTextIcon className="w-6 h-6 text-gray-400" />
            </div>
            <p className="text-gray-500 text-sm">
              Please select a matter first to view depositions.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="elevated-card card-shake p-8 overflow-hidden">
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
    <div className="elevated-card card-shake p-8 overflow-hidden">
      <div className="mb-6">
        <div className="heading-bar heading-bar-bleed">
          <h2 className="panel-heading text-2xl text-white m-0 flex items-center gap-3">
            <DocumentTextIcon className="w-6 h-6" />
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
        <div className="bg-slate-50/50 rounded-xl p-4 mx-4 mb-8">
          <div className="flex items-center gap-2 mb-6">
            <h3 className="text-lg font-semibold text-slate-800">Create New Deposition</h3>
          </div>
          <form action={handleCreateDeposition} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <label htmlFor="title" className="block text-sm font-semibold text-slate-700 uppercase tracking-wide mb-2">
                  Deposition Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  required
                  onFocus={() => setFocusedField('title')}
                  onBlur={() => setFocusedField(null)}
                  className={getInputClass('title')}
                  style={sharedInputStyle}
                  placeholder="e.g., Dr. Smith Deposition"
                />
              </div>
              <div className="relative">
                <label htmlFor="deponentName" className="block text-sm font-semibold text-slate-700 uppercase tracking-wide mb-2">
                  Deponent Name
                </label>
                <input
                  type="text"
                  id="deponentName"
                  name="deponentName"
                  required
                  onFocus={() => setFocusedField('deponentName')}
                  onBlur={() => setFocusedField(null)}
                  className={getInputClass('deponentName')}
                  style={sharedInputStyle}
                  placeholder="e.g., Dr. John Smith"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <label htmlFor="date" className="block text-sm font-semibold text-slate-700 uppercase tracking-wide mb-2">
                  Deposition Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  onFocus={() => setFocusedField('date')}
                  onBlur={() => setFocusedField(null)}
                  className={getInputClass('date')}
                  style={sharedInputStyle}
                />
              </div>
              <div className="relative">
                <label htmlFor="caseName" className="block text-sm font-semibold text-slate-700 uppercase tracking-wide mb-2">
                  Case Name
                </label>
                <input
                  type="text"
                  id="caseName"
                  name="caseName"
                  onFocus={() => setFocusedField('caseName')}
                  onBlur={() => setFocusedField(null)}
                  className={getInputClass('caseName')}
                  style={sharedInputStyle}
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

      {editingDeposition && (
        <div className="mb-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <h3 className="text-sm font-medium text-blue-900 mb-3">Edit Deposition</h3>
          <form action={handleUpdateDeposition} className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label htmlFor="edit-title" className="block text-sm font-medium text-gray-700 mb-1">
                  Deposition Title *
                </label>
                <input
                  type="text"
                  id="edit-title"
                  name="title"
                  required
                  defaultValue={editingDeposition.title}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  placeholder="e.g., John Smith Deposition"
                />
              </div>
              <div>
                <label htmlFor="edit-deponentName" className="block text-sm font-medium text-gray-700 mb-1">
                  Deponent Name *
                </label>
                <input
                  type="text"
                  id="edit-deponentName"
                  name="deponentName"
                  required
                  defaultValue={editingDeposition.deponentName}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  placeholder="Full name of deponent"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label htmlFor="edit-date" className="block text-sm font-medium text-gray-700 mb-1">
                  Deposition Date
                </label>
                <input
                  type="date"
                  id="edit-date"
                  name="date"
                  defaultValue={editingDeposition.date ? editingDeposition.date.toISOString().split('T')[0] : ''}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
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

      {deletingDeposition && (
        <div className="mb-4 p-4 bg-red-50 rounded-lg border border-red-200">
          <h3 className="text-sm font-medium text-red-900 mb-3">Delete Deposition</h3>
          <p className="text-sm text-red-700 mb-4">
            Are you sure you want to delete &ldquo;{deletingDeposition.title}&rdquo;? This action cannot be undone.
          </p>
          <div className="flex gap-2">
            <button
              onClick={handleConfirmDelete}
              disabled={isDeleting}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 disabled:opacity-50 text-sm font-medium"
            >
              {isDeleting ? 'Deleting...' : 'Delete Deposition'}
            </button>
            <button
              type="button"
              onClick={() => setDeletingDeposition(null)}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 text-sm font-medium"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {!editingDeposition && !deletingDeposition && (
        <div className="bg-slate-50/50 rounded-xl p-4 mx-4 mb-8">
          <div className="flex items-center gap-2 mb-6">
            <h3 className="text-lg font-semibold text-slate-800">Deposition Selection</h3>
          </div>
          
          {depositions.length === 0 ? (
            <div className="text-center py-8">
              <div className="w-12 h-12 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <DocumentTextIcon className="w-6 h-6 text-gray-400" />
              </div>
              <p className="text-gray-500 text-sm">
                No depositions yet. Create your first deposition to get started.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="relative">
                <label htmlFor="deposition-select" className="block text-sm font-semibold text-slate-700 uppercase tracking-wide mb-2">
                  Selected Deposition
                </label>
                <div
                  className={getInputClass('deposition-select', !!selectedDeposition)}
                  style={sharedInputStyle}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="font-medium text-slate-900">
                        {selectedDeposition?.title || 'No deposition selected'}
                      </div>
                      {selectedDeposition && (
                        <div className="space-y-1 mt-2">
                          <div className="text-sm text-slate-600">
                            <span className="font-medium">Deponent:</span> {selectedDeposition.deponentName}
                          </div>
                          {selectedDeposition.date && (
                            <div className="text-sm text-slate-600">
                              <span className="font-medium">Date:</span> {new Date(selectedDeposition.date).toLocaleDateString()}
                            </div>
                          )}
                          {selectedDeposition.caseName && (
                            <div className="text-sm text-slate-600">
                              <span className="font-medium">Case:</span> {selectedDeposition.caseName}
                            </div>
                          )}
                          <div className="text-xs text-slate-500">
                            Created {new Date(selectedDeposition.createdAt).toLocaleDateString()}
                          </div>
                        </div>
                      )}
                    </div>
                    {selectedDeposition && (
                      <div className="flex items-center gap-1 ml-3">
                        <button
                          onClick={(e) => handleEditClick(e, selectedDeposition)}
                          className="flex items-center gap-1 px-2 py-1 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors text-sm"
                          title="Edit deposition"
                        >
                          <PencilIcon className="w-4 h-4" />
                        </button>
                        <button
                          onClick={(e) => handleDeleteClick(e, selectedDeposition)}
                          className="flex items-center gap-1 px-2 py-1 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded transition-colors text-sm"
                          title="Delete deposition"
                        >
                          <TrashIcon className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              {!selectedDeposition && (
                <div className="space-y-4">
                  <h4 className="text-sm font-semibold text-slate-700 uppercase tracking-wide">Available Depositions</h4>
                  <div className="grid gap-3">
                    {depositions.map((deposition) => (
                      <div
                        key={deposition.id}
                        onClick={() => onDepositionSelect(deposition)}
                        className="p-4 bg-white border-2 border-slate-200 rounded-xl cursor-pointer hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-200"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1 min-w-0">
                            <h5 className="font-medium text-slate-900 truncate">{deposition.title}</h5>
                            <div className="space-y-1 mt-2">
                              <div className="text-sm text-slate-600">
                                <span className="font-medium">Deponent:</span> {deposition.deponentName}
                              </div>
                              {deposition.date && (
                                <div className="text-sm text-slate-600">
                                  <span className="font-medium">Date:</span> {new Date(deposition.date).toLocaleDateString()}
                                </div>
                              )}
                              {deposition.caseName && (
                                <div className="text-sm text-slate-600">
                                  <span className="font-medium">Case:</span> {deposition.caseName}
                                </div>
                              )}
                            </div>
                            <div className="text-xs text-slate-400 mt-2">
                              Created {new Date(deposition.createdAt).toLocaleDateString()}
                            </div>
                          </div>
                          <div className="flex items-center gap-1 ml-3">
                            <button
                              onClick={(e) => handleEditClick(e, deposition)}
                              className="flex items-center gap-1 px-2 py-1 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors text-sm"
                              title="Edit deposition"
                            >
                              <PencilIcon className="w-4 h-4" />
                            </button>
                            <button
                              onClick={(e) => handleDeleteClick(e, deposition)}
                              className="flex items-center gap-1 px-2 py-1 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded transition-colors text-sm"
                              title="Delete deposition"
                            >
                              <TrashIcon className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
