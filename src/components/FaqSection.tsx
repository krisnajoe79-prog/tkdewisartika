import React, { useState } from 'react';
import { FAQS } from '../data/schoolData';
import { HelpCircle, ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white border-b border-[#EDE6D6] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#C5892F] uppercase tracking-wider mb-2">
            <HelpCircle className="w-4 h-4" />
            <span>Tanya Jawab Seputar Sekolah</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#2C1A14] tracking-tight">
            Pertanyaan yang Sering Diajukan (FAQ)
          </h2>
          <p className="mt-3 text-base text-[#614735]">
            Informasi penting yang sering ditanyakan oleh calon wali murid baru TK Dewi Sartika.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-[#E8DFC8] bg-[#FAF7F2] overflow-hidden transition-all shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 font-heading font-bold text-base sm:text-lg text-[#2C1A14] hover:text-[#C5892F] transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#7A5B45] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#C5892F]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-[#614735] leading-relaxed border-t border-[#EDE4D5]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
