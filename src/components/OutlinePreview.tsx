import React from 'react';
import type { OutlineSection, CaseMetadata } from '@/types';
import { generateOutlineMarkdown } from '@/lib/template';
import { DocumentTextIcon, ClipboardDocumentCheckIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';

interface OutlinePreviewProps {
  sections: OutlineSection[];
  metadata: CaseMetadata;
}

export const OutlinePreview: React.FC<OutlinePreviewProps> = ({ sections, metadata }) => {
  const previewContent = generateOutlineMarkdown(sections, metadata);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(previewContent);
      alert('Outline copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy: ', err);
      alert('Failed to copy outline.');
    }
  };

  const downloadMarkdown = () => {
    const element = document.createElement('a');
    const file = new Blob([previewContent], { type: 'text/markdown' });
    element.href = URL.createObjectURL(file);
    element.download = `${metadata.caseName || 'Deposition_Outline'}.md`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    URL.revokeObjectURL(element.href);
  };

  return (
    <div className="elevated-card card-shake p-8 overflow-hidden">
      <div className="mb-6">
        <div className="heading-bar heading-bar-bleed">
          <h2 className="text-2xl panel-heading text-white m-0 flex items-center gap-2">
            <DocumentTextIcon className="w-6 h-6" />
            Generated Outline
          </h2>
          <div className="flex space-x-2">
            <button onClick={copyToClipboard} className="btn btn-success flex items-center gap-2">
              <ClipboardDocumentCheckIcon className="w-5 h-5" /> Copy
            </button>
            <button onClick={downloadMarkdown} className="btn btn-primary flex items-center gap-2">
              <ArrowDownTrayIcon className="w-5 h-5" /> Download
            </button>
          </div>
        </div>
      </div>
      <p className="subtle-help mb-4">Live preview updates as you edit case info and toggle sections.</p>

      <div className="rounded-xl p-5 border shadow-inner"
           style={{
             background: 'linear-gradient(135deg, #f8fafc 0%, #eef2ff 100%)',
             borderColor: 'rgba(100, 116, 139, 0.2)'
           }}>
        <pre className="whitespace-pre-wrap text-sm text-slate-800 font-mono leading-relaxed max-h-[520px] overflow-y-auto">
          {previewContent}
        </pre>
      </div>
    </div>
  );
};
