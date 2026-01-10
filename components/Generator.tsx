'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from './Button';
import { SlidePreview } from './SlidePreview';
import { GeneratorStep, Slide, Presentation } from '../types';
import { generateOutline, generateSlideContent } from '../services/geminiService';
import { 
  ArrowLeft, Download, Layout, Play, Plus, 
  ChevronRight, Save, Image as ImageIcon, Type, 
  MoreHorizontal, MonitorPlay, Presentation as PresentationIcon, PenTool
} from 'lucide-react';

export const Generator: React.FC = () => {
  const router = useRouter();
  const [step, setStep] = useState<GeneratorStep>(GeneratorStep.INPUT);
  const [topic, setTopic] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [presentation, setPresentation] = useState<Presentation | null>(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [loadingMessage, setLoadingMessage] = useState('');

  // Step 1: Handle Outline Generation
  const handleGenerateOutline = async () => {
    if (!topic.trim()) return;
    setIsProcessing(true);
    setLoadingMessage("Architecting your presentation...");
    
    try {
      const outlineData = await generateOutline(topic);
      
      const initialSlides: Slide[] = outlineData.slideOutlines.map((s, i) => ({
        id: `slide-${Date.now()}-${i}`,
        title: s.title,
        content: [], // Empty initially
        layout: 'bullet_left',
        imagePrompt: s.purpose // Temp store purpose here
      }));

      setPresentation({
        topic,
        title: outlineData.title,
        slides: initialSlides,
        theme: 'modern'
      });
      
      setStep(GeneratorStep.OUTLINE);
    } catch (e) {
      alert("System encountered an issue processing your request. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  // Step 2: Generate Full Content
  const handleGenerateSlides = async () => {
    if (!presentation) return;
    setIsProcessing(true);
    setStep(GeneratorStep.EDITING); 
    
    const newSlides = [...presentation.slides];
    
    // Process sequentially
    for (let i = 0; i < newSlides.length; i++) {
      setLoadingMessage(`Crafting slide ${i + 1} of ${newSlides.length}: ${newSlides[i].title}`);
      setActiveSlideIndex(i);
      
      try {
        const slideData = await generateSlideContent(
          presentation.topic, 
          newSlides[i].title, 
          newSlides[i].imagePrompt || "Business concept"
        );
        
        newSlides[i] = {
          ...newSlides[i],
          title: slideData.title,
          content: slideData.content,
          imagePrompt: slideData.imagePrompt
        };

        setPresentation(prev => prev ? ({ ...prev, slides: [...newSlides] }) : null);
      } catch (e) {
        console.error(`Error generating slide ${i}`, e);
      }
    }
    
    setIsProcessing(false);
    setActiveSlideIndex(0);
  };

  // Render Logic
  if (step === GeneratorStep.INPUT) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] max-w-3xl mx-auto px-6 text-center animate-fade-in-up">
        <div className="mb-6 p-4 bg-indigo-50 rounded-2xl text-indigo-600 shadow-inner">
           <PenTool size={40} />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900 tracking-tight leading-tight">
          What are we creating today?
        </h1>
        <p className="text-slate-500 mb-10 text-xl max-w-xl mx-auto leading-relaxed">
           Enter a topic, and our design engine will build a complete slide deck for you in seconds.
        </p>
        
        <div className="w-full relative shadow-2xl shadow-indigo-200/50 rounded-2xl group">
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="e.g., Q3 Marketing Strategy for a Coffee Brand"
            className="w-full p-6 pr-32 text-lg rounded-2xl bg-white border border-slate-200 text-slate-900 focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 outline-none transition-all placeholder:text-slate-400"
            onKeyDown={(e) => e.key === 'Enter' && handleGenerateOutline()}
            autoFocus
          />
          <div className="absolute right-2 top-2 bottom-2">
             <Button 
               size="lg" 
               onClick={handleGenerateOutline} 
               isLoading={isProcessing}
               className="h-full rounded-xl px-8"
             >
               Start
             </Button>
          </div>
        </div>

        {/* Suggested Topics Pill Grid */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
           {['Startup Pitch Deck', 'History of Jazz', 'Project Status Report', 'Digital Trends 2026'].map(t => (
              <button 
                key={t}
                onClick={() => setTopic(t)}
                className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
              >
                {t}
              </button>
           ))}
        </div>
      </div>
    );
  }

  if (step === GeneratorStep.OUTLINE) {
    return (
      <div className="max-w-4xl mx-auto py-12 px-6">
        <div className="flex items-center justify-between mb-8">
           <h2 className="text-2xl font-bold text-slate-900">Structure Your Deck</h2>
           <span className="text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
              {presentation?.slides.length} Slides
           </span>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden mb-8">
          <div className="p-6 border-b border-slate-100 bg-slate-50/50">
             <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2 block">Presentation Title</label>
             <input 
               value={presentation?.title}
               onChange={(e) => setPresentation(prev => prev ? ({...prev, title: e.target.value}) : null)}
               className="text-xl font-bold text-indigo-700 bg-transparent w-full outline-none placeholder:text-slate-300"
               placeholder="Enter title..."
             />
          </div>
          <div className="divide-y divide-slate-100">
            {presentation?.slides.map((slide, idx) => (
              <div key={slide.id} className="flex items-center gap-4 p-4 hover:bg-slate-50 transition-colors group">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 font-mono text-xs group-hover:bg-indigo-100 group-hover:text-indigo-600 transition-colors">
                   {idx + 1}
                </div>
                <div className="flex-1">
                   <input 
                     value={slide.title}
                     onChange={(e) => {
                        const newSlides = [...(presentation?.slides || [])];
                        newSlides[idx].title = e.target.value;
                        setPresentation(prev => prev ? ({...prev, slides: newSlides}) : null);
                     }}
                     className="w-full bg-transparent outline-none font-medium text-slate-700 focus:text-indigo-600"
                   />
                </div>
                <button 
                  onClick={() => {
                     const newSlides = [...(presentation?.slides || [])];
                     newSlides.splice(idx, 1);
                     setPresentation(prev => prev ? ({...prev, slides: newSlides}) : null);
                  }}
                  className="text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity p-2"
                >
                   &times;
                </button>
              </div>
            ))}
          </div>
          <button 
             onClick={() => {
                const newSlide: Slide = {
                   id: `slide-new-${Date.now()}`,
                   title: "New Concept",
                   content: [],
                   layout: 'bullet_left'
                };
                setPresentation(prev => prev ? ({...prev, slides: [...prev.slides, newSlide]}) : null);
             }}
             className="w-full py-4 text-sm font-medium text-slate-500 hover:text-indigo-600 hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
          >
             <Plus size={16} /> Add Slide
          </button>
        </div>

        <div className="flex justify-between items-center">
          <Button variant="ghost" onClick={() => setStep(GeneratorStep.INPUT)} className="text-slate-500">Back</Button>
          <Button size="lg" onClick={handleGenerateSlides} isLoading={isProcessing}>
            Create Presentation <PresentationIcon size={18} className="ml-2"/>
          </Button>
        </div>
      </div>
    );
  }

  // EDITOR VIEW
  return (
    <div className="h-[calc(100vh-64px)] flex flex-col bg-slate-100 overflow-hidden">
      {/* Top Toolbar */}
      <div className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-4 shrink-0 shadow-sm z-10">
         <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={() => setStep(GeneratorStep.OUTLINE)} className="text-slate-500">
               <ArrowLeft size={18} />
            </Button>
            <div className="h-6 w-px bg-slate-200"></div>
            <div className="flex items-center gap-2">
               <span className="font-semibold text-slate-700">{presentation?.title}</span>
               {isProcessing && <span className="text-xs text-indigo-600 animate-pulse font-medium px-2 py-0.5 bg-indigo-50 rounded-full">{loadingMessage}</span>}
            </div>
         </div>
         
         <div className="flex items-center gap-2">
            <div className="flex bg-slate-100 rounded-lg p-1 mr-4">
                <button className="p-1.5 hover:bg-white hover:shadow-sm rounded text-slate-600" title="Text"><Type size={18}/></button>
                <button className="p-1.5 hover:bg-white hover:shadow-sm rounded text-slate-600" title="Image"><ImageIcon size={18}/></button>
                <button className="p-1.5 hover:bg-white hover:shadow-sm rounded text-slate-600" title="Layout"><Layout size={18}/></button>
            </div>
            
            <Button variant="outline" size="sm" className="bg-white">
               <Save size={16} className="mr-2 text-slate-500"/> Save
            </Button>
            <Button variant="secondary" size="sm" className="bg-indigo-600 hover:bg-indigo-700 text-white border-none">
              <Download size={16} className="mr-2"/> Export
            </Button>
            <Button size="sm" className="bg-slate-900 text-white hover:bg-slate-800">
               <MonitorPlay size={16} className="mr-2"/> Present
            </Button>
         </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Thumbnails Sidebar */}
        <div className="w-64 bg-white border-r border-slate-200 flex flex-col">
           <div className="p-4 overflow-y-auto flex-1 space-y-4 custom-scrollbar">
              {presentation?.slides.map((slide, idx) => (
                <div 
                  key={slide.id}
                  onClick={() => setActiveSlideIndex(idx)}
                  className={`
                    group relative rounded-lg cursor-pointer transition-all duration-200
                    ${idx === activeSlideIndex 
                      ? 'ring-2 ring-indigo-600 shadow-md' 
                      : 'hover:bg-slate-50 ring-1 ring-slate-200 hover:ring-slate-300'}
                  `}
                >
                   <div className="aspect-video bg-white rounded-md overflow-hidden relative">
                      {/* Thumbnail Placeholder */}
                      <div className="w-full h-full p-2 scale-[0.2] origin-top-left pointer-events-none select-none">
                         <h1 className="text-4xl font-bold text-slate-800 mb-2">{slide.title}</h1>
                         <div className="space-y-2">
                            {slide.content.slice(0,2).map((c, i) => (
                               <div key={i} className="h-4 bg-slate-200 rounded w-full"></div>
                            ))}
                         </div>
                      </div>
                      <div className="absolute bottom-2 left-2 text-[10px] font-bold text-slate-400 bg-white/80 px-1.5 rounded">
                         {idx + 1}
                      </div>
                   </div>
                </div>
              ))}
              <button 
                className="w-full aspect-[2/1] border-2 border-dashed border-slate-300 rounded-lg flex flex-col items-center justify-center text-slate-400 hover:border-indigo-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors gap-2"
                onClick={() => {
                   const newSlide: Slide = {
                      id: `slide-new-${Date.now()}`,
                      title: "New Slide",
                      content: ["Add content..."],
                      layout: 'bullet_left'
                   };
                   setPresentation(prev => prev ? ({...prev, slides: [...prev.slides, newSlide]}) : null);
                   if (presentation) setActiveSlideIndex(presentation.slides.length);
                }}
              >
                <Plus size={24} />
                <span className="text-xs font-semibold">Add Slide</span>
              </button>
           </div>
        </div>

        {/* Main Canvas */}
        <div className="flex-1 bg-slate-100 relative flex flex-col items-center justify-center p-8 overflow-hidden">
           
           <div className="relative shadow-2xl shadow-slate-300/50 rounded-lg overflow-hidden max-h-full aspect-video w-full max-w-5xl bg-white slide-shadow transition-all duration-300">
             {presentation && presentation.slides[activeSlideIndex] ? (
                <SlidePreview 
                  slide={presentation.slides[activeSlideIndex]} 
                  theme={presentation.theme}
                  isActive={true}
                />
             ) : (
               <div className="flex flex-col items-center justify-center h-full text-slate-400">
                  <div className="animate-spin mb-4"><PresentationIcon size={24}/></div>
                  <p>Loading Slide...</p>
               </div>
             )}
           </div>

           {/* Theme Selector Floating Bar */}
           <div className="absolute bottom-6 bg-white/90 backdrop-blur-sm border border-slate-200 px-4 py-2 rounded-full shadow-lg flex items-center gap-4">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Theme</span>
              {['modern', 'minimal', 'creative', 'corporate'].map(t => (
                 <button 
                   key={t}
                   onClick={() => setPresentation(prev => prev ? ({...prev, theme: t as any}) : null)}
                   className={`w-6 h-6 rounded-full border-2 transition-transform hover:scale-110 ${presentation?.theme === t ? 'border-indigo-600 scale-110' : 'border-transparent'}`}
                   style={{ background: t === 'modern' ? '#fff' : t === 'creative' ? '#f97316' : t === 'corporate' ? '#0f172a' : '#f5f5f4' }}
                   title={t}
                 />
              ))}
           </div>
        </div>

        {/* Right Sidebar (Context Properties) */}
        <div className="w-80 bg-white border-l border-slate-200 hidden xl:flex flex-col">
           <div className="p-5 border-b border-slate-100">
              <h3 className="font-semibold text-slate-800">Slide Settings</h3>
           </div>
           <div className="p-5 space-y-8 overflow-y-auto">
              <div>
                 <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 block">Layout Style</label>
                 <div className="grid grid-cols-2 gap-3">
                    {['Title Only', 'Bullet Left', 'Bullet Right', 'Centered'].map((l, i) => (
                       <div key={i} className="h-16 border border-slate-200 rounded-md hover:border-indigo-400 hover:bg-indigo-50 cursor-pointer bg-slate-50"></div>
                    ))}
                 </div>
              </div>

              <div>
                 <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 block">Visuals</label>
                 <Button variant="outline" className="w-full justify-center border-slate-200 text-slate-600 hover:bg-slate-50">
                    <ImageIcon size={16} className="mr-2"/> Regenerate Image
                 </Button>
                 <p className="text-xs text-slate-400 mt-2 text-center">AI suggested: "{presentation?.slides[activeSlideIndex].imagePrompt}"</p>
              </div>

              <div>
                 <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 block">Speaker Notes</label>
                 <textarea 
                    className="w-full h-40 bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm text-slate-600 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none resize-none"
                    placeholder="Type notes here..."
                 ></textarea>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};