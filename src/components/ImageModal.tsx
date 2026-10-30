import React from 'react';
import { X, ZoomIn, Download, ExternalLink } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  image: string;
  title: string;
  description?: string;
  onClose: () => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  image,
  title,
  description,
  onClose
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#2C1A14]/85 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl z-10 border border-[#E8DFC8] my-8 animate-in fade-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">
        
        {/* Header Bar */}
        <div className={`px-6 py-4 bg-[#FAF7F2] border-b border-[#E8DFC8] flex items-center ${
          title ? 'justify-between' : 'justify-end'
        }`}>
          {title ? (
            <div className="pr-4">
              <h3 className="font-heading font-bold text-lg text-[#2C1A14] truncate">
                {title}
              </h3>
              <p className="text-xs text-[#7A5B45]">Dokumentasi Resmi TK Dewi Sartika</p>
            </div>
          ) : null}
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white hover:bg-[#F2ECE1] text-[#2C1A14] shadow-xs transition-colors shrink-0"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Display Area */}
        <div className="p-4 sm:p-6 bg-[#1A110C] flex items-center justify-center overflow-auto grow">
          <img
            src={image}
            alt={title || "Foto Dokumentasi"}
            className="max-h-[65vh] w-auto max-w-full object-contain rounded-xl shadow-lg"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Footer Bar */}
        <div className={`px-6 py-4 bg-[#FAF7F2] border-t border-[#E8DFC8] flex flex-col sm:flex-row items-center gap-3 text-xs ${
          description ? 'justify-between' : 'justify-end'
        }`}>
          {description ? (
            <p className="text-[#614735] text-center sm:text-left">
              {description}
            </p>
          ) : null}

          <div className="flex items-center gap-2 shrink-0">
            <a
              href={image}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white border border-[#E0D5BE] text-[#2C1A14] font-semibold hover:bg-[#F2ECE1] transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#C5892F]" />
              <span>Buka Ukuran Asli</span>
            </a>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-[#C5892F] text-white font-semibold hover:bg-[#A97223] transition-colors"
            >
              Tutup
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
