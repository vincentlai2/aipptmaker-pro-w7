import Link from "next/link";
import { Wand2, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
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
  );
} 