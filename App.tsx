import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Generator } from './components/Generator';
import { AppState } from './types';
import { Button } from './components/Button';
import { 
  LayoutTemplate, ArrowRight, CheckCircle2, PlayCircle,
  GraduationCap, BookOpen, Briefcase, Target, Layers, Building2, 
  ChevronDown, ChevronUp, TrendingUp, ShieldCheck, Users,
  Type, Image as ImageIcon, FileOutput, Lock, Zap,
  FileText, Video, Link as LinkIcon, UploadCloud, Cpu, Palette, Share2, FileType,
  Download, Copy, Mail, Sparkles, BrainCircuit, Wand2, ChevronRight, ScanLine, Binary,
  Globe, Monitor, Command, Key, FileCheck
} from 'lucide-react';

// --- Components for the new sections ---

const FaqItem = ({ question, answer }: { question: string; answer: string }) => {
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

const ToolsGrid = () => {
  // Bento Grid Configuration:
  // Refined descriptions to include action verbs and file formats (LSI keywords)
  const tools = [
    {
      id: 'text',
      title: 'Text to Presentation',
      desc: 'The core engine. Paste outlines, notes, or prompts to generate professional slides instantly.',
      icon: Type,
      span: "md:col-span-2",
      bg: "bg-indigo-50 hover:bg-indigo-100",
    },
    {
      id: 'pdf',
      title: 'PDF to Slides',
      desc: 'Extract key points from reports and convert to deck format.',
      icon: FileType,
      span: "md:col-span-1",
      bg: "bg-red-50 hover:bg-red-100",
    },
    {
      id: 'word',
      title: 'Word to PPT',
      desc: 'Transform DOCX documents into visual presentations.',
      icon: FileText,
      span: "md:col-span-1",
      bg: "bg-blue-50 hover:bg-blue-100",
    },
    {
      id: 'pic',
      title: 'Image to Deck',
      desc: 'Upload charts or whiteboard photos. Our vision AI interprets visuals to build slide context.',
      icon: ImageIcon,
      span: "md:col-span-2",
      bg: "bg-purple-50 hover:bg-purple-100",
    },
    {
      id: 'video',
      title: 'Video Summarizer',
      desc: 'Turn YouTube content into a structured slide summary.',
      icon: Video,
      span: "md:col-span-1",
      bg: "bg-emerald-50 hover:bg-emerald-100",
    },
    {
      id: 'link',
      title: 'URL to PPT',
      desc: 'Convert blog posts or news articles into presentation slides.',
      icon: LinkIcon,
      span: "md:col-span-1",
      bg: "bg-amber-50 hover:bg-amber-100",
    }
  ];

  return (
    <section className="py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">The All-in-One Presentation Suite</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Beyond basic formatting. A complete generative AI toolkit for automated slide design.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {tools.map((tool) => (
            <div 
              key={tool.id} 
              className={`${tool.span} ${tool.bg} p-8 rounded-3xl transition-all duration-300 cursor-pointer group hover:scale-[1.02] active:scale-[0.98] flex flex-col justify-between`}
            >
              <div>
                {/* Header Row: Icon + Title */}
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-slate-700 group-hover:scale-110 transition-transform duration-300`}>
                    <tool.icon size={20} strokeWidth={2} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {tool.title}
                  </h3>
                </div>
                
                <p className="text-slate-600 leading-relaxed text-sm font-medium opacity-80 mb-6">
                  {tool.desc}
                </p>
              </div>

              {/* Link */}
              <div className="flex items-center text-slate-900 font-bold text-sm group-hover:text-indigo-600 transition-colors mt-auto">
                Start {tool.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WorkflowSection = () => {
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
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-indigo-900/10 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left: Content Steps */}
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
               {/* Connecting Line */}
               <div className="absolute left-[23px] top-4 bottom-4 w-0.5 bg-slate-800 z-0"></div>
               {/* Progress Line */}
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

          {/* Right: Modern Glass Visual */}
          <div className="relative aspect-square md:aspect-[4/3]">
             {/* Glow Effect */}
             <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 to-purple-600/20 rounded-3xl blur-2xl transform rotate-3 scale-95"></div>
             
             {/* Main Container */}
             <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden flex flex-col">
                {/* Header */}
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

                {/* Content Area */}
                <div className="flex-1 p-10 relative flex items-center justify-center">
                    
                    {/* Step 0: Upload */}
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

                    {/* Step 1: Analyze */}
                    {activeStep === 1 && (
                      <div className="w-full h-full relative animate-fade-in flex items-center justify-center">
                         {/* Central Node */}
                         <div className="absolute w-24 h-24 bg-indigo-600 rounded-full flex items-center justify-center shadow-lg shadow-indigo-500/50 z-10 animate-pulse">
                            <BrainCircuit size={40} className="text-white" />
                         </div>
                         {/* Orbiting Nodes */}
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
                         {/* Connection Lines (SVG) */}
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

                    {/* Step 2: Design */}
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
                             {/* Floating Paintbrush */}
                             <div className="absolute -right-4 -bottom-4 bg-indigo-600 p-3 rounded-full shadow-lg text-white">
                                <Palette size={24} />
                             </div>
                          </div>
                       </div>
                    )}

                    {/* Step 3: Export */}
                    {activeStep === 3 && (
                       <div className="text-center animate-fade-in">
                          <div className="relative inline-block">
                             <div className="w-24 h-32 bg-white rounded-xl shadow-2xl flex items-center justify-center relative z-10">
                                <FileType size={48} className="text-orange-600" />
                                <div className="absolute bottom-2 text-[10px] font-bold text-slate-900">PPTX</div>
                             </div>
                             {/* Background stacked papers */}
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

const AboutSection = () => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  return (
    <section className="py-32 bg-white border-y border-slate-100 overflow-hidden relative">
      {/* Subtle Background decoration to break "flatness" */}
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
               {/* Privacy Feature - Card with Inline Icon */}
               <div 
                  onMouseEnter={() => setActiveFeature(0)}
                  onMouseLeave={() => setActiveFeature(null)}
                  className={`group relative p-6 rounded-2xl transition-all duration-300 border cursor-default 
                    ${activeFeature === 0 
                        ? 'bg-white border-blue-100 shadow-xl shadow-blue-500/10 scale-[1.02] z-10' 
                        : 'bg-slate-50/50 border-transparent hover:bg-white hover:border-slate-200 hover:shadow-md'}`}
               >
                  {/* Left Accent Bar */}
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

               {/* Export Feature - Card with Inline Icon */}
               <div 
                  onMouseEnter={() => setActiveFeature(1)}
                  onMouseLeave={() => setActiveFeature(null)}
                  className={`group relative p-6 rounded-2xl transition-all duration-300 border cursor-default 
                    ${activeFeature === 1
                        ? 'bg-white border-orange-100 shadow-xl shadow-orange-500/10 scale-[1.02] z-10' 
                        : 'bg-slate-50/50 border-transparent hover:bg-white hover:border-slate-200 hover:shadow-md'}`}
               >
                  {/* Left Accent Bar */}
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

          {/* Right Side: Interactive Layered Visual */}
          <div className="flex-1 w-full relative order-1 md:order-2 h-[600px] flex items-center justify-center">
             {/* Dynamic Background Pulse */}
             <div className="absolute inset-0 bg-gradient-to-tr from-slate-100 to-indigo-50 rounded-full blur-[100px] opacity-60 pointer-events-none"></div>
             
             <div className="relative w-full max-w-sm perspective-1000">
                
                {/* Connecting Lines (Vertical Flow) */}
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-indigo-200 to-transparent -translate-x-1/2 z-0"></div>

                {/* Layer 1: Raw Data (Bottom) */}
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

                {/* Layer 2: Semantic Engine (Middle) */}
                <div 
                  className={`
                    w-full aspect-[16/9] backdrop-blur-md bg-white/40 rounded-xl shadow-xl border border-white/50 
                    absolute top-0 left-0 flex flex-col p-6 z-20 transition-all duration-500 ease-out origin-center overflow-hidden
                    ${activeFeature === null ? 'translate-y-16 scale-95 -rotate-3' : 'translate-y-24 scale-95 rotate-0 opacity-80'}
                  `}
                >
                    {/* Scanning Animation */}
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

                {/* Layer 3: Final Slide (Top) */}
                <div 
                  className={`
                    w-full aspect-[16/9] bg-white rounded-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100 
                    absolute top-0 left-0 flex flex-col overflow-hidden z-30 transition-all duration-500 ease-out
                    ${activeFeature === 1 ? 'translate-y-0 scale-105 rotate-0 ring-2 ring-orange-400 ring-offset-4 ring-offset-white' : 'hover:-translate-y-2'}
                  `}
                >
                    {/* Decorative Header Background */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-bl-full -z-10"></div>
                    
                    <div className="p-8 flex flex-col h-full relative">
                       {/* Overlay for Export Mode */}
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
                             {/* Mini Image Placeholder */}
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

const UseCaseSection = () => {
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
      {/* Sidebar Tabs */}
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

      {/* Content Area */}
      <div className="flex-1 relative">
         {useCases.map((useCase) => (
             <div 
               key={useCase.id}
               className={`absolute inset-0 transition-opacity duration-500 flex ${activeTab === useCase.id ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
             >
                {/* Background Color Layer */}
                <div className={`absolute inset-0 ${useCase.bgClass} backdrop-blur-3xl`}></div>
                
                <div className="relative w-full h-full flex flex-col md:flex-row p-8 md:p-12 gap-12 items-center">
                    {/* Left: Text Content */}
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
                       
                       <Button className="group bg-slate-900 hover:bg-slate-800 text-white px-6">
                          Start Creating <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                       </Button>
                    </div>

                    {/* Right: Visual Imagery */}
                    <div className="flex-1 w-full max-w-sm md:max-w-none md:h-full flex items-center justify-center relative">
                        {/* Abstract blob behind image */}
                        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full blur-3xl opacity-40 ${useCase.bgClass.replace('/50', '')}`}></div>
                        
                        <div className="relative w-full aspect-[4/5] md:aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl shadow-slate-200/50 border-[6px] border-white transform rotate-2 transition-transform duration-700 hover:rotate-0">
                           <img 
                              src={useCase.img} 
                              alt={useCase.title} 
                              className="w-full h-full object-cover"
                           />
                           {/* Overlay Gradient */}
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

const TechnicalSpecs = () => (
  <div className="grid md:grid-cols-4 gap-8">
    <div className="space-y-4">
      <h4 className="font-bold text-slate-900 flex items-center gap-2">
        <Monitor size={18} className="text-indigo-500"/> Supported Platforms
      </h4>
      <ul className="space-y-2 text-sm text-slate-600">
        <li>Web Browser (Chrome, Safari, Edge)</li>
        <li>Microsoft PowerPoint (PPTX)</li>
        <li>Google Slides (via Import)</li>
        <li>Keynote (via PPTX)</li>
        <li>LibreOffice Impress</li>
      </ul>
    </div>
    
    <div className="space-y-4">
      <h4 className="font-bold text-slate-900 flex items-center gap-2">
        <Command size={18} className="text-blue-500"/> Core Features
      </h4>
      <ul className="space-y-2 text-sm text-slate-600">
        <li>AI Text to Slide Generator</li>
        <li>Automated Visual Formatting</li>
        <li>Royalty-Free Image Sourcing</li>
        <li>One-Click Reformatting</li>
        <li>Smart Content Condenser</li>
      </ul>
    </div>

    <div className="space-y-4">
      <h4 className="font-bold text-slate-900 flex items-center gap-2">
        <Globe size={18} className="text-green-500"/> Use Cases
      </h4>
      <ul className="space-y-2 text-sm text-slate-600">
        <li>Startup Pitch Decks</li>
        <li>Sales & Marketing Proposals</li>
        <li>Educational Lectures</li>
        <li>Quarterly Business Reviews</li>
        <li>Conference Presentations</li>
      </ul>
    </div>

    <div className="space-y-4">
      <h4 className="font-bold text-slate-900 flex items-center gap-2">
        <FileCheck size={18} className="text-orange-500"/> Export Specs
      </h4>
      <ul className="space-y-2 text-sm text-slate-600">
        <li>Native .pptx (Editable)</li>
        <li>High-Res PDF</li>
        <li>16:9 Aspect Ratio (Standard)</li>
        <li>Vector Shapes & Text</li>
        <li>Embedded Fonts</li>
      </ul>
    </div>
  </div>
);

// --- Main App Component ---

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.LANDING);

  // Mock template data for the landing page
  const templates = [
    { title: "Quarterly Review", color: "bg-blue-100", tag: "Business", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" },
    { title: "Tech Startup Pitch", color: "bg-indigo-100", tag: "Startup", img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800" },
    { title: "Modern Portfolio", color: "bg-purple-100", tag: "Creative", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800" },
    { title: "Educational Class", color: "bg-green-100", tag: "Education", img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800" },
    { title: "Marketing Strategy", color: "bg-pink-100", tag: "Marketing", img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800" },
    { title: "Product Launch", color: "bg-orange-100", tag: "Product", img: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?auto=format&fit=crop&q=80&w=800" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar onNavigate={setAppState} currentState={appState} />
      
      <main>
        {appState === AppState.GENERATOR ? (
          <Generator />
        ) : (
          <div className="flex flex-col">
            {/* HERO SECTION - TALLER & ATMOSPHERIC */}
            <section className="relative pt-32 pb-40 lg:pt-48 lg:pb-56 px-6 overflow-hidden">
               {/* Decorative Blobs */}
               <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-100/50 rounded-full blur-[100px] -z-10 translate-x-1/3 -translate-y-1/4"></div>
               <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-100/40 rounded-full blur-[80px] -z-10 -translate-x-1/4 translate-y-1/4"></div>

               <div className="max-w-5xl mx-auto text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-slate-600 text-sm font-medium mb-8 animate-fade-in-up">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    Updated for 2026 Design Trends
                  </div>
                  
                  <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1] text-slate-900">
                    Presentations that <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                      design themselves.
                    </span>
                  </h1>
                  
                  <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed">
                    Stop wrestling with formatting. Meet the <strong className="font-semibold text-slate-900">AI PPT Maker</strong> and <strong>Slide Generator</strong> that builds storytelling-driven decks in seconds.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                     <Button 
                       size="lg" 
                       onClick={() => setAppState(AppState.GENERATOR)}
                       className="w-full sm:w-auto text-lg h-14 px-10 rounded-full bg-slate-900 text-white hover:bg-slate-800 shadow-xl shadow-slate-200"
                     >
                       Start Creating Free
                     </Button>
                     <Button 
                       variant="outline" 
                       size="lg" 
                       className="w-full sm:w-auto text-lg h-14 px-10 rounded-full bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                     >
                       <PlayCircle size={20} className="mr-2 text-indigo-600"/> See Demo
                     </Button>
                  </div>
               </div>
            </section>

            {/* TEMPLATES GRID - RESTORED TO REAL IMAGES */}
            <section className="py-20 bg-white border-y border-slate-100">
               <div className="max-w-[1400px] mx-auto px-6">
                  <div className="flex justify-between items-end mb-10">
                     <div>
                        <h2 className="text-3xl font-bold text-slate-900">Popular Templates</h2>
                        <p className="text-slate-500 mt-2">Professional layouts for every use case.</p>
                     </div>
                     <a href="#" className="text-indigo-600 font-semibold hover:text-indigo-700 flex items-center gap-1">
                        View all <ArrowRight size={16}/>
                     </a>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                     {templates.map((t, i) => (
                        <div key={i} className="group cursor-pointer">
                           <div className="aspect-[16/10] rounded-xl mb-4 overflow-hidden relative shadow-md hover:shadow-xl transition-all duration-300">
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10"></div>
                              <img src={t.img} alt={t.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
                                 <Button className="rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">Use Template</Button>
                              </div>
                           </div>
                           <div className="flex justify-between items-center">
                              <h3 className="font-bold text-lg text-slate-800 group-hover:text-indigo-600 transition-colors">{t.title}</h3>
                              <span className="text-xs font-semibold px-2 py-1 bg-slate-100 text-slate-500 rounded-md uppercase tracking-wide">{t.tag}</span>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </section>
            
            {/* DEMO VIDEO SECTION */}
            <section className="py-24 bg-white border-b border-slate-100">
               <div className="max-w-7xl mx-auto px-6 text-center">
                  <div className="mb-12">
                     <h2 className="text-3xl font-bold text-slate-900 mb-4">See It In Action</h2>
                     <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Watch how easy it is to transform a simple topic into a comprehensive presentation.
                     </p>
                  </div>
                  
                  <div className="relative mx-auto max-w-5xl rounded-xl border border-slate-200 shadow-2xl overflow-hidden bg-slate-100 ring-1 ring-slate-900/5">
                     {/* Fake Browser Header */}
                     <div className="h-10 bg-white border-b border-slate-100 flex items-center px-4 gap-2">
                        <div className="flex gap-2">
                           <div className="w-3 h-3 rounded-full bg-red-400"></div>
                           <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                           <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        </div>
                        <div className="mx-auto bg-slate-50 px-4 py-1 rounded-md text-xs font-medium text-slate-500 flex items-center gap-2">
                           <Lock size={10} /> aippt-maker.pro/demo
                        </div>
                     </div>
                     <video 
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                        className="w-full h-auto block bg-slate-50"
                     >
                        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/headPpt-WkKq4B7Raqylp1rTVXFzSOHV6htdf9.mp4" type="video/mp4" />
                     </video>
                  </div>
               </div>
            </section>
            
            {/* NEW: TOOLS GRID (Bento Style) */}
            <ToolsGrid />

            {/* NEW: WORKFLOW SECTION (Dark Mode) */}
            <WorkflowSection />
            
            {/* ABOUT SECTION */}
            <AboutSection />

            {/* USE CASES SECTION (Interactive) */}
            <section className="py-24 bg-slate-50">
               <div className="max-w-7xl mx-auto px-6">
                  <div className="text-center mb-16">
                     <h2 className="text-3xl font-bold text-slate-900 mb-4">Who Is This Platform For?</h2>
                     <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        We've optimized our engine for specific industries and use cases. Select your role to see how we can help.
                     </p>
                  </div>
                  <UseCaseSection />
               </div>
            </section>

            {/* VALUE PROPS */}
            <section className="py-24 bg-white border-y border-slate-100">
               <div className="max-w-7xl mx-auto px-6">
                  <div className="grid md:grid-cols-2 gap-16 items-center">
                     <div>
                        <h2 className="text-4xl font-bold mb-6 text-slate-900">An AI PPT Maker designed <br/>for speed.</h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                           Most presentation tools force you to be a designer. We believe you should focus on your message. Our intelligent engine handles hierarchy, contrast, and layout automatically.
                        </p>
                        <ul className="space-y-4">
                           {[
                              "Smart layout adjustments based on content length",
                              "Auto-sourcing of royalty-free relevant images",
                              "Export to editable PowerPoint (.pptx) or PDF",
                              "Brand kit integration for teams"
                           ].map((item, i) => (
                              <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                                 <CheckCircle2 className="text-indigo-600" size={20} />
                                 {item}
                              </li>
                           ))}
                        </ul>
                     </div>
                     <div className="bg-slate-50 p-8 rounded-2xl shadow-lg border border-slate-100 relative">
                        <div className="absolute -top-6 -right-6 bg-yellow-400 text-slate-900 font-bold px-4 py-2 rounded-lg shadow-lg rotate-3 z-10">
                           It's that easy!
                        </div>
                        {/* Mock Chat Interface */}
                        <div className="space-y-4">
                           <div className="flex gap-3">
                              <div className="w-8 h-8 rounded-full bg-slate-200"></div>
                              <div className="bg-white p-3 rounded-lg rounded-tl-none text-sm text-slate-600 max-w-[80%] shadow-sm">
                                 Make a deck about the future of renewable energy.
                              </div>
                           </div>
                           <div className="flex gap-3 flex-row-reverse">
                              <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xs">AI</div>
                              <div className="bg-indigo-50 p-3 rounded-lg rounded-tr-none text-sm text-indigo-900 max-w-[80%]">
                                 On it! I've created an 8-slide outline covering solar, wind, and policy changes. Generating visuals now...
                              </div>
                           </div>
                           <div className="mt-4 p-4 border border-slate-200 rounded-lg bg-white">
                              <div className="flex gap-2 mb-2">
                                 <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80" alt="Slide 1" className="w-full h-20 object-cover rounded border border-slate-100" />
                                 <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=300&q=80" alt="Slide 2" className="w-full h-20 object-cover rounded border border-slate-100" />
                                 <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=300&q=80" alt="Slide 3" className="w-full h-20 object-cover rounded border border-slate-100" />
                              </div>
                              <div className="h-2 w-1/3 bg-slate-100 rounded"></div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            
            {/* FAQ SECTION */}
            <section className="py-24 bg-slate-50">
              <div className="max-w-3xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Frequently Asked Questions</h2>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
                  <FaqItem 
                    question="Is the content unique or copied?"
                    answer="Every presentation is uniquely generated using advanced algorithms. The engine writes original content based on your specific topic, ensuring your deck is plagiarism-free and tailored to your audience."
                  />
                  <FaqItem 
                    question="Can I edit the slides after generation?"
                    answer="Yes. You can edit text and images directly within our platform. Furthermore, when you export to PowerPoint (.pptx), the file is fully editable—text boxes, shapes, and images are all native elements, not flattened pictures."
                  />
                  <FaqItem 
                    question="Is AI PPT Maker free to use?"
                    answer="We offer a generous Free Tier allowing 3 presentations per month. For power users, our Pro plan ($15/mo) offers unlimited generation, premium image assets, and team collaboration features."
                  />
                  <FaqItem 
                    question="Do you support other languages?"
                    answer="Yes! Our system is fluent in over 50 languages including Spanish, French, German, Chinese, Japanese, and Portuguese. Just type your prompt in your desired language, and the output will match it."
                  />
                  <FaqItem 
                    question="Can I use my own company branding?"
                    answer="Absolutely. You can upload your logos, define custom color palettes (hex codes), and select specific fonts in the editor. Enterprise plans allow you to save these brand kits for your entire team to use automatically."
                  />
                  <FaqItem 
                    question="Is it compatible with Google Slides?"
                    answer="Yes. We export native .pptx files, which are fully compatible with Google Slides, Keynote, and LibreOffice. Simply upload the file to Google Drive, and it will open with all formatting and editability preserved."
                  />
                  <FaqItem 
                    question="How does AI PPT Maker protect my data?"
                    answer="We prioritize your privacy. Your input data is processed via secure, stateless APIs and is never used to train our AI models. We adhere to strict enterprise-grade security protocols including encryption in transit and at rest."
                  />
                </div>
              </div>
            </section>

            {/* SEO / KNOWLEDGE FOOTER */}
            <section className="py-20 bg-slate-100 border-t border-slate-200">
               <div className="max-w-7xl mx-auto px-6">
                  <div className="mb-12">
                     <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Platform Capabilities</h3>
                     <h2 className="text-2xl font-bold text-slate-800">Technical Specifications</h2>
                  </div>
                  <TechnicalSpecs />
               </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-slate-900 text-white text-center px-6">
               <h2 className="text-4xl font-bold mb-6">Experience the best AI PPT Maker today.</h2>
               <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
                  Join 50,000+ professionals creating better decks in less time.
               </p>
               <Button 
                  size="lg" 
                  onClick={() => setAppState(AppState.GENERATOR)}
                  className="bg-indigo-600 hover:bg-indigo-500 text-white px-12 h-16 text-lg rounded-full shadow-lg shadow-indigo-900/50"
               >
                  Create My Presentation
               </Button>
            </section>

            {/* Footer */}
            <footer className="border-t border-slate-200 py-12 bg-white text-slate-500">
               <div className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-4 gap-8 text-sm">
                  <div>
                     <span className="font-bold text-slate-900 text-lg block mb-4">AIPPT Maker Pro</span>
                     <p>Empowering ideas with beautiful design.</p>
                  </div>
                  <div>
                     <h4 className="font-bold text-slate-900 mb-4">Product</h4>
                     <ul className="space-y-2">
                        <li><a href="#" className="hover:text-indigo-600">Templates</a></li>
                        <li><a href="#" className="hover:text-indigo-600">Enterprise</a></li>
                        <li><a href="#" className="hover:text-indigo-600">Pricing</a></li>
                     </ul>
                  </div>
                  <div>
                     <h4 className="font-bold text-slate-900 mb-4">Resources</h4>
                     <ul className="space-y-2">
                        <li><a href="#" className="hover:text-indigo-600">Blog</a></li>
                        <li><a href="#" className="hover:text-indigo-600">Help Center</a></li>
                        <li><a href="#" className="hover:text-indigo-600">Community</a></li>
                     </ul>
                  </div>
                  <div>
                     <h4 className="font-bold text-slate-900 mb-4">Legal</h4>
                     <ul className="space-y-2">
                        <li><a href="#" className="hover:text-indigo-600">Privacy</a></li>
                        <li><a href="#" className="hover:text-indigo-600">Terms</a></li>
                     </ul>
                  </div>
               </div>
            </footer>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;