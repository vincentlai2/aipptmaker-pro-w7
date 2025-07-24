// UI风格分析和建议

interface UIStyleStrategy {
  styleDirection: string
  reasoning: string[]
  keyElements: string[]
  targetAudience: string[]
}

const uiStyleOptions = {
  modernMinimal: {
    styleDirection: "现代简约 + 科技感",
    reasoning: ["符合国际用户审美习惯", "突出AI技术的先进性", "减少认知负担，提高转化率", "易于维护和扩展"],
    keyElements: ["大量留白空间", "简洁的几何图形", "渐变色彩点缀", "清晰的信息层次"],
    targetAudience: ["商务专业人士", "追求效率的用户", "国际化用户群体"],
  },

  techProfessional: {
    styleDirection: "科技专业 + 商务风格",
    reasoning: ["建立专业可信度", "吸引B2B用户", "体现产品的专业性", "符合企业级工具定位"],
    keyElements: ["深色主题选项", "数据可视化元素", "专业图标系统", "企业级配色方案"],
    targetAudience: ["企业用户", "IT专业人士", "高端商务用户"],
  },

  friendlyAccessible: {
    styleDirection: "友好易用 + 教育风格",
    reasoning: ["降低使用门槛", "吸引教育用户", "体现产品易用性", "增加用户亲和力"],
    keyElements: ["温暖的色彩搭配", "友好的插图风格", "清晰的引导元素", "教育场景化设计"],
    targetAudience: ["学生群体", "教师用户", "初学者"],
  },
}

// 推荐方案：现代简约 + 科技感
const recommendedStyle = {
  name: "Modern Tech Minimal",
  description: "现代科技简约风格 - 平衡专业性和易用性",

  colorSystem: {
    primary: {
      blue: "#2563EB", // 专业蓝 - 主品牌色
      purple: "#7C3AED", // 科技紫 - AI特色
      gradient: "linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)",
    },
    secondary: {
      cyan: "#0891B2", // 清新青 - 活力色
      emerald: "#059669", // 成功绿 - 正向反馈
      orange: "#EA580C", // 警示橙 - 重点突出
    },
    neutral: {
      gray50: "#F9FAFB",
      gray100: "#F3F4F6",
      gray200: "#E5E7EB",
      gray600: "#4B5563",
      gray900: "#111827",
    },
  },

  typography: {
    fontFamily: {
      primary: "Inter, system-ui, sans-serif", // 现代无衬线
      secondary: "JetBrains Mono, monospace", // 代码/技术感
    },
    scale: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "4xl": "2.25rem",
      "6xl": "3.75rem",
    },
  },

  components: {
    buttons: {
      primary: "渐变背景 + 白色文字 + 微妙阴影",
      secondary: "透明背景 + 彩色边框 + 悬停填充",
      ghost: "透明背景 + 彩色文字 + 悬停背景",
    },
    cards: {
      style: "白色背景 + 细边框 + 柔和阴影",
      hover: "轻微上浮 + 阴影加深",
      radius: "rounded-xl (12px)",
    },
    inputs: {
      style: "简洁边框 + 聚焦时彩色边框",
      background: "白色/浅灰背景",
      states: "清晰的聚焦和错误状态",
    },
  },

  visualElements: {
    icons: {
      style: "Lucide React - 简洁线性图标",
      treatment: "渐变色填充 + 圆形背景",
      sizes: "16px, 24px, 32px, 48px",
    },
    illustrations: {
      style: "现代扁平插图 + 等距视角",
      colors: "品牌色系 + 柔和渐变",
      theme: "AI科技 + 商务场景",
    },
    animations: {
      principle: "微妙而有意义的动效",
      duration: "200-300ms 快速响应",
      easing: "ease-out 自然缓动",
    },
  },
}

export { uiStyleOptions, recommendedStyle }
