// 内容与视觉平衡策略

const contentVisualBalance = {
  textToVisualRatio: {
    hero: "40% text, 60% visual",
    features: "60% text, 40% visual",
    templates: "30% text, 70% visual",
    howItWorks: "50% text, 50% visual",
    testimonials: "70% text, 30% visual",
  },

  visualHierarchy: {
    level1: "Hero illustration + main CTA",
    level2: "Section headers + key feature icons",
    level3: "Template previews + process steps",
    level4: "Supporting graphics + decorative elements",
  },

  responsiveStrategy: {
    desktop: "side-by-side text and visuals",
    tablet: "stacked with maintained proportions",
    mobile: "vertical stack with optimized visuals",
  },

  seoVisualOptimization: {
    altTags: "descriptive with keywords naturally included",
    fileNaming: "keyword-rich but readable filenames",
    imageSize: "optimized for fast loading",
    structuredData: "image schema markup where applicable",
  },
}

export { contentVisualBalance }
