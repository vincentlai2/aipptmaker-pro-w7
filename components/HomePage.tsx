import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from './Navbar';
import { Button } from './Button';
import { WorkflowSection } from './client/WorkflowSection';
import { AboutSection } from './client/AboutSection';
import { UseCaseSection } from './client/UseCaseSection';
import { 
  ArrowRight, CheckCircle2, PlayCircle,
  Type, FileType, FileText, Image as ImageIcon, Video, Link as LinkIcon,
  Lock, Globe, Monitor, Command, FileCheck
} from 'lucide-react';

// 服务端组件 - 静态内容
const ToolsGrid = () => {
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
    <section id="tools" className="py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">The All-in-One Presentation Suite</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Beyond basic formatting. A complete generative AI toolkit for automated slide design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {tools.map((tool) => (
            <div 
              key={tool.id} 
              className={`${tool.span} ${tool.bg} p-8 rounded-3xl transition-all duration-300 cursor-pointer group hover:scale-[1.02] active:scale-[0.98] flex flex-col justify-between`}
            >
              <div>
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

const faqs = [
  {
    question: "Is the content unique or copied?",
    answer: "Every presentation is uniquely generated using advanced algorithms. The engine writes original content based on your specific topic, ensuring your deck is plagiarism-free and tailored to your audience."
  },
  {
    question: "Can I edit the slides after generation?",
    answer: "Yes. You can edit text and images directly within our platform. Furthermore, when you export to PowerPoint (.pptx), the file is fully editable—text boxes, shapes, and images are all native elements, not flattened pictures."
  },
  {
    question: "Is AI PPT Maker free to use?",
    answer: "We offer a generous Free Tier allowing 3 presentations per month. For power users, our Pro plan ($15/mo) offers unlimited generation, premium image assets, and team collaboration features."
  },
  {
    question: "Do you support other languages?",
    answer: "Yes! Our system is fluent in over 50 languages including Spanish, French, German, Chinese, Japanese, and Portuguese. Just type your prompt in your desired language, and the output will match it."
  },
  {
    question: "Can I use my own company branding?",
    answer: "Absolutely. You can upload your logos, define custom color palettes (hex codes), and select specific fonts in the editor. Enterprise plans allow you to save these brand kits for your entire team to use automatically."
  },
  {
    question: "Is it compatible with Google Slides?",
    answer: "Yes. We export native .pptx files, which are fully compatible with Google Slides, Keynote, and LibreOffice. Simply upload the file to Google Drive, and it will open with all formatting and editability preserved."
  },
  {
    question: "How does AI PPT Maker protect my data?",
    answer: "We prioritize your privacy. Your input data is processed via secure, stateless APIs and is never used to train our AI models. We adhere to strict enterprise-grade security protocols including encryption in transit and at rest."
  }
];

export const HomePage: React.FC = () => {
  const templates = [
    { title: "Quarterly Review", tag: "Business", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" },
    { title: "Tech Startup Pitch", tag: "Startup", img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800" },
    { title: "Modern Portfolio", tag: "Creative", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800" },
    { title: "Educational Class", tag: "Education", img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800" },
    { title: "Marketing Strategy", tag: "Marketing", img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800" },
    { title: "Product Launch", tag: "Product", img: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?auto=format&fit=crop&q=80&w=800" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />
      
      <main>
        <div className="flex flex-col">
            {/* HERO SECTION - 服务端渲染 */}
            <section className="relative pt-32 pb-40 lg:pt-48 lg:pb-56 px-6 overflow-hidden">
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
                     <a 
                       href="https://smallppt.com/login-index"
                       target="_blank"
                       rel="nofollow noopener noreferrer"
                     >
                       <Button 
                         size="lg" 
                         className="w-full sm:w-auto text-lg h-14 px-10 rounded-full bg-slate-900 text-white hover:bg-slate-800 shadow-xl shadow-slate-200"
                       >
                         Start Creating Free
                       </Button>
                     </a>
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

            {/* TEMPLATES GRID - 服务端渲染 */}
            <section id="templates" className="py-20 bg-white border-y border-slate-100">
               <div className="max-w-[1400px] mx-auto px-6">
                  <div className="flex justify-between items-end mb-10">
                     <div>
                        <h2 className="text-3xl font-bold text-slate-900">Popular Templates</h2>
                        <p className="text-slate-500 mt-2">Professional layouts for every use case.</p>
                     </div>
                     <a href="#templates" className="text-indigo-600 font-semibold hover:text-indigo-700 flex items-center gap-1">
                        View all <ArrowRight size={16}/>
                     </a>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                     {templates.map((t, i) => (
                        <div key={i} className="group cursor-pointer">
                           <div className="aspect-[16/10] rounded-xl mb-4 overflow-hidden relative shadow-md hover:shadow-xl transition-all duration-300">
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10"></div>
                              <Image src={t.img} alt={t.title} fill className="object-cover transform group-hover:scale-105 transition-transform duration-500" />
                              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
                                 <a 
                                   href="https://smallppt.com/login-index"
                                   target="_blank"
                                   rel="nofollow noopener noreferrer"
                                 >
                                   <Button className="rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">Use Template</Button>
                                 </a>
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
            
            {/* DEMO VIDEO SECTION - 服务端渲染 */}
            <section className="py-24 bg-white border-b border-slate-100">
               <div className="max-w-7xl mx-auto px-6 text-center">
                  <div className="mb-12">
                     <h2 className="text-3xl font-bold text-slate-900 mb-4">See It In Action</h2>
                     <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Watch how easy it is to transform a simple topic into a comprehensive presentation.
                     </p>
                  </div>
                  
                  <div className="relative mx-auto max-w-5xl rounded-xl border border-slate-200 shadow-2xl overflow-hidden bg-slate-100 ring-1 ring-slate-900/5">
                     <div className="h-10 bg-white border-b border-slate-100 flex items-center px-4 gap-2">
                        <div className="flex gap-2">
                           <div className="w-3 h-3 rounded-full bg-red-400"></div>
                           <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                           <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        </div>
                        <div className="mx-auto bg-slate-50 px-4 py-1 rounded-md text-xs font-medium text-slate-500 flex items-center gap-2">
                           <Lock size={10} /> aipptmaker.pro/demo
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
            
            {/* 客户端组件：交互式部分 */}
            <ToolsGrid />
            <WorkflowSection />
            <AboutSection />

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

            {/* VALUE PROPS - 服务端渲染 */}
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
                                 <Image src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80" alt="Slide 1" width={300} height={120} className="w-full h-20 object-cover rounded border border-slate-100" />
                                 <Image src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=300&q=80" alt="Slide 2" width={300} height={120} className="w-full h-20 object-cover rounded border border-slate-100" />
                                 <Image src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=300&q=80" alt="Slide 3" width={300} height={120} className="w-full h-20 object-cover rounded border border-slate-100" />
                              </div>
                              <div className="h-2 w-1/3 bg-slate-100 rounded"></div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            
            {/* FAQ SECTION - 服务端渲染 */}
            <section className="py-24 bg-slate-50">
              <div className="max-w-3xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Frequently Asked Questions</h2>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 space-y-8">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-slate-200 last:border-0 pb-8 last:pb-0">
                      <h3 className="text-lg font-semibold text-slate-800 mb-3">{faq.question}</h3>
                      <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* SEO / KNOWLEDGE FOOTER - 服务端渲染 */}
            <section className="py-20 bg-slate-100 border-t border-slate-200">
               <div className="max-w-7xl mx-auto px-6">
                  <div className="mb-12">
                     <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Platform Capabilities</h3>
                     <h2 className="text-2xl font-bold text-slate-800">Technical Specifications</h2>
                  </div>
                  <TechnicalSpecs />
               </div>
            </section>

            {/* CTA - 服务端渲染 */}
            <section className="py-24 bg-slate-900 text-white text-center px-6">
               <h2 className="text-4xl font-bold mb-6">Experience the best AI PPT Maker today.</h2>
               <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
                  Join 50,000+ professionals creating better decks in less time.
               </p>
               <a 
                 href="https://smallppt.com/login-index"
                 target="_blank"
                 rel="nofollow noopener noreferrer"
               >
                 <Button 
                    size="lg" 
                    className="bg-indigo-600 hover:bg-indigo-500 text-white px-12 h-16 text-lg rounded-full shadow-lg shadow-indigo-900/50"
                 >
                    Create My Presentation
                 </Button>
               </a>
            </section>

            {/* Footer - 服务端渲染 */}
            <footer className="border-t border-slate-200 py-12 bg-white text-slate-500">
               <div className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-4 gap-8 text-sm">
                  <div>
                     <span className="font-bold text-slate-900 text-lg block mb-4">AIPPT Maker Pro</span>
                     <p>Empowering ideas with beautiful design.</p>
                  </div>
                  <div>
                     <h4 className="font-bold text-slate-900 mb-4">Product</h4>
                     <ul className="space-y-2">
                        <li><Link href="/#templates" className="hover:text-indigo-600">Templates</Link></li>
                        <li><Link href="/enterprise" className="hover:text-indigo-600">Enterprise</Link></li>
                        <li><Link href="/pricing" className="hover:text-indigo-600">Pricing</Link></li>
                     </ul>
                  </div>
                  <div>
                     <h4 className="font-bold text-slate-900 mb-4">Resources</h4>
                     <ul className="space-y-2">
                        <li><Link href="/blog" className="hover:text-indigo-600">Blog</Link></li>
                        <li><Link href="/help" className="hover:text-indigo-600">Help Center</Link></li>
                        <li><Link href="/community" className="hover:text-indigo-600">Community</Link></li>
                     </ul>
                  </div>
                  <div>
                     <h4 className="font-bold text-slate-900 mb-4">Legal</h4>
                     <ul className="space-y-2">
                        <li><Link href="/privacy" className="hover:text-indigo-600">Privacy</Link></li>
                        <li><Link href="/terms" className="hover:text-indigo-600">Terms</Link></li>
                     </ul>
                  </div>
               </div>
            </footer>
        </div>
      </main>
    </div>
  );
};
