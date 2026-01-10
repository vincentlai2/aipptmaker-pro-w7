'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2, TrendingUp, Zap, Briefcase, BookOpen, GraduationCap, Palette, ArrowRight } from 'lucide-react';
import { Button } from '../Button';

export const UseCaseSection = () => {
  const [activeTab, setActiveTab] = useState('business');

  const useCases = [
    {
      id: 'business',
      label: 'Business',
      icon: TrendingUp,
      title: 'Business Professionals',
      description: 'Creating compelling business presentations quickly.',
      features: ['Sales Decks', 'Board Meetings', 'Training Materials', 'Progress Reports'],
      bgClass: "bg-slate-50/50",
      accent: "text-slate-600",
      img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 'founders',
      label: 'Founders',
      icon: Zap,
      title: 'Startup Founders',
      description: 'Pitching ideas to investors and stakeholders.',
      features: ['Pitch Decks', 'Investor Updates', 'Product Demos', 'Business Plans'],
      bgClass: "bg-purple-50/50",
      accent: "text-purple-600",
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 'consultants',
      label: 'Consultants',
      icon: Briefcase,
      title: 'Consultants',
      description: 'Creating professional client proposals and reports.',
      features: ['Client Proposals', 'Strategy Decks', 'Analysis Reports', 'Recommendations'],
      bgClass: "bg-blue-50/50",
      accent: "text-blue-600",
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 'teachers',
      label: 'Teachers',
      icon: BookOpen,
      title: 'Teachers',
      description: 'Preparing engaging lessons and educational content.',
      features: ['Lecture Slides', 'Course Materials', 'Interactive Lessons', 'Assessments'],
      bgClass: "bg-green-50/50",
      accent: "text-green-600",
      img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 'students',
      label: 'Students',
      icon: GraduationCap,
      title: 'Students',
      description: 'Writing school projects and academic presentations.',
      features: ['Research Presentations', 'Project Reports', 'Thesis Defense', 'Study Materials'],
      bgClass: "bg-orange-50/50",
      accent: "text-orange-600",
      img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 'nondesigners',
      label: 'Non-Designers',
      icon: Palette,
      title: 'Non-Designers',
      description: 'Wanting professional presentations without design skills.',
      features: ['Professional Templates', 'Auto-Formatting', 'Brand Consistency', 'Quick Edits'],
      bgClass: "bg-pink-50/50",
      accent: "text-pink-600",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden flex flex-col md:flex-row min-h-[600px]">
      <div className="bg-white md:w-80 border-b md:border-b-0 md:border-r border-slate-100 flex flex-col" role="tablist">
         <div className="p-6 border-b border-slate-100 bg-slate-50/50">
             <h3 className="font-bold text-slate-900">Select Role</h3>
             <p className="text-xs text-slate-500 mt-1">See how we help you</p>
         </div>
         <div className="flex-1 overflow-y-auto p-3 space-y-1">
            {useCases.map((useCase) => (
               <button
                 key={useCase.id}
                 role="tab"
                 aria-selected={activeTab === useCase.id}
                 onClick={() => setActiveTab(useCase.id)}
                 className={`w-full text-left p-3 rounded-xl flex items-center gap-3 transition-all duration-300 group relative overflow-hidden ${
                    activeTab === useCase.id 
                    ? 'bg-slate-900 text-white shadow-lg shadow-slate-200 ring-1 ring-slate-900' 
                    : 'hover:bg-slate-50 text-slate-600'
                 }`}
               >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${activeTab === useCase.id ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-white group-hover:text-indigo-600'}`}>
                     <useCase.icon size={16} />
                  </div>
                  <span className="font-semibold text-sm">{useCase.label}</span>
                  {activeTab === useCase.id && (
                     <div className="absolute right-4 w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></div>
                  )}
               </button>
            ))}
         </div>
      </div>

      <div className="flex-1 relative">
         {useCases.map((useCase) => (
             <div 
               key={useCase.id}
               className={`absolute inset-0 transition-opacity duration-500 flex ${activeTab === useCase.id ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
             >
                <div className={`absolute inset-0 ${useCase.bgClass} backdrop-blur-3xl`}></div>
                
                <div className="relative w-full h-full flex flex-col md:flex-row p-8 md:p-12 gap-12 items-center">
                    <div className="flex-1 space-y-8">
                       <div>
                          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white shadow-sm text-xs font-bold uppercase tracking-wide mb-6 ${useCase.accent}`}>
                             <useCase.icon size={14} /> {useCase.label}
                          </div>
                          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{useCase.title}</h3>
                          <p className="text-lg text-slate-600 leading-relaxed">
                             {useCase.description}
                          </p>
                       </div>

                       <div className="grid grid-cols-2 gap-3">
                          {useCase.features.map((feature, idx) => (
                             <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-white/60 border border-white/50 shadow-sm">
                                <CheckCircle2 size={16} className={useCase.accent} />
                                <span className="text-slate-800 font-medium text-sm">{feature}</span>
                             </div>
                          ))}
                       </div>
                       
                       <a 
                         href="https://smallppt.com/login-index"
                         target="_blank"
                         rel="nofollow noopener noreferrer"
                       >
                         <Button className="group bg-slate-900 hover:bg-slate-800 text-white px-6">
                            Start Creating <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                         </Button>
                       </a>
                    </div>

                    <div className="flex-1 w-full max-w-sm md:max-w-none md:h-full flex items-center justify-center relative">
                        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full blur-3xl opacity-40 ${useCase.bgClass.replace('/50', '')}`}></div>
                        
                        <div className="relative w-full aspect-[4/5] md:aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl shadow-slate-200/50 border-[6px] border-white transform rotate-2 transition-transform duration-700 hover:rotate-0">
                           <Image 
                              src={useCase.img} 
                              alt={useCase.title} 
                              fill
                              className="object-cover"
                           />
                           <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                           <div className="absolute bottom-6 left-6 right-6 text-white">
                              <div className="text-xs font-medium opacity-80 uppercase tracking-wider mb-1">Generated With AI</div>
                              <div className="text-lg font-bold">Perfect for {useCase.label}</div>
                           </div>
                        </div>
                    </div>
                </div>
             </div>
         ))}
      </div>
    </div>
  );
};



