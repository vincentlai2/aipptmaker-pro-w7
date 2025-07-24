// Hero区域布局分析 - 上下布局 vs 左右布局

interface LayoutAnalysis {
  layoutType: string
  advantages: string[]
  disadvantages: string[]
  suitability: string[]
}

const layoutComparison = {
  verticalLayout: {
    layoutType: "上下布局 (Top-Down)",
    advantages: [
      "视觉冲击力更强 - 用户注意力集中在中心",
      "移动端适配更自然 - 无需复杂的响应式调整",
      "文字内容更突出 - 居中展示更有权威感",
      "图片展示空间更大 - 可以使用更宽的视觉元素",
      "符合用户阅读习惯 - 从上到下的自然流程",
      "CTA按钮更突出 - 位于视觉焦点区域",
    ],
    disadvantages: ["页面高度增加 - 需要滚动查看更多内容", "桌面端空间利用率相对较低"],
    suitability: [
      "移动端优先设计",
      "注重转化率的产品页面",
      "需要强调品牌和产品价值的场景",
      "英文站点 - 文字内容相对较长",
    ],
  },

  horizontalLayout: {
    layoutType: "左右布局 (Side-by-Side)",
    advantages: ["桌面端空间利用率高", "文字和图片并行展示", "页面高度相对较低"],
    disadvantages: [
      "移动端适配复杂 - 需要堆叠重排",
      "注意力分散 - 文字和图片竞争焦点",
      "响应式断点处理复杂",
      "英文文字较长时布局紧张",
    ],
    suitability: ["桌面端为主的B2B产品", "内容相对简洁的场景"],
  },
}

// 英文站点特殊考虑
const englishSiteConsiderations = {
  textLength: {
    issue: "英文文字通常比中文长20-30%",
    solution: "上下布局给标题和描述更多展示空间",
  },
  readingPattern: {
    issue: "英文用户习惯F型阅读模式",
    solution: "上下布局符合从上到下的视觉流",
  },
  culturalPreference: {
    issue: "欧美用户偏好简洁直接的信息呈现",
    solution: "居中的上下布局更加简洁有力",
  },
}

export { layoutComparison, englishSiteConsiderations }
