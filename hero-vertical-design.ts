// Hero区域上下布局设计方案

const heroVerticalDesign = {
  structure: {
    section1: {
      element: "Main Title",
      content: "AI PPT Maker: Powered Presentation & PowerPoint Generator",
      styling: "text-5xl md:text-7xl font-bold text-center",
      keywords: ["AI PPT Maker", "Powered Presentation", "PowerPoint Generator"],
    },
    section2: {
      element: "Subtitle",
      content: "Transform Your Ideas into Professional Presentations in Seconds",
      styling: "text-xl md:text-2xl text-gray-600 text-center mt-4",
      keywords: ["Professional Presentations"],
    },
    section3: {
      element: "Description",
      content: `Create stunning presentations with our AI-powered presentation maker. 
      From PDF to PowerPoint conversion to custom slide generation, our intelligent 
      AI PPT Maker handles everything. Perfect for students, teachers, and business professionals.`,
      styling: "text-lg text-gray-600 text-center max-w-4xl mx-auto mt-6",
      keywords: ["AI-powered presentation maker", "PDF to PowerPoint", "AI PPT Maker"],
    },
    section4: {
      element: "CTA Buttons",
      content: ["Start Creating Free", "Watch Demo"],
      styling: "flex gap-4 justify-center mt-8",
      keywords: ["Start Creating"],
    },
    section5: {
      element: "Hero Visual",
      content: "Large hero image/illustration showing AI creating presentations",
      styling: "mt-12 max-w-5xl mx-auto",
      altText: "AI PPT Maker creating professional PowerPoint presentations automatically",
    },
    section6: {
      element: "Feature Badges",
      content: ["No Credit Card Required", "2M+ Users", "4.8★ Rating"],
      styling: "flex justify-center gap-8 mt-8 text-sm text-gray-500",
      keywords: ["Users", "Rating"],
    },
  },

  visualHierarchy: {
    level1: "Main Title - 最大字体，最强对比",
    level2: "CTA Buttons - 鲜明色彩，突出位置",
    level3: "Hero Visual - 大尺寸，视觉冲击",
    level4: "Subtitle & Description - 支撑信息",
    level5: "Feature Badges - 信任指标",
  },

  responsiveBreakpoints: {
    mobile: {
      title: "text-4xl",
      subtitle: "text-lg",
      description: "text-base px-4",
      buttons: "flex-col gap-3",
      visual: "mt-8",
    },
    tablet: {
      title: "text-5xl",
      subtitle: "text-xl",
      description: "text-lg px-8",
      buttons: "flex-row gap-4",
      visual: "mt-10",
    },
    desktop: {
      title: "text-7xl",
      subtitle: "text-2xl",
      description: "text-lg",
      buttons: "flex-row gap-6",
      visual: "mt-12",
    },
  },
}

export { heroVerticalDesign }
