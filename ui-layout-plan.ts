// UI布局重新设计方案

const newLayoutStructure = {
  header: {
    logo: "AIPPTMaker",
    navigation: ["AI PPT Maker", "Templates", "Features", "Pricing", "Resources"],
    cta: "Start Free Trial",
  },

  sections: [
    {
      name: "Hero",
      layout: "centered-with-visual",
      components: ["title", "subtitle", "description", "cta-buttons", "feature-badges"],
    },
    {
      name: "Trust Indicators",
      layout: "horizontal-stats",
      components: ["user-count", "slides-generated", "rating", "company-logos"],
    },
    {
      name: "Templates Showcase",
      layout: "grid-gallery",
      components: ["category-tabs", "template-grid", "preview-modal"],
    },
    {
      name: "Core Features",
      layout: "feature-grid",
      components: ["feature-cards", "icons", "descriptions"],
    },
    {
      name: "Use Cases",
      layout: "tabbed-content",
      components: ["industry-tabs", "use-case-cards", "examples"],
    },
    {
      name: "How It Works",
      layout: "step-by-step",
      components: ["process-steps", "animations", "screenshots"],
    },
    {
      name: "AI Technology",
      layout: "split-content",
      components: ["tech-explanation", "ai-visualization"],
    },
    {
      name: "Comparison",
      layout: "comparison-table",
      components: ["feature-comparison", "checkmarks", "highlights"],
    },
    {
      name: "Success Stories",
      layout: "testimonial-carousel",
      components: ["customer-quotes", "avatars", "company-info"],
    },
    {
      name: "Pricing",
      layout: "pricing-cards",
      components: ["plan-cards", "feature-lists", "cta-buttons"],
    },
    {
      name: "FAQ",
      layout: "accordion",
      components: ["question-answers", "search-box", "categories"],
    },
  ],
}

export { newLayoutStructure }
