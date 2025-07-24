// 整体SEO内容策略规划

interface ContentStrategy {
  title: string
  wordCount: number
  sections: SectionPlan[]
  keywordDistribution: KeywordDistribution
}

interface SectionPlan {
  name: string
  wordCount: number
  keywords: string[]
  purpose: string
}

interface KeywordDistribution {
  primary: { keyword: string; count: number; density: string }
  variants: { keyword: string; count: number }[]
}

const contentStrategy: ContentStrategy = {
  title: "AI PPT Maker: Powered Presentation & PowerPoint Generator for Professionals",
  wordCount: 1500,
  sections: [
    {
      name: "Hero Section",
      wordCount: 120,
      keywords: ["AI PPT Maker", "powered presentation", "PowerPoint generator"],
      purpose: "主要转化区域，突出核心价值主张",
    },
    {
      name: "Statistics & Trust",
      wordCount: 80,
      keywords: ["AI presentation maker", "professional"],
      purpose: "建立信任度，展示用户数据",
    },
    {
      name: "Templates Gallery",
      wordCount: 150,
      keywords: ["AI PPT Maker templates", "presentation designs"],
      purpose: "展示模板库，提高关键词密度",
    },
    {
      name: "Features & Benefits",
      wordCount: 200,
      keywords: ["AI powerpoint generator", "slider maker", "presentation automation"],
      purpose: "详细功能介绍，LSI关键词布局",
    },
    {
      name: "Use Cases & Industries",
      wordCount: 180,
      keywords: ["business presentations", "educational slides", "pitch deck"],
      purpose: "长尾词布局，覆盖不同用户群体",
    },
    {
      name: "How It Works",
      wordCount: 160,
      keywords: ["AI PPT Maker process", "presentation creation"],
      purpose: "用户教育，降低使用门槛",
    },
    {
      name: "AI Technology Explanation",
      wordCount: 140,
      keywords: ["AI-powered", "machine learning", "intelligent design"],
      purpose: "技术优势说明，建立专业形象",
    },
    {
      name: "Comparison Table",
      wordCount: 120,
      keywords: ["vs traditional tools", "AI advantages"],
      purpose: "竞争优势展示",
    },
    {
      name: "Customer Success Stories",
      wordCount: 160,
      keywords: ["AI PPT Maker reviews", "user testimonials"],
      purpose: "社会证明，提高转化率",
    },
    {
      name: "Pricing & Plans",
      wordCount: 100,
      keywords: ["free AI PPT Maker", "premium features"],
      purpose: "价格透明化，促进转化",
    },
    {
      name: "FAQ Section",
      wordCount: 200,
      keywords: ["AI PPT Maker questions", "how to use"],
      purpose: "长尾词覆盖，解决用户疑虑",
    },
  ],
  keywordDistribution: {
    primary: { keyword: "AI PPT Maker", count: 28, density: "3.2%" },
    variants: [
      { keyword: "ai presentation maker", count: 12 },
      { keyword: "ai powerpoint generator", count: 8 },
      { keyword: "slider maker", count: 6 },
      { keyword: "powered presentation", count: 5 },
    ],
  },
}

export { contentStrategy }
