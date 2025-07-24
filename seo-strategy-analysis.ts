// SEO关键词策略分析和建议

interface KeywordStrategy {
  primary: string
  variants: string[]
  secondary: string[]
  longTail: string[]
  lsi: string[]
  targetDensity: number
}

const keywordStrategy: KeywordStrategy = {
  primary: "AI PPT Maker",
  variants: [
    "ai presentation maker",
    "ai powerpoint generator",
    "slider maker",
    "AI slide generator",
    "presentation maker AI",
  ],
  secondary: [
    "online presentation tool",
    "automatic slide creator",
    "smart presentation builder",
    "AI-powered slides",
    "intelligent presentation generator",
  ],
  longTail: [
    "best AI PPT maker for students",
    "free AI PPT maker online",
    "AI PPT maker with templates",
    "how to create presentations with AI PPT maker",
    "AI PPT maker for business presentations",
    "professional AI presentation maker",
    "AI PPT maker that converts PDF to slides",
    "collaborative AI PPT maker for teams",
    "AI PPT maker with custom templates",
    "fast AI presentation generator online",
  ],
  lsi: [
    "presentation design",
    "slide templates",
    "PowerPoint alternative",
    "presentation software",
    "slide deck creation",
    "business presentations",
    "educational slides",
    "pitch deck maker",
    "presentation automation",
    "slide formatting",
    "presentation themes",
    "visual storytelling",
  ],
  targetDensity: 3.5,
}

// 当前页面关键词密度分析
function analyzeCurrentDensity() {
  const suggestions = {
    hero: {
      current: "AI PPT Maker appears 2 times",
      target: "Should appear 4-5 times naturally",
      improvements: [
        "Add 'AI PPT Maker' in subtitle",
        "Include variants in description",
        "Use long-tail keywords in CTA",
      ],
    },
    templates: {
      current: "Templates section missing",
      target: "New dedicated section needed",
      improvements: ["Create template showcase", "Use 'AI PPT Maker templates'", "Include template categories"],
    },
    overall: {
      estimatedDensity: "1.8%",
      targetDensity: "3.5%",
      wordsToAdd: "Need ~15 more keyword mentions",
    },
  }

  return suggestions
}

export { keywordStrategy, analyzeCurrentDensity }
