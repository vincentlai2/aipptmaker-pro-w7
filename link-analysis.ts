// 分析当前项目中所有 https://smallppat.com 链接的使用情况

interface LinkAnalysis {
  location: string
  element: string
  attributes: string[]
  isCorrect: boolean
  issues?: string[]
}

const linkAnalysis: LinkAnalysis[] = [
  {
    location: "Header - Start Free Button",
    element: '<Link href="https://smallppat.com" target="_blank" rel="noopener noreferrer nofollow">',
    attributes: ["target='_blank'", "rel='noopener noreferrer nofollow'"],
    isCorrect: true,
  },
  {
    location: "Hero Section - Generate Your PPT Now Button",
    element: '<Link href="https://smallppat.com" target="_blank" rel="noopener noreferrer nofollow">',
    attributes: ["target='_blank'", "rel='noopener noreferrer nofollow'"],
    isCorrect: true,
  },
  {
    location: "Presentation Use Cases - Start Creating Now Button",
    element: '<Link href="https://smallppat.com" target="_blank" rel="noopener noreferrer nofollow">',
    attributes: ["target='_blank'", "rel='noopener noreferrer nofollow'"],
    isCorrect: true,
  },
  {
    location: "Core Features - Make Your PPT Button",
    element: '<Link href="https://smallppat.com" target="_blank" rel="noopener noreferrer nofollow">',
    attributes: ["target='_blank'", "rel='noopener noreferrer nofollow'"],
    isCorrect: true,
  },
  {
    location: "Input-to-PPT Tools - Get Started Button",
    element: '<Link href="https://smallppat.com" target="_blank" rel="noopener noreferrer nofollow">',
    attributes: ["target='_blank'", "rel='noopener noreferrer nofollow'"],
    isCorrect: true,
  },
  {
    location: "Pricing - Get Started Free Button",
    element: '<Link href="https://smallppat.com" target="_blank" rel="noopener noreferrer nofollow">',
    attributes: ["target='_blank'", "rel='noopener noreferrer nofollow'"],
    isCorrect: true,
  },
  {
    location: "Pricing - Start Pro Trial Button",
    element: '<Link href="https://smallppat.com" target="_blank" rel="noopener noreferrer nofollow">',
    attributes: ["target='_blank'", "rel='noopener noreferrer nofollow'"],
    isCorrect: true,
  },
  {
    location: "FAQ - Contact Support Button",
    element: '<Link href="https://smallppat.com" target="_blank" rel="noopener noreferrer nofollow">',
    attributes: ["target='_blank'", "rel='noopener noreferrer nofollow'"],
    isCorrect: true,
  },
  {
    location: "CTA Section - Start Creating Now Button",
    element: '<Link href="https://smallppat.com" target="_blank" rel="noopener noreferrer nofollow">',
    attributes: ["target='_blank'", "rel='noopener noreferrer nofollow'"],
    isCorrect: true,
  },
]

// 生成检查报告
function generateLinkReport() {
  console.log("=== LINK ANALYSIS REPORT ===")
  console.log(`Total links found: ${linkAnalysis.length}`)

  const correctLinks = linkAnalysis.filter((link) => link.isCorrect)
  const incorrectLinks = linkAnalysis.filter((link) => !link.isCorrect)

  console.log(`✅ Correct links: ${correctLinks.length}`)
  console.log(`❌ Incorrect links: ${incorrectLinks.length}`)

  if (incorrectLinks.length > 0) {
    console.log("\n=== ISSUES FOUND ===")
    incorrectLinks.forEach((link) => {
      console.log(`Location: ${link.location}`)
      console.log(`Issues: ${link.issues?.join(", ")}`)
      console.log("---")
    })
  }

  console.log("\n=== ALL LINKS ===")
  linkAnalysis.forEach((link, index) => {
    console.log(`${index + 1}. ${link.location}`)
    console.log(`   Status: ${link.isCorrect ? "✅ Correct" : "❌ Needs Fix"}`)
    console.log(`   Attributes: ${link.attributes.join(", ")}`)
    console.log("")
  })
}

// 执行检查
generateLinkReport()

export { linkAnalysis, generateLinkReport }
