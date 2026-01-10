'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const FaqItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 last:border-0">
      <button 
        className="flex w-full items-center justify-between text-left py-4 font-semibold text-slate-800 hover:text-indigo-600 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg">{question}</span>
        {isOpen ? <ChevronUp size={20} className="text-indigo-600"/> : <ChevronDown size={20} className="text-slate-400"/>}
      </button>
      {isOpen && (
        <div className="pb-4 text-slate-600 leading-relaxed text-base animate-fade-in">
          {answer}
        </div>
      )}
    </div>
  );
};



