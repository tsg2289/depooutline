'use client';

import { useState, useEffect } from 'react';
import { PlusIcon, FolderIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import type { Matter } from '@/types';
import { getUserMatters, createMatter, updateMatter, deleteMatter } from '@/lib/actions/matters';

interface MatterSelectorProps {
  selectedMatter: Matter | null;
  onMatterSelect: (matter: Matter | null) => void;
}

export function MatterSelector({ selectedMatter, onMatterSelect }: MatterSelectorProps) {
  const [matters, setMatters] = useState<Matter[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [editingMatter, setEditingMatter] = useState<Matter | null>(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const [deletingMatter, setDeletingMatter] = useState<Matter | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  useEffect(() => {
    loadMatters();
  }, []);

  const loadMatters = async () => {
    try {
      const userMatters = await getUserMatters();
      setMatters(userMatters);
    } catch (error) {
      console.error('Failed to load matters:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateMatter = async (formData: FormData) => {
    setIsCreating(true);
    try {
      const result = await createMatter(formData);
      if (result.success) {
        await loadMatters();
        onMatterSelect(result.matter);
        setShowCreateForm(false);
      }
    } catch (error) {
      console.error('Failed to create matter:', error);
    } finally {
      setIsCreating(false);
    }
  };

  const handleUpdateMatter = async (formData: FormData) => {
    if (!editingMatter) return;
    
    setIsUpdating(true);
    try {
      const result = await updateMatter(editingMatter.id, formData);
      if (result.success) {
        await loadMatters();
        // Update selected matter if it was the one being edited
        if (selectedMatter?.id === editingMatter.id) {
          onMatterSelect(result.matter);
        }
        setEditingMatter(null);
      }
    } catch (error) {
      console.error('Failed to update matter:', error);
    } finally {
      setIsUpdating(false);
    }
  };

  const handleEditClick = (e: React.MouseEvent, matter: Matter) => {
    e.stopPropagation(); // Prevent matter selection when clicking edit
    setEditingMatter(matter);
  };

  const handleDeleteClick = (e: React.MouseEvent, matter: Matter) => {
    e.stopPropagation(); // Prevent matter selection when clicking delete
    setDeletingMatter(matter);
  };

  const handleConfirmDelete = async () => {
    if (!deletingMatter) return;
    
    setIsDeleting(true);
    try {
      const result = await deleteMatter(deletingMatter.id);
      if (result.success) {
        await loadMatters();
        // Clear selected matter if it was the one being deleted
        if (selectedMatter?.id === deletingMatter.id) {
          onMatterSelect(null);
        }
        setDeletingMatter(null);
      }
    } catch (error) {
      console.error('Failed to delete matter:', error);
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
    <div className="elevated-card card-shake p-8 overflow-hidden">
      <div className="mb-6">
        <div className="heading-bar heading-bar-bleed">
          <h2 className="panel-heading text-2xl text-white m-0 flex items-center gap-3">
            <FolderIcon className="w-6 h-6" />
            Select Matter
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
            <h3 className="text-lg font-semibold text-slate-800">Create New Matter</h3>
          </div>
          <form action={handleCreateMatter} className="space-y-6">
            <div className="relative">
              <label htmlFor="title" className="block text-sm font-semibold text-slate-700 uppercase tracking-wide mb-2">
                Matter Title
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
                placeholder="e.g., Smith v. Johnson Medical Malpractice"
              />
            </div>
            <div className="relative">
              <label htmlFor="description" className="block text-sm font-semibold text-slate-700 uppercase tracking-wide mb-2">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={3}
                onFocus={() => setFocusedField('description')}
                onBlur={() => setFocusedField(null)}
                className={getInputClass('description')}
                style={sharedInputStyle}
                placeholder="Brief description of the matter..."
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="e2eeEnabled"
                name="e2eeEnabled"
                value="true"
                defaultChecked
                className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label htmlFor="e2eeEnabled" className="ml-2 text-sm text-slate-700">
                Enable end-to-end encryption (recommended)
              </label>
            </div>
            <div className="flex gap-2">
              <button
                type="submit"
                disabled={isCreating}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:opacity-50 text-sm font-medium"
              >
                {isCreating ? 'Creating...' : 'Create Matter'}
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

      {editingMatter && (
        <div className="bg-blue-50/50 rounded-xl p-4 mx-4 mb-8">
          <div className="flex items-center gap-2 mb-6">
            <h3 className="text-lg font-semibold text-slate-800">Edit Matter</h3>
          </div>
          <form action={handleUpdateMatter} className="space-y-6">
            <div className="relative">
              <label htmlFor="edit-title" className="block text-sm font-semibold text-slate-700 uppercase tracking-wide mb-2">
                Matter Title
              </label>
              <input
                type="text"
                id="edit-title"
                name="title"
                required
                defaultValue={editingMatter.title}
                onFocus={() => setFocusedField('edit-title')}
                onBlur={() => setFocusedField(null)}
                className={getInputClass('edit-title', !!editingMatter.title)}
                style={sharedInputStyle}
                placeholder="e.g., Smith v. Johnson Medical Malpractice"
              />
            </div>
            <div className="relative">
              <label htmlFor="edit-description" className="block text-sm font-semibold text-slate-700 uppercase tracking-wide mb-2">
                Description
              </label>
              <textarea
                id="edit-description"
                name="description"
                rows={3}
                defaultValue={editingMatter.description || ''}
                onFocus={() => setFocusedField('edit-description')}
                onBlur={() => setFocusedField(null)}
                className={getInputClass('edit-description', !!editingMatter.description)}
                style={sharedInputStyle}
                placeholder="Brief description of the matter..."
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="edit-e2eeEnabled"
                name="e2eeEnabled"
                value="true"
                defaultChecked={editingMatter.e2eeEnabled}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="edit-e2eeEnabled" className="ml-2 text-sm text-slate-700">
                Enable end-to-end encryption (recommended)
              </label>
            </div>
            <div className="flex gap-2">
              <button
                type="submit"
                disabled={isUpdating}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 text-sm font-medium"
              >
                {isUpdating ? 'Updating...' : 'Update Matter'}
              </button>
              <button
                type="button"
                onClick={() => setEditingMatter(null)}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 text-sm font-medium"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {deletingMatter && (
        <div className="mb-4 p-4 bg-red-50 rounded-lg border border-red-200">
          <h3 className="text-sm font-medium text-red-900 mb-3">Delete Matter</h3>
          <p className="text-sm text-red-700 mb-4">
            Are you sure you want to delete &ldquo;{deletingMatter.title}&rdquo;? This action cannot be undone and will also delete all associated depositions.
          </p>
          <div className="flex gap-2">
            <button
              onClick={handleConfirmDelete}
              disabled={isDeleting}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 disabled:opacity-50 text-sm font-medium"
            >
              {isDeleting ? 'Deleting...' : 'Delete Matter'}
            </button>
            <button
              type="button"
              onClick={() => setDeletingMatter(null)}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 text-sm font-medium"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {!editingMatter && !deletingMatter && (
        <div className="bg-slate-50/50 rounded-xl p-4 mx-4 mb-8">
          <div className="flex items-center gap-2 mb-6">
            <h3 className="text-lg font-semibold text-slate-800">Matter Selection</h3>
          </div>
          
          {matters.length === 0 ? (
            <div className="text-center py-8">
              <div className="w-12 h-12 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <FolderIcon className="w-6 h-6 text-gray-400" />
              </div>
              <p className="text-gray-500 text-sm">
                No matters yet. Create your first matter to get started.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="relative">
                <label htmlFor="matter-select" className="block text-sm font-semibold text-slate-700 uppercase tracking-wide mb-2">
                  Selected Matter
                </label>
                <div
                  className={getInputClass('matter-select', !!selectedMatter)}
                  style={sharedInputStyle}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="font-medium text-slate-900">
                        {selectedMatter?.title || 'No matter selected'}
                      </div>
                      {selectedMatter?.description && (
                        <div className="text-sm text-slate-600 mt-1">
                          {selectedMatter.description}
                        </div>
                      )}
                      {selectedMatter && (
                        <div className="flex items-center gap-3 text-xs text-slate-500 mt-2">
                          <span className="flex items-center gap-1">
                            {selectedMatter.e2eeEnabled ? '🔒 E2EE' : '📝'} 
                            {selectedMatter.e2eeEnabled ? 'Enabled' : 'Standard'}
                          </span>
                          <span>
                            Created {new Date(selectedMatter.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                      )}
                    </div>
                    {selectedMatter && (
                      <div className="flex items-center gap-1 ml-3">
                        <button
                          onClick={(e) => handleEditClick(e, selectedMatter)}
                          className="flex items-center gap-1 px-2 py-1 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors text-sm"
                          title="Edit matter"
                        >
                          <PencilIcon className="w-4 h-4" />
                        </button>
                        <button
                          onClick={(e) => handleDeleteClick(e, selectedMatter)}
                          className="flex items-center gap-1 px-2 py-1 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded transition-colors text-sm"
                          title="Delete matter"
                        >
                          <TrashIcon className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              {!selectedMatter && (
                <div className="space-y-4">
                  <h4 className="text-sm font-semibold text-slate-700 uppercase tracking-wide">Available Matters</h4>
                  <div className="grid gap-3">{matters.map((matter) => (
                    <div
                      key={matter.id}
                      onClick={() => onMatterSelect(matter)}
                      className="p-4 bg-white border-2 border-slate-200 rounded-xl cursor-pointer hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-200"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1 min-w-0">
                          <h5 className="font-medium text-slate-900 truncate">{matter.title}</h5>
                          {matter.description && (
                            <p className="text-sm text-slate-600 mt-1 line-clamp-2">{matter.description}</p>
                          )}
                          <div className="flex items-center gap-2 mt-2">
                            {matter.e2eeEnabled && (
                              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                🔒 E2EE
                              </span>
                            )}
                            <span className="text-xs text-slate-400">
                              Created {new Date(matter.createdAt).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 ml-3">
                          <button
                            onClick={(e) => handleEditClick(e, matter)}
                            className="flex items-center gap-1 px-2 py-1 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors text-sm"
                            title="Edit matter"
                          >
                            <PencilIcon className="w-4 h-4" />
                          </button>
                          <button
                            onClick={(e) => handleDeleteClick(e, matter)}
                            className="flex items-center gap-1 px-2 py-1 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded transition-colors text-sm"
                            title="Delete matter"
                          >
                            <TrashIcon className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}</div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
