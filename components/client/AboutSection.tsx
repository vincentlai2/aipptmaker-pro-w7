'use client';

import React, { useState } from 'react';
import { ShieldCheck, FileType, Download, Binary, Lock, Cpu, ScanLine, Sparkles } from 'lucide-react';

export const AboutSection = () => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  return (
    <section className="py-32 bg-white border-y border-slate-100 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-slate-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
          <div className="absolute top-[40%] -left-[10%] w-[600px] h-[600px] bg-indigo-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="flex flex-col md:flex-row gap-20 items-center">
          <div className="flex-1 order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-wide mb-6">
              <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
              Core Architecture
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
              More than a template.<br/>It's an <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">intelligent engine.</span>
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              We built AIPPT Maker Pro to solve a critical business problem: professionals spend significantly more time formatting slides than refining their narrative.
            </p>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Our engine utilizes advanced Natural Language Processing to understand the <strong>semantic structure</strong> of your content, organizing information hierarchically to maximize audience retention.
            </p>
            
            <div className="space-y-6">
               <div 
                  onMouseEnter={() => setActiveFeature(0)}
                  onMouseLeave={() => setActiveFeature(null)}
                  className={`group relative p-6 rounded-2xl transition-all duration-300 border cursor-default 
                    ${activeFeature === 0 
                        ? 'bg-white border-blue-100 shadow-xl shadow-blue-500/10 scale-[1.02] z-10' 
                        : 'bg-slate-50/50 border-transparent hover:bg-white hover:border-slate-200 hover:shadow-md'}`}
               >
                  <div className={`absolute left-0 top-0 bottom-0 w-1.5 rounded-l-2xl transition-colors duration-300 ${activeFeature === 0 ? 'bg-blue-500' : 'bg-transparent'}`}></div>
                  
                  <div className="pl-2">
                     <h4 className={`font-bold text-xl mb-3 flex items-center gap-3 transition-colors ${activeFeature === 0 ? 'text-blue-900' : 'text-slate-900'}`}>
                        <div className={`flex items-center justify-center w-8 h-8 rounded-lg transition-colors ${activeFeature === 0 ? 'bg-blue-100 text-blue-600' : 'bg-slate-200 text-slate-500'}`}>
                            <ShieldCheck size={18} strokeWidth={2.5} />
                        </div>
                        Enterprise Grade Privacy
                     </h4>
                     <p className="text-slate-500 leading-relaxed text-sm pl-11">Data inputs are processed statelessly. We do not train models on your proprietary information.</p>
                  </div>
               </div>

               <div 
                  onMouseEnter={() => setActiveFeature(1)}
                  onMouseLeave={() => setActiveFeature(null)}
                  className={`group relative p-6 rounded-2xl transition-all duration-300 border cursor-default 
                    ${activeFeature === 1
                        ? 'bg-white border-orange-100 shadow-xl shadow-orange-500/10 scale-[1.02] z-10' 
                        : 'bg-slate-50/50 border-transparent hover:bg-white hover:border-slate-200 hover:shadow-md'}`}
               >
                  <div className={`absolute left-0 top-0 bottom-0 w-1.5 rounded-l-2xl transition-colors duration-300 ${activeFeature === 1 ? 'bg-orange-500' : 'bg-transparent'}`}></div>
                  
                  <div className="pl-2">
                     <h4 className={`font-bold text-xl mb-3 flex items-center gap-3 transition-colors ${activeFeature === 1 ? 'text-orange-900' : 'text-slate-900'}`}>
                        <div className={`flex items-center justify-center w-8 h-8 rounded-lg transition-colors ${activeFeature === 1 ? 'bg-orange-100 text-orange-600' : 'bg-slate-200 text-slate-500'}`}>
                            <FileType size={18} strokeWidth={2.5} />
                        </div>
                        Native PPTX Export
                     </h4>
                     <p className="text-slate-500 leading-relaxed text-sm pl-11">Download fully editable PowerPoint files. Text, shapes, and images remain native objects.</p>
                  </div>
               </div>
            </div>
          </div>

          <div className="flex-1 w-full relative order-1 md:order-2 h-[600px] flex items-center justify-center">
             <div className="absolute inset-0 bg-gradient-to-tr from-slate-100 to-indigo-50 rounded-full blur-[100px] opacity-60 pointer-events-none"></div>
             
             <div className="relative w-full max-w-sm perspective-1000">
                
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-indigo-200 to-transparent -translate-x-1/2 z-0"></div>

                <div 
                  className={`
                    w-full aspect-[16/9] bg-slate-900 rounded-xl shadow-2xl border border-slate-700 
                    absolute top-0 left-0 flex flex-col p-6 z-10 transition-all duration-500 ease-out origin-center
                    ${activeFeature === 0 ? 'translate-y-48 scale-100 opacity-100 ring-2 ring-blue-500 ring-offset-4 ring-offset-white' : 'translate-y-36 scale-90 opacity-60 -rotate-6'}
                  `}
                >
                    <div className="flex items-center justify-between mb-4 border-b border-slate-700 pb-2">
                       <div className="flex items-center gap-2">
                          <Binary size={16} className="text-blue-400"/>
                          <span className="text-xs font-mono text-blue-200">raw_data_stream</span>
                       </div>
                       {activeFeature === 0 && <div className="text-[10px] bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded flex items-center gap-1"><Lock size={10}/> SECURE</div>}
                    </div>
                    <div className="space-y-2 font-mono text-[10px] text-slate-500">
                       <div className="flex justify-between"><span className="text-purple-400">input</span> <span className="text-slate-600">...encrypted...</span></div>
                       <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500/50 w-2/3 animate-pulse"></div>
                       </div>
                       <div className="text-slate-600 truncate opacity-50">010101010101001010101</div>
                       <div className="text-slate-600 truncate opacity-50">110010101010101010100</div>
                    </div>
                </div>

                <div 
                  className={`
                    w-full aspect-[16/9] backdrop-blur-md bg-white/40 rounded-xl shadow-xl border border-white/50 
                    absolute top-0 left-0 flex flex-col p-6 z-20 transition-all duration-500 ease-out origin-center overflow-hidden
                    ${activeFeature === null ? 'translate-y-16 scale-95 -rotate-3' : 'translate-y-24 scale-95 rotate-0 opacity-80'}
                  `}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/10 to-transparent h-1/2 w-full animate-scan pointer-events-none"></div>

                    <div className="flex items-center justify-between mb-4">
                       <div className="flex items-center gap-2">
                          <Cpu size={18} className="text-indigo-600"/>
                          <span className="text-xs font-bold text-indigo-900">Semantic Engine</span>
                       </div>
                       <div className="flex gap-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-bounce"></div>
                          <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-bounce delay-75"></div>
                          <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-bounce delay-150"></div>
                       </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 h-full">
                       <div className="bg-white/60 rounded border border-indigo-100 p-2">
                          <div className="h-1.5 w-8 bg-indigo-200 rounded mb-1"></div>
                          <div className="h-1 w-full bg-slate-200 rounded"></div>
                       </div>
                       <div className="bg-white/60 rounded border border-indigo-100 p-2">
                          <div className="h-1.5 w-8 bg-indigo-200 rounded mb-1"></div>
                          <div className="h-1 w-full bg-slate-200 rounded"></div>
                       </div>
                       <div className="col-span-2 bg-indigo-50/50 rounded border border-dashed border-indigo-200 flex items-center justify-center">
                          <ScanLine size={16} className="text-indigo-400 opacity-50" />
                       </div>
                    </div>
                </div>

                <div 
                  className={`
                    w-full aspect-[16/9] bg-white rounded-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100 
                    absolute top-0 left-0 flex flex-col overflow-hidden z-30 transition-all duration-500 ease-out
                    ${activeFeature === 1 ? 'translate-y-0 scale-105 rotate-0 ring-2 ring-orange-400 ring-offset-4 ring-offset-white' : 'hover:-translate-y-2'}
                  `}
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-bl-full -z-10"></div>
                    
                    <div className="p-8 flex flex-col h-full relative">
                       {activeFeature === 1 && (
                          <div className="absolute inset-0 bg-white/90 z-20 flex items-center justify-center animate-fade-in">
                             <div className="bg-orange-50 text-orange-600 px-4 py-2 rounded-lg font-bold flex items-center gap-2 shadow-sm border border-orange-100">
                                <Download size={18} /> Ready to Export
                             </div>
                          </div>
                       )}

                       <div className="w-10 h-10 rounded-lg bg-indigo-600 text-white flex items-center justify-center mb-4 shadow-lg shadow-indigo-200">
                          <Sparkles size={20} />
                       </div>
                       <h3 className="text-2xl font-bold text-slate-900 mb-2">Market Strategy</h3>
                       <div className="flex gap-4 mt-auto">
                          <div className="flex-1 space-y-2">
                             <div className="h-2 w-full bg-slate-100 rounded-full"></div>
                             <div className="h-2 w-3/4 bg-slate-100 rounded-full"></div>
                          </div>
                          <div className="w-24 h-16 bg-slate-100 rounded-lg overflow-hidden relative">
                             <div className="absolute inset-0 bg-gradient-to-tr from-slate-200 to-slate-100"></div>
                          </div>
                       </div>
                    </div>
                </div>

             </div>
          </div>
        </div>
      </div>
    </section>
  );
};



