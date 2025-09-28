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

  if (!selectedMatter) {
    return (
      <div className="elevated-card p-4">
        <div className="heading-bar">
          <h2 className="text-xl panel-heading text-white m-0 flex items-center gap-2">
            <DocumentTextIcon className="w-5 h-5" />
            Select Deposition
          </h2>
        </div>
        <div className="mt-4">
          <p className="text-gray-500 text-sm italic text-center py-3">
            Please select a matter first to view depositions.
          </p>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="elevated-card p-4">
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
    <div className="elevated-card p-4">
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
            Are you sure you want to delete "{deletingDeposition.title}"? This action cannot be undone.
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
        <div className="space-y-8">
          {depositions.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500 text-sm italic">
                No depositions yet. Create your first deposition to get started.
              </p>
            </div>
          ) : (
            depositions.map((deposition) => (
            <div
              key={deposition.id}
              onClick={() => onDepositionSelect(deposition)}
              className={`relative bg-white rounded-3xl cursor-pointer transition-all duration-300 hover:shadow-xl shadow-md border border-gray-100 hover:border-gray-200 ${
                selectedDeposition?.id === deposition.id
                  ? 'shadow-xl ring-2 ring-indigo-300 bg-gradient-to-br from-indigo-50 to-blue-50 border-indigo-200'
                  : 'hover:shadow-xl hover:-translate-y-1'
              }`}
              style={{
                boxShadow: selectedDeposition?.id === deposition.id 
                  ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(99, 102, 241, 0.1)'
                  : '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
              }}
            >
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`w-3 h-3 rounded-full flex-shrink-0 ${
                        selectedDeposition?.id === deposition.id ? 'bg-indigo-500' : 'bg-gray-300'
                      }`}></div>
                      <h3 className="font-semibold text-gray-900 text-sm truncate">{deposition.title}</h3>
                    </div>
                    <div className="space-y-1 mb-2">
                      <p className="text-xs text-gray-600">
                        <span className="font-medium">Deponent:</span> {deposition.deponentName}
                      </p>
                      {deposition.date && (
                        <p className="text-xs text-gray-600">
                          <span className="font-medium">Date:</span> {new Date(deposition.date).toLocaleDateString()}
                        </p>
                      )}
                      {deposition.caseName && (
                        <p className="text-xs text-gray-600">
                          <span className="font-medium">Case:</span> {deposition.caseName}
                        </p>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-400">
                        Created {new Date(deposition.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 ml-3">
                    <button
                      onClick={(e) => handleEditClick(e, deposition)}
                      className="flex items-center gap-1 px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors text-sm font-medium"
                      title="Edit deposition"
                    >
                      <PencilIcon className="w-4 h-4" />
                      Edit
                    </button>
                    <button
                      onClick={(e) => handleDeleteClick(e, deposition)}
                      className="flex items-center gap-1 px-3 py-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors text-sm font-medium"
                      title="Delete deposition"
                    >
                      <TrashIcon className="w-4 h-4" />
                      Delete
                    </button>
                  </div>
                </div>
                {selectedDeposition?.id === deposition.id && (
                  <div className="absolute -top-1 -right-1">
                    <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))
        )}
        </div>
      )}
    </div>
  );
}
