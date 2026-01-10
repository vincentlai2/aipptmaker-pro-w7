'use client';

import React, { useState } from 'react';
import { UploadCloud, Cpu, Wand2, Share2, BrainCircuit, Palette, FileType, CheckCircle2, Download, Binary, Lock, ScanLine, Sparkles } from 'lucide-react';
import { Button } from '../Button';

export const WorkflowSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    {
      title: "Upload",
      desc: "Drop PDF, Word, or paste text.",
      icon: UploadCloud
    },
    {
      title: "Analyze",
      desc: "AI extracts key points.",
      icon: Cpu
    },
    {
      title: "Design",
      desc: "Auto-layout & imagery.",
      icon: Wand2
    },
    {
      title: "Export",
      desc: "Download editable PPTX.",
      icon: Share2
    }
  ];

  return (
    <section className="py-32 bg-slate-950 text-white overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-indigo-900/10 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <div className="space-y-12">
             <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-900/30 border border-indigo-500/30 text-indigo-300 text-xs font-bold uppercase tracking-wide mb-6">
                   Automated Workflow
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                   From chaos to clarity <br/> 
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">in 4 steps.</span>
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                   Our slide generator is designed for speed. No complex editors, no drag-and-drop fatigue. Just instant results.
                </p>
             </div>

             <div className="relative">
               <div className="absolute left-[23px] top-4 bottom-4 w-0.5 bg-slate-800 z-0"></div>
               <div 
                  className="absolute left-[23px] top-4 w-0.5 bg-indigo-500 z-0 transition-all duration-500"
                  style={{ height: `${activeStep * 33}%` }}
               ></div>

               <div className="space-y-8 relative z-10">
                 {steps.map((step, idx) => (
                   <div 
                     key={idx}
                     onMouseEnter={() => setActiveStep(idx)}
                     className={`
                        group flex items-center gap-6 p-4 rounded-2xl cursor-pointer transition-all duration-300
                        ${activeStep === idx 
                          ? 'bg-slate-900/80 ring-1 ring-indigo-500/50 shadow-2xl shadow-indigo-500/10 translate-x-4' 
                          : 'hover:bg-slate-900/40 opacity-60 hover:opacity-100'}
                     `}
                   >
                      <div className={`
                         w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 shadow-xl
                         ${activeStep === idx 
                            ? 'bg-indigo-600 text-white scale-110 shadow-indigo-500/40' 
                            : 'bg-slate-800 text-slate-500'}
                      `}>
                         <step.icon size={20} />
                      </div>
                      <div>
                         <h3 className={`font-bold text-xl transition-colors ${activeStep === idx ? 'text-white' : 'text-slate-300'}`}>
                            {step.title}
                         </h3>
                         <p className={`text-sm transition-colors ${activeStep === idx ? 'text-indigo-200' : 'text-slate-500'}`}>
                            {step.desc}
                         </p>
                      </div>
                   </div>
                 ))}
               </div>
             </div>
          </div>

          <div className="relative aspect-square md:aspect-[4/3]">
             <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 to-purple-600/20 rounded-3xl blur-2xl transform rotate-3 scale-95"></div>
             
             <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden flex flex-col">
                <div className="h-14 border-b border-white/5 flex items-center justify-between px-6 bg-white/5">
                   <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-slate-700/50"></div>
                      <div className="w-3 h-3 rounded-full bg-slate-700/50"></div>
                   </div>
                   <div className="text-xs font-mono text-slate-500 flex items-center gap-2">
                      {steps[activeStep].title.toUpperCase()}_MODULE
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                   </div>
                </div>

                <div className="flex-1 p-10 relative flex items-center justify-center">
                    {activeStep === 0 && (
                      <div className="text-center animate-fade-in w-full">
                          <div className="border-2 border-dashed border-slate-700 bg-slate-800/50 rounded-2xl p-12 flex flex-col items-center justify-center group hover:border-indigo-500/50 transition-colors">
                             <div className="w-20 h-20 rounded-2xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <UploadCloud size={40} />
                             </div>
                             <div className="text-slate-300 font-medium text-lg mb-2">Drop your document</div>
                             <div className="text-slate-500 text-sm">PDF, DOCX, or TXT</div>
                          </div>
                      </div>
                    )}

                    {activeStep === 1 && (
                      <div className="w-full h-full relative animate-fade-in flex items-center justify-center">
                         <div className="absolute w-24 h-24 bg-indigo-600 rounded-full flex items-center justify-center shadow-lg shadow-indigo-500/50 z-10 animate-pulse">
                            <BrainCircuit size={40} className="text-white" />
                         </div>
                         {[...Array(6)].map((_, i) => (
                            <div 
                              key={i}
                              className="absolute w-16 h-16 bg-slate-800 rounded-xl border border-slate-700 flex items-center justify-center text-xs text-slate-400 font-mono shadow-xl"
                              style={{
                                 transform: `rotate(${i * 60}deg) translate(140px) rotate(-${i * 60}deg)`,
                                 animation: `float 3s ease-in-out infinite ${i * 0.5}s`
                              }}
                            >
                               Keyword
                            </div>
                         ))}
                         <svg className="absolute inset-0 w-full h-full pointer-events-none">
                            {[...Array(6)].map((_, i) => (
                               <line 
                                 key={i}
                                 x1="50%" y1="50%" 
                                 x2={`${50 + 35 * Math.cos(i * 60 * Math.PI / 180)}%`} 
                                 y2={`${50 + 35 * Math.sin(i * 60 * Math.PI / 180)}%`} 
                                 stroke="#4f46e5" 
                                 strokeWidth="1" 
                                 strokeOpacity="0.3" 
                               />
                            ))}
                         </svg>
                      </div>
                    )}

                    {activeStep === 2 && (
                       <div className="w-full relative animate-fade-in">
                          <div className="absolute inset-0 flex items-center justify-center -translate-y-8 opacity-40 scale-90">
                             <div className="w-64 h-40 bg-slate-800 rounded-lg border border-slate-600"></div>
                          </div>
                          <div className="absolute inset-0 flex items-center justify-center translate-y-8 opacity-70 scale-95">
                             <div className="w-64 h-40 bg-slate-800 rounded-lg border border-slate-600"></div>
                          </div>
                          <div className="relative z-10 flex items-center justify-center">
                             <div className="w-72 h-48 bg-slate-900 rounded-lg border border-indigo-500/50 shadow-2xl shadow-indigo-500/20 p-4 flex flex-col gap-3">
                                <div className="h-4 w-3/4 bg-slate-800 rounded animate-pulse"></div>
                                <div className="flex-1 grid grid-cols-2 gap-3">
                                   <div className="bg-slate-800 rounded opacity-50"></div>
                                   <div className="space-y-2">
                                      <div className="h-2 w-full bg-slate-800 rounded"></div>
                                      <div className="h-2 w-full bg-slate-800 rounded"></div>
                                      <div className="h-2 w-2/3 bg-slate-800 rounded"></div>
                                   </div>
                                </div>
                             </div>
                             <div className="absolute -right-4 -bottom-4 bg-indigo-600 p-3 rounded-full shadow-lg text-white">
                                <Palette size={24} />
                             </div>
                          </div>
                       </div>
                    )}

                    {activeStep === 3 && (
                       <div className="text-center animate-fade-in">
                          <div className="relative inline-block">
                             <div className="w-24 h-32 bg-white rounded-xl shadow-2xl flex items-center justify-center relative z-10">
                                <FileType size={48} className="text-orange-600" />
                                <div className="absolute bottom-2 text-[10px] font-bold text-slate-900">PPTX</div>
                             </div>
                             <div className="absolute top-2 -right-2 w-24 h-32 bg-slate-200 rounded-xl -z-10 rotate-3"></div>
                             <div className="absolute top-4 -right-4 w-24 h-32 bg-slate-300 rounded-xl -z-20 rotate-6"></div>
                             
                             <div className="absolute -top-3 -right-3 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white border-2 border-slate-900 shadow-lg z-20">
                                <CheckCircle2 size={16} />
                             </div>
                          </div>
                          <div className="mt-8 space-y-3">
                             <Button className="w-full bg-white text-slate-900 hover:bg-slate-100">
                                <Download size={16} className="mr-2"/> Download File
                             </Button>
                          </div>
                       </div>
                    )}
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};



