// 视觉设计系统规划

const visualDesignSystem = {
  colorPalette: {
    primary: {
      blue: "#3B82F6", // 主品牌色
      purple: "#8B5CF6", // AI科技感
      orange: "#F97316", // 活力橙色
    },
    secondary: {
      cyan: "#06B6D4", // 清新感
      green: "#10B981", // 成功色
      gray: "#6B7280", // 中性色
    },
  },

  typography: {
    headings: {
      h1: "text-4xl md:text-6xl font-bold", // Hero标题
      h2: "text-3xl md:text-4xl font-bold", // 版块标题
      h3: "text-xl md:text-2xl font-semibold", // 子标题
    },
    body: {
      large: "text-lg md:text-xl", // 重要描述
      regular: "text-base", // 常规文本
      small: "text-sm", // 辅助信息
    },
  },

  visualElements: {
    icons: {
      style: "outline + filled combination",
      size: "w-8 h-8 to w-16 h-16",
      colors: "gradient backgrounds",
    },
    illustrations: {
      style: "modern flat design with gradients",
      theme: "AI + technology + professional",
      format: "SVG for scalability",
    },
    screenshots: {
      style: "rounded corners with shadows",
      quality: "high-resolution with compression",
      format: "WebP with PNG fallback",
    },
  },

  layoutPrinciples: {
    spacing: "consistent 8px grid system",
    containers: "max-width responsive containers",
    grids: "CSS Grid + Flexbox hybrid",
    animations: "subtle micro-interactions",
  },
}

export { visualDesignSystem }
