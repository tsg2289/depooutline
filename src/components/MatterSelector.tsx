'use client';

import { useState, useEffect } from 'react';
import { PlusIcon, FolderIcon, PencilIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import type { Matter } from '@/types';
import { getUserMatters, createMatter, updateMatter } from '@/lib/actions/matters';

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
  const [showDropdown, setShowDropdown] = useState(false);

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
        <h2 className="text-xl font-medium text-gray-700">Select Matter</h2>
      </div>

      {showCreateForm && (
        <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <form action={handleCreateMatter} className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                Matter Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="e.g., Smith v. Johnson Medical Malpractice"
              />
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={2}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="e2eeEnabled" className="ml-2 text-sm text-gray-700">
                Enable end-to-end encryption (recommended)
              </label>
            </div>
            <div className="flex gap-2">
              <button
                type="submit"
                disabled={isCreating}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 text-sm font-medium"
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
        <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <h3 className="text-sm font-medium text-gray-900 mb-3">Edit Matter</h3>
          <form action={handleUpdateMatter} className="space-y-4">
            <div>
              <label htmlFor="edit-title" className="block text-sm font-medium text-gray-700 mb-1">
                Matter Title
              </label>
              <input
                type="text"
                id="edit-title"
                name="title"
                required
                defaultValue={editingMatter.title}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="e.g., Smith v. Johnson Medical Malpractice"
              />
            </div>
            <div>
              <label htmlFor="edit-description" className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                id="edit-description"
                name="description"
                rows={2}
                defaultValue={editingMatter.description || ''}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
              <label htmlFor="edit-e2eeEnabled" className="ml-2 text-sm text-gray-700">
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

      {!editingMatter && (
        <div className="space-y-4">
          {matters.length === 0 ? (
            <div className="text-center py-8">
              <div className="w-12 h-12 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <FolderIcon className="w-6 h-6 text-gray-400" />
              </div>
              <p className="text-gray-500 text-sm">
                No matters yet. Create your first matter to get started.
              </p>
              <button
                onClick={() => setShowCreateForm(true)}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium flex items-center gap-2 mx-auto"
              >
                <PlusIcon className="w-4 h-4" />
                Create New Matter
              </button>
            </div>
          ) : (
            <>
              <div className="relative">
                <label htmlFor="matter-select" className="block text-sm font-medium text-gray-700 mb-1">
                  Matter
                </label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-left focus:ring-2 focus:ring-blue-500 focus:border-blue-500 flex items-center justify-between"
                  >
                    <span className="text-gray-900">
                      {selectedMatter ? selectedMatter.title : 'Select a Matter'}
                    </span>
                    <ChevronDownIcon className={`w-5 h-5 text-gray-400 transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {showDropdown && (
                    <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                      {matters.map((matter) => (
                        <button
                          key={matter.id}
                          type="button"
                          onClick={() => {
                            onMatterSelect(matter);
                            setShowDropdown(false);
                          }}
                          className={`w-full px-3 py-2 text-left hover:bg-gray-50 flex items-center justify-between ${
                            selectedMatter?.id === matter.id ? 'bg-blue-50 text-blue-700' : 'text-gray-900'
                          }`}
                        >
                          <div>
                            <div className="font-medium">{matter.title}</div>
                            {matter.description && (
                              <div className="text-sm text-gray-500 truncate">{matter.description}</div>
                            )}
                          </div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleEditClick(e, matter);
                              setShowDropdown(false);
                            }}
                            className="ml-2 p-1 text-gray-400 hover:text-blue-600 rounded"
                            title="Edit matter"
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
                  Create New Matter
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
