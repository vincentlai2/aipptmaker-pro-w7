"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Globe,
  Sparkles,
  Play,
  Check,
  Star,
  ArrowRight,
  Shield,
  Brain,
  Download,
  Palette,
  Target,
  Award,
  FileText,
  ImageIcon,
  Video,
  Upload,
  Languages,
  Edit3,
  Users,
  GraduationCap,
  Briefcase,
  TrendingUp,
  Wand2,
} from "lucide-react"

export default function AIPPTMakerHomepage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Modern decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-1/3 w-36 h-36 bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 rounded-full blur-xl"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 px-4 py-6 md:px-6 lg:px-8 backdrop-blur-sm bg-white/80 border-b border-gray-100">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <Wand2 className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AIPPTMaker
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              AI PPT Maker
            </Link>
            <Link href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Templates
            </Link>
            <Link href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Features
            </Link>
            <Link href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Pricing
            </Link>
            <div className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 cursor-pointer transition-colors">
              <Globe className="w-4 h-4" />
              <span className="font-medium">English</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-700 hover:text-blue-600 font-medium">
              Sign In
            </Button>
            <Link href="https://smallppt.com/ai-powerpoint" target="_blank" rel="noopener noreferrer nofollow">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-200">
                Start Free
              </Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section - Enhanced with Input Types */}
      <main className="relative z-10">
        <section className="px-4 py-16 md:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                AI PPT Maker
              </span>
              <br />
              <span className="text-gray-900">No More Hours on</span>
              <br />
              <span className="text-gray-900">Presentation Design</span>
            </h1>

            {/* Enhanced Value Proposition */}
            <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-3xl mx-auto font-medium">
              Transform your ideas into professional presentations in seconds with our free AI PPT Maker. Create stunning PowerPoint slides from any content - documents, images, videos, or text - using our advanced AI presentation generator.
            </p>

            {/* Input Types Highlight */}
            <div className="flex flex-wrap justify-center items-center gap-4 mb-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
                <Edit3 className="w-4 h-4 text-cyan-500" />
                <span>Text to PPT</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
                <FileText className="w-4 h-4 text-blue-500" />
                <span>PDF to PPT</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
                <FileText className="w-4 h-4 text-emerald-500" />
                <span>Word to PPT</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
                <ImageIcon className="w-4 h-4 text-purple-500" />
                <span>Image to PPT</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
                <Video className="w-4 h-4 text-orange-500" />
                <span>Video to PPT</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
                <Globe className="w-4 h-4 text-pink-500" />
                <span>URL to PPT</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link href="https://smallppt.com/ai-powerpoint" target="_blank" rel="noopener noreferrer nofollow">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 min-w-[200px]">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Start Creating Free
                </Button>
              </Link>
              <Button
                variant="outline"
                className="border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 px-8 py-4 text-lg rounded-xl font-medium transition-all duration-200 min-w-[180px] bg-white/80 backdrop-blur-sm"
                onClick={() => document.getElementById("demo-video")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            {/* Enhanced Product Demo Area */}
            <div id="demo-video" className="relative max-w-5xl mx-auto mb-16">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 shadow-2xl border border-gray-100">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="text-sm text-gray-500 font-medium flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                      AI PPT Maker - Live Demo
                    </div>
                  </div>

                  {/* 视频播放器 */}
                  <div className="relative rounded-xl overflow-hidden shadow-lg">
                    <video className="w-full h-auto" controls poster="/hero-demo.png" preload="metadata">
                      <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/headPpt-WkKq4B7Raqylp1rTVXFzSOHV6htdf9.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>

                  {/* 视频描述 */}
                  <div className="mt-6 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-4 flex items-center space-x-3">
                    <Play className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Watch How AI PPT Maker Works</h4>
                      <p className="text-sm text-gray-600">
                        See how our AI presentation maker transforms your content into professional slides in seconds
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>Free Trial Available</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-blue-500" />
                <span className="font-semibold text-gray-700">2M+ Users</span>
              </div>
              <div className="flex items-center space-x-2">
                <Languages className="w-4 h-4 text-blue-500" />
                <span>100+ Languages</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="font-semibold text-gray-700">4.8★ Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-purple-500" />
                <span>Enterprise Security</span>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="px-4 py-12 md:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  30s
                </div>
                <div className="text-gray-600 font-medium">Lightning Generation</div>
                <div className="text-sm text-gray-500">AI-powered creation</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  1000+
                </div>
                <div className="text-gray-600 font-medium">Premium Templates</div>
                <div className="text-sm text-gray-500">Professional designs</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  100+
                </div>
                <div className="text-gray-600 font-medium">Languages Supported</div>
                <div className="text-sm text-gray-500">Smart formatting</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                  24/7
                </div>
                <div className="text-gray-600 font-medium">Always Available</div>
                <div className="text-sm text-gray-500">Instant access</div>
              </div>
            </div>
          </div>
        </section>

        {/* Templates Showcase */}
        <section className="px-4 py-20 md:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  AI Chooses Perfect Designs
                </span>{" "}
                for You
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                No template browsing needed. Our AI analyzes your content and automatically applies the most suitable
                professional design from 1000+ options.
              </p>
            </div>

            {/* Template Categories */}

            {/* Template Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Smart Business Presentations",
                  description:
                    "AI automatically creates professional layouts for corporate content with perfect formatting",
                  color: "from-blue-500 to-cyan-500",
                  feature: "Auto-Layout",
                },
                {
                  title: "Intelligent Content Organization",
                  description: "AI structures your information into logical slides with optimal visual hierarchy",
                  color: "from-emerald-500 to-teal-500",
                  feature: "Smart Structure",
                },
                {
                  title: "Perfect Visual Matching",
                  description: "AI selects colors, fonts, and graphics that match your content and audience perfectly",
                  color: "from-purple-500 to-pink-500",
                  feature: "Visual AI",
                },
              ].map((template, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden"
                >
                  <div className={`h-48 bg-gradient-to-br ${template.color} relative`}>
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3 backdrop-blur-sm">
                          <Sparkles className="w-8 h-8 text-white" />
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white font-semibold text-sm">
                          {template.feature}
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{template.title}</h3>
                    <p className="text-gray-600 mb-4">{template.description}</p>
                    <Link href="https://smallppt.com/ai-powerpoint" target="_blank" rel="noopener noreferrer nofollow">
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg">
                        Try AI Design
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Features Section */}
        <section className="px-4 py-20 md:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What Can This{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  AI PPT Maker
                </span>{" "}
                Do?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                With our video AI PPT maker, you have lots of ways to create and customize your presentations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Sparkles,
                  title: "AI-Powered Content Generation",
                  description:
                    "Transform any content into professional presentations with our intelligent AI presentation maker.",
                  color: "from-yellow-400 to-orange-500",
                },
                {
                  icon: Upload,
                  title: "Multiple Input Support",
                  description:
                    "Support for PDF, Word, Text, Link, Video and Audio uploads with smart content extraction.",
                  color: "from-blue-400 to-cyan-500",
                },
                {
                  icon: Palette,
                  title: "Professional Templates",
                  description:
                    "1000+ professionally designed templates organized by category for every industry and use case.",
                  color: "from-purple-400 to-pink-500",
                },
                {
                  icon: Languages,
                  title: "100+ Language Support",
                  description:
                    "Create presentations in over 100 languages with smart formatting and cultural adaptations.",
                  color: "from-emerald-400 to-teal-500",
                },
                {
                  icon: Edit3,
                  title: "Full Editing Control",
                  description:
                    "Complete control over fonts, colors, charts, transitions, and all presentation elements.",
                  color: "from-orange-400 to-red-500",
                },
                {
                  icon: Download,
                  title: "Export as PowerPoint",
                  description:
                    "Export as fully editable PowerPoint (.pptx) files compatible with all presentation software.",
                  color: "from-cyan-400 to-blue-500",
                },
              ].map((feature, index) => (
                <div key={index} className="text-center group">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NEW: Conversion Tools Matrix */}
        <section className="px-4 py-20 md:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Explore Our Specialized{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  PPT Conversion Tools
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                AI-powered, fast, and highly accurate conversion tools for all your presentation needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: FileText,
                  title: "PDF to PPT",
                  description: "Convert PDFs into editable PPT slides while preserving formatting and structure.",
                  color: "from-red-500 to-pink-500",
                  subtitle: "Most Popular Choice",
                },
                {
                  icon: FileText,
                  title: "Word to PPT",
                  description: "Transform Word documents into structured presentations with intelligent slide breaks.",
                  color: "from-blue-500 to-cyan-500",
                  subtitle: "Fast & Accurate",
                },
                {
                  icon: ImageIcon,
                  title: "Picture to PPT",
                  description: "Turn visuals and images into presentation content with AI-powered analysis.",
                  color: "from-purple-500 to-pink-500",
                  subtitle: "AI-Enhanced",
                },
                {
                  icon: Video,
                  title: "Video to PPT",
                  description: "Extract key moments from videos and generate presentations automatically.",
                  color: "from-orange-500 to-red-500",
                  subtitle: "Video AI",
                },
                {
                  icon: Edit3,
                  title: "Text to PPT",
                  description: "Create professional presentations from plain text with smart content organization.",
                  color: "from-emerald-500 to-teal-500",
                  subtitle: "Smart AI",
                },
                {
                  icon: Globe,
                  title: "Link to PPT",
                  description: "Generate presentations from web content and online articles instantly.",
                  color: "from-cyan-500 to-blue-500",
                  subtitle: "Web Scraping",
                },
              ].map((tool, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden relative"
                >
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${tool.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                    >
                      <tool.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{tool.title}</h3>
                    <p className="text-xs text-gray-500 mb-3 font-medium">{tool.subtitle}</p>
                    <p className="text-gray-600 mb-6 leading-relaxed">{tool.description}</p>
                    <Link href="https://smallppt.com/ai-powerpoint" target="_blank" rel="noopener noreferrer nofollow">
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-medium">
                        Try {tool.title}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="https://smallppt.com/ai-powerpoint" target="_blank" rel="noopener noreferrer nofollow">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
                  <Wand2 className="w-5 h-5 mr-2" />
                  Get Started with All Tools
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="px-4 py-20 md:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                How Our{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  AI PPT Maker
                </span>{" "}
                Works
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Transform your ideas into professional presentations in just four simple steps with our AI presentation
                maker.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Upload Content",
                  description: "Upload PDF, Word, images, videos, or enter text directly into our AI PPT Maker.",
                  icon: Upload,
                },
                {
                  step: "2",
                  title: "AI Processing",
                  description:
                    "Our AI powerpoint generator analyzes your content and creates structured, professional slides.",
                  icon: Brain,
                },
                {
                  step: "3",
                  title: "Customize Design",
                  description: "Fine-tune your presentation using our editing tools and 1000+ template library.",
                  icon: Palette,
                },
                {
                  step: "4",
                  title: "Export & Share",
                  description: "Download as PowerPoint, PDF, or share directly from our AI presentation maker.",
                  icon: Download,
                },
              ].map((step, index) => (
                <div key={index} className="text-center relative">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Use Cases Section */}
        <section className="px-4 py-20 md:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Who Is This{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  PPT Maker
                </span>{" "}
                For?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Perfect for professionals, students, and creators who want professional presentations fast.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: GraduationCap,
                  title: "Students",
                  description: "Writing school projects and academic presentations",
                  features: ["Research Presentations", "Project Reports", "Thesis Defense", "Study Materials"],
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  icon: Users,
                  title: "Teachers",
                  description: "Preparing engaging lessons and educational content",
                  features: ["Lecture Slides", "Course Materials", "Interactive Lessons", "Student Assessments"],
                  color: "from-emerald-500 to-teal-500",
                },
                {
                  icon: Briefcase,
                  title: "Consultants",
                  description: "Creating professional client proposals and reports",
                  features: ["Client Proposals", "Strategy Presentations", "Analysis Reports", "Recommendations"],
                  color: "from-purple-500 to-pink-500",
                },
                {
                  icon: TrendingUp,
                  title: "Startup Founders",
                  description: "Pitching ideas to investors and stakeholders",
                  features: ["Pitch Decks", "Investor Presentations", "Product Demos", "Business Plans"],
                  color: "from-orange-500 to-red-500",
                },
                {
                  icon: Palette,
                  title: "Non-Designers",
                  description: "Wanting professional presentations without design skills",
                  features: ["Professional Templates", "Auto-Formatting", "Design Suggestions", "Brand Consistency"],
                  color: "from-cyan-500 to-blue-500",
                },
                {
                  icon: Target,
                  title: "Business Professionals",
                  description: "Creating compelling business presentations quickly",
                  features: ["Sales Presentations", "Board Meetings", "Training Materials", "Progress Reports"],
                  color: "from-pink-500 to-purple-500",
                },
              ].map((useCase, index) => (
                <Card key={index} className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="text-center mb-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${useCase.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                    >
                      <useCase.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{useCase.title}</h3>
                    <p className="text-gray-600 mb-6">{useCase.description}</p>
                  </div>
                  <ul className="space-y-3">
                    {useCase.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="https://smallppt.com/ai-powerpoint" target="_blank" rel="noopener noreferrer nofollow">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
                  Start Creating Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-4 py-20 md:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions About{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  AI PPT Maker
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to know about our AI-powered presentation generator
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  category: "Getting Started",
                  questions: [
                    {
                      question: "What is AI PPT Maker and how does it work?",
                      answer:
                        "AI PPT Maker is an advanced AI presentation maker that uses artificial intelligence to automatically generate professional PowerPoint presentations. Simply input your topic, upload a document, or describe your content, and our AI powerpoint generator creates structured, visually appealing slides in seconds using natural language processing and computer vision technology.",
                    },
                    {
                      question: "How do I create presentations with this AI presentation maker?",
                      answer:
                        "Creating presentations with our AI PPT Maker is simple: 1) Upload your content (PDF, Word, image, video, or text), 2) Our AI powerpoint generator analyzes and structures your content, 3) Choose from AI-suggested templates, 4) Customize as needed, 5) Export as PowerPoint (.pptx) or PDF. The entire process takes under 2 minutes.",
                    },
                    {
                      question: "Is there a free AI PPT maker option available?",
                      answer:
                        "Yes! We offer a free AI PPT maker plan that includes 5 presentations per month, basic AI powerpoint generator features, standard templates, and PowerPoint export. No credit card required to start. Upgrade to Pro for unlimited presentations and advanced features.",
                    },
                  ],
                },
                {
                  category: "Features & Capabilities",
                  questions: [
                    {
                      question: "What file formats does this AI presentation maker support?",
                      answer:
                        "Our AI PPT Maker supports multiple input formats: PDF to PPT conversion, Word to PPT, images (JPG, PNG), videos (MP4, AVI), audio files, web URLs, and plain text. The AI powerpoint generator intelligently extracts and structures content from any format into professional slides.",
                    },
                    {
                      question: "Can I use AI PPT Maker for business presentations and pitch decks?",
                      answer:
                        "Absolutely! Our AI presentation maker is perfect for business presentations, pitch decks, sales presentations, board meetings, and corporate training materials. We offer specialized business templates and the AI understands professional presentation structure and formatting requirements.",
                    },
                    {
                      question: "Does the AI slide generator work in multiple languages?",
                      answer:
                        "Yes, our AI PPT Maker supports 100+ languages including English, Spanish, French, German, Chinese, Japanese, and more. The AI presentation maker automatically detects your content language and applies appropriate formatting, fonts, and cultural design preferences.",
                    },
                    {
                      question: "How many presentation templates are available?",
                      answer:
                        "Our AI powerpoint generator includes 1000+ professionally designed templates across categories: business presentations, educational slides, marketing materials, pitch decks, and creative designs. The AI automatically selects the most suitable template based on your content type and industry.",
                    },
                  ],
                },
                {
                  category: "Quality & Customization",
                  questions: [
                    {
                      question: "How professional are the presentations created by AI PPT Maker?",
                      answer:
                        "Our AI presentation maker creates designer-quality presentations with professional layouts, consistent formatting, appropriate color schemes, and proper visual hierarchy. The AI powerpoint generator follows presentation design best practices and produces slides comparable to those made by professional designers.",
                    },
                    {
                      question: "Can I customize presentations after AI generation?",
                      answer:
                        "Yes! After our AI PPT Maker generates your presentation, you have full editing control. Modify text, change colors, adjust layouts, add charts, insert images, and customize transitions. The AI slide generator provides a perfect starting point that you can tailor to your specific needs.",
                    },
                    {
                      question:
                        "What makes this AI powerpoint generator better than traditional presentation software?",
                      answer:
                        "Unlike traditional PowerPoint or Google Slides, our AI presentation maker eliminates hours of manual formatting and design work. The AI automatically creates professional layouts, suggests relevant visuals, maintains design consistency, and structures content logically - all in under 30 seconds.",
                    },
                  ],
                },
                {
                  category: "Use Cases & Industries",
                  questions: [
                    {
                      question: "Is AI PPT Maker suitable for educational presentations and academic use?",
                      answer:
                        "Perfect for education! Our AI presentation maker is ideal for teachers creating lecture slides, students preparing project presentations, researchers presenting findings, and academic institutions. The AI understands educational content structure and creates engaging, informative slides.",
                    },
                    {
                      question: "Can teams collaborate using this AI slide generator?",
                      answer:
                        "Yes, our Pro AI PPT Maker includes team collaboration features. Multiple team members can work on presentations simultaneously, share templates, maintain brand consistency, and manage presentation libraries. Perfect for marketing teams, consulting firms, and corporate departments.",
                    },
                    {
                      question: "How does AI PPT Maker help with sales presentations and marketing materials?",
                      answer:
                        "Our AI powerpoint generator excels at creating compelling sales presentations, product demos, marketing pitch decks, and promotional materials. The AI understands persuasive presentation structure, incorporates compelling visuals, and creates slides designed to engage and convert audiences.",
                    },
                  ],
                },
                {
                  category: "Technical & Pricing",
                  questions: [
                    {
                      question: "What's the difference between free and Pro AI presentation maker plans?",
                      answer:
                        "Free AI PPT Maker: 5 presentations/month, basic templates, standard AI features. Pro AI PPT Maker ($19/month): Unlimited presentations, premium templates, advanced AI powerpoint generator, team collaboration, priority support, and exclusive design features.",
                    },
                    {
                      question: "How fast is the AI slide generator compared to manual creation?",
                      answer:
                        "Our AI PPT Maker generates complete presentations in 30 seconds, compared to 2-4 hours for manual creation. The AI powerpoint generator is 10x faster than traditional methods while maintaining professional quality and design consistency.",
                    },
                    {
                      question: "Is my data secure when using this AI presentation maker?",
                      answer:
                        "Absolutely. We use enterprise-grade security with SSL encryption, secure data centers, and strict privacy policies. Your presentations and content are never shared or used for training. Our AI PPT Maker is trusted by Fortune 500 companies and educational institutions worldwide.",
                    },
                  ],
                },
              ].map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-100">
                    {category.category}
                  </h3>
                  <div className="space-y-6">
                    {category.questions.map((faq, index) => (
                      <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
                        <h4 className="text-lg font-semibold mb-3 text-gray-900 flex items-start">
                          <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                            Q
                          </span>
                          {faq.question}
                        </h4>
                        <p className="text-gray-600 leading-relaxed ml-9">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Help Section */}
            <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions About Our AI PPT Maker?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Our support team is here to help you get the most out of our AI presentation maker. Get personalized
                assistance with your specific presentation needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="https://smallppt.com/ai-powerpoint" target="_blank" rel="noopener noreferrer nofollow">
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-medium">
                    Contact Support
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-xl font-medium bg-transparent"
                >
                  View Tutorials
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Pain Points & Solutions Section - MOVED HERE */}
        <section className="px-4 py-16 md:px-6 lg:px-8 bg-white border-t border-gray-100">
          <div className="max-w-6xl mx-auto">
            {/* Problem Statement */}
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Tired of Spending Hours on Presentation Design?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Stop wasting time on formatting, design, and layout. Our AI PPT Maker solves your biggest presentation
                challenges.
              </p>
            </div>

            {/* Pain Points vs Solutions Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* Pain Points */}
              <div className="bg-red-50 rounded-2xl p-8 border border-red-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-xl">😤</span>
                  </div>
                  <h3 className="text-xl font-bold text-red-800">Common Frustrations</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Hours spent on slide formatting and design",
                    "Struggling with layout and visual consistency",
                    "Limited design skills holding you back",
                    "Tight deadlines with no time for perfection",
                    "Boring templates that look unprofessional",
                    "Converting documents manually slide by slide",
                  ].map((pain, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="text-red-500 font-bold mt-1">✗</span>
                      <span className="text-red-700">{pain}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solutions */}
              <div className="bg-green-50 rounded-2xl p-8 border border-green-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mr-4">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-green-800">AI PPT Maker Solutions</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Professional slides generated in 30 seconds",
                    "AI-powered design with perfect consistency",
                    "No design skills needed - AI does it all",
                    "Meet any deadline with instant generation",
                    "1000+ premium templates automatically applied",
                    "Smart conversion from any file format",
                  ].map((solution, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-green-700">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Key Selling Points */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              {[
                {
                  icon: "⚡",
                  title: "Lightning Fast",
                  description: "30-second generation",
                  highlight: "10x Faster",
                },
                {
                  icon: "🎨",
                  title: "Professional Quality",
                  description: "Designer-level results",
                  highlight: "No Skills Needed",
                },
                {
                  icon: "🌍",
                  title: "Global Ready",
                  description: "100+ languages supported",
                  highlight: "Worldwide Use",
                },
                {
                  icon: "💰",
                  title: "Cost Effective",
                  description: "Replace expensive designers",
                  highlight: "Save Thousands",
                },
              ].map((point, index) => (
                <div
                  key={index}
                  className="text-center bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100 hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-3xl mb-3">{point.icon}</div>
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs px-3 py-1 rounded-full font-semibold mb-3 inline-block">
                    {point.highlight}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{point.title}</h4>
                  <p className="text-sm text-gray-600">{point.description}</p>
                </div>
              ))}
            </div>

            {/* Social Proof Bar */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white text-center">
              <div className="flex flex-wrap justify-center items-center gap-8 text-sm">
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5" />
                  <span className="font-semibold">2M+ Active Users</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-300 fill-current" />
                  <span className="font-semibold">4.8/5 Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5" />
                  <span className="font-semibold">Industry Leader</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5" />
                  <span className="font-semibold">Enterprise Trusted</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="px-4 py-20 md:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Presentations with AI PPT Maker?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join millions of professionals who trust our AI presentation maker to create stunning presentations in
              seconds
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://smallppt.com/ai-powerpoint" target="_blank" rel="noopener noreferrer nofollow">
                <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 min-w-[200px]">
                  Start Creating Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg rounded-xl font-semibold transition-all duration-200 min-w-[200px] bg-transparent"
                onClick={() => document.getElementById("demo-video")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white px-4 py-16 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Wand2 className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  AIPPTMaker
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Create stunning presentations with the power of AI. The most advanced AI PPT Maker for professionals
                worldwide.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-lg">Product</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    AI PPT Maker
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Templates
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-lg">Support</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Tutorials
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-lg">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AIPPTMaker. All rights reserved. Powered by advanced AI presentation technology.</p>
          </div>
        </div>
      </footer>

      {/* Organization Schema */}
      <script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "AIPPTMaker",
  "url": "https://aipptmaker.pro",
  "logo": "https://aipptmaker.pro/og-image.png",
  "description": "AI-powered presentation generator that creates professional PowerPoint slides instantly",
  "sameAs": [
    "https://twitter.com/aipptmaker"
  ]
}
`}</script>

      {/* SoftwareApplication Schema */}
      <script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "AI PPT Maker",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web Browser",
  "description": "Create stunning presentations instantly with our AI PPT Maker. Transform your ideas into professional PowerPoint slides in seconds.",
  "url": "https://aipptmaker.pro",
  "author": {
    "@type": "Organization",
    "name": "AIPPTMaker"
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "description": "Free plan available with premium features"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "1250"
  }
}
`}</script>

      {/* BreadcrumbList Schema */}
      <script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://aipptmaker.pro"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "AI PPT Maker",
      "item": "https://aipptmaker.pro"
    }
  ]
}
`}</script>

      {/* FAQ Schema */}
      <script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What file formats does AI PPT Maker support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AI PPT Maker supports PDF, Word documents, images (JPG, PNG), videos (MP4, AVI), audio files, web URLs, and plain text. Our AI powerpoint generator intelligently extracts and structures content from any format."
      }
    },
    {
      "@type": "Question",
      "name": "Is AI PPT Maker free to use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, AI PPT Maker offers a free plan that allows you to generate 5 presentations per month with basic features and standard templates. Premium plans are available for advanced features."
      }
    },
    {
      "@type": "Question",
      "name": "How do I create presentations with AI PPT Maker?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Simply upload your content (PDF, Word, images, videos, or text), and our AI presentation maker will automatically analyze and generate structured, professional slides. The process takes less than 2 minutes."
      }
    },
    {
      "@type": "Question",
      "name": "Can I customize presentations after AI generation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! After our AI PPT Maker generates your presentation, you have full editing control to modify text, change colors, adjust layouts, add charts, insert images, and customize transitions."
      }
    }
  ]
}
`}</script>
    </div>
  )
}
