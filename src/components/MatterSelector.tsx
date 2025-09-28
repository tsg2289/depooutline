'use client';

import { useState, useEffect } from 'react';
import { PlusIcon, FolderIcon, PencilIcon } from '@heroicons/react/24/outline';
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
            <FolderIcon className="w-5 h-5" />
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
        <div className="mb-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <form action={handleCreateMatter} className="space-y-3">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                Matter Title *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
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
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
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
              <label htmlFor="e2eeEnabled" className="ml-2 text-sm text-gray-700">
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
        <div className="mb-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <h3 className="text-sm font-medium text-blue-900 mb-3">Edit Matter</h3>
          <form action={handleUpdateMatter} className="space-y-3">
            <div>
              <label htmlFor="edit-title" className="block text-sm font-medium text-gray-700 mb-1">
                Matter Title *
              </label>
              <input
                type="text"
                id="edit-title"
                name="title"
                required
                defaultValue={editingMatter.title}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
        <div className="space-y-8">
          {matters.length === 0 ? (
            <div className="text-center py-8">
              <div className="w-12 h-12 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <FolderIcon className="w-6 h-6 text-gray-400" />
              </div>
              <p className="text-gray-500 text-sm italic">
                No matters yet. Create your first matter to get started.
              </p>
            </div>
          ) : (
            matters.map((matter) => (
            <div
              key={matter.id}
              onClick={() => onMatterSelect(matter)}
              className={`relative bg-white rounded-3xl cursor-pointer transition-all duration-300 hover:shadow-xl shadow-md border border-gray-100 hover:border-gray-200 ${
                selectedMatter?.id === matter.id
                  ? 'shadow-xl ring-2 ring-indigo-300 bg-gradient-to-br from-indigo-50 to-blue-50 border-indigo-200'
                  : 'hover:shadow-xl hover:-translate-y-1'
              }`}
              style={{
                boxShadow: selectedMatter?.id === matter.id 
                  ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(99, 102, 241, 0.1)'
                  : '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
              }}
            >
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`w-3 h-3 rounded-full flex-shrink-0 ${
                        selectedMatter?.id === matter.id ? 'bg-indigo-500' : 'bg-gray-300'
                      }`}></div>
                      <h3 className="font-semibold text-gray-900 text-sm truncate">{matter.title}</h3>
                    </div>
                    {matter.description && (
                      <p className="text-xs text-gray-600 mb-2 line-clamp-2">{matter.description}</p>
                    )}
                    <div className="flex items-center gap-2">
                      {matter.e2eeEnabled && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          🔒 E2EE
                        </span>
                      )}
                      <span className="text-xs text-gray-400">
                        Created {new Date(matter.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 ml-3">
                    <button
                      onClick={(e) => handleEditClick(e, matter)}
                      className="flex items-center gap-1 px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors text-sm font-medium"
                      title="Edit matter"
                    >
                      <PencilIcon className="w-4 h-4" />
                      Edit
                    </button>
                  </div>
                </div>
                {selectedMatter?.id === matter.id && (
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
