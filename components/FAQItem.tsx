import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border-b border-[#E5E7EB]">
      <button
        onClick={onToggle}
        className="w-full py-5 flex items-start justify-between gap-4 text-left hover:text-[#1F4E6D] transition-colors duration-200 group"
        aria-expanded={isOpen}
      >
        <span className="text-[16px] font-semibold text-[#0F172A] group-hover:text-[#1F4E6D] transition-colors duration-200">
          {question}
        </span>
        <div className="flex-shrink-0 mt-0.5">
          {isOpen ? (
            <Minus className="w-5 h-5 text-[#1F4E6D]" />
          ) : (
            <Plus className="w-5 h-5 text-[#64748B] group-hover:text-[#1F4E6D] transition-colors duration-200" />
          )}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-5">
              <p className="text-[15px] text-[#475569] leading-[1.7]">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
