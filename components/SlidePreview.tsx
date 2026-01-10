'use client';

import React from 'react';
import Image from 'next/image';
import { Slide } from '../types';

interface SlidePreviewProps {
  slide: Slide;
  theme: string;
  isActive?: boolean;
  onClick?: () => void;
  scale?: number;
}

export const SlidePreview: React.FC<SlidePreviewProps> = ({ 
  slide, 
  theme, 
  isActive, 
  onClick, 
  scale = 1 
}) => {
  
  // Refined theme definitions
  const themeStyles: Record<string, any> = {
    modern: {
      bg: "bg-white",
      text: "text-slate-800",
      accent: "bg-indigo-600",
      accentText: "text-indigo-600",
      fontTitle: "font-bold tracking-tight",
      border: "border border-slate-200"
    },
    minimal: {
      bg: "bg-[#fcfbf9]",
      text: "text-stone-800",
      accent: "bg-stone-900",
      accentText: "text-stone-600",
      fontTitle: "font-serif font-medium",
      border: "border border-stone-200"
    },
    creative: {
      bg: "bg-orange-50",
      text: "text-slate-900",
      accent: "bg-orange-500",
      accentText: "text-orange-600",
      fontTitle: "font-black uppercase tracking-wider",
      border: "border-none"
    },
    corporate: {
      bg: "bg-slate-900",
      text: "text-white",
      accent: "bg-blue-500",
      accentText: "text-blue-400",
      fontTitle: "font-semibold",
      border: "border border-slate-700"
    }
  };

  const t = themeStyles[theme] || themeStyles.modern;
  
  // Use a high-quality placeholder service or gradient if no image
  const imageUrl = `https://picsum.photos/seed/${slide.id}/1200/800`;

  return (
    <div 
      className={`
        relative aspect-video w-full overflow-hidden shadow-sm transition-all duration-200 origin-top-left
        ${t.bg} ${t.text} ${t.border}
        ${isActive ? 'ring-2 ring-indigo-500 ring-offset-2' : ''}
      `}
      onClick={onClick}
      style={{ 
        transform: `scale(${scale})`, 
        width: `${100 / scale}%`,
        height: `${100 / scale}%`
      }}
    >
      {/* Decorative Elements based on theme */}
      {theme === 'creative' && (
        <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-300 rounded-bl-full opacity-50 mix-blend-multiply z-0"></div>
      )}
      {theme === 'modern' && (
         <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
      )}

      <div className="absolute inset-0 p-[5%] flex flex-col h-full z-10">
        {/* Header */}
        <div className="mb-6 relative">
          <h2 className={`text-[3em] leading-none mb-4 ${t.fontTitle}`}>
            {slide.title}
          </h2>
          <div className={`h-1.5 w-24 ${t.accent}`}></div>
        </div>

        {/* Body Content */}
        <div className="flex-1 flex gap-8">
          {/* Text Area */}
          <div className="flex-1 min-w-[50%]">
            <ul className="space-y-4">
              {slide.content.map((point, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <span className={`mt-2 h-2.5 w-2.5 rounded-full flex-shrink-0 ${t.accent}`}></span>
                  <span className="text-[1.25em] leading-relaxed opacity-90 font-medium">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image Area */}
          <div className="flex-1 relative h-full rounded-xl overflow-hidden shadow-inner bg-slate-200">
             <Image 
               src={imageUrl} 
               alt="Slide visual" 
               fill
               className="object-cover"
               unoptimized
             />
             {theme === 'corporate' && <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay"></div>}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-auto pt-4 flex justify-between items-end opacity-40 text-sm font-semibold tracking-widest uppercase">
          <span>AI Generated Presentation</span>
          <span>{new Date().getFullYear()}</span>
        </div>
      </div>
    </div>
  );
};