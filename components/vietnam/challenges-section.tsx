"use client"

import { useEffect, useRef, useState } from "react"

const challenges = [
  {
    title: "Năng suất lao động còn thấp",
    description: "Năng suất lao động của Việt Nam vẫn thấp hơn nhiều nước ASEAN do công nghệ sản xuất còn hạn chế và chất lượng lao động chưa đồng đều.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#F59E0B]">
        <path d="M12 8V12M12 16H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    source: "International Monetary Fund",
    color: "#F59E0B",
  },
  {
    title: "Phát triển chưa bền vững",
    description: "Vấn đề môi trường ngày càng nhức nhối: thực phẩm bẩn tràn lan, ô nhiễm không khí tại Hà Nội và TP.HCM với chỉ số bụi mịn luôn nằm trong top đầu thế giới.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#EF4444]">
        <path d="M12 9V11M12 15H12.01M5.07183 19H18.9282C20.4678 19 21.4301 17.3333 20.6603 16L13.7321 4C12.9623 2.66667 11.0377 2.66667 10.2679 4L3.33974 16C2.56994 17.3333 3.53223 19 5.07183 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    source: "Báo cáo môi trường",
    color: "#EF4444",
  },
  {
    title: "Nguy cơ bẫy thu nhập trung bình",
    description: "Khi thu nhập tăng lên, nhiều quốc gia gặp khó khăn trong việc chuyển sang nền kinh tế sáng tạo. Việt Nam cần đổi mới mạnh mẽ để vượt qua.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#8B5CF6]">
        <path d="M13 10V3L4 14H11V21L20 10H13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    source: "Nghiên cứu kinh tế",
    color: "#8B5CF6",
  },
]

const solutions = [
  {
    title: "Đổi mới công nghệ",
    description: "Liên tục đổi mới và phát triển công nghệ nhằm thích nghi và đuổi kịp nền kinh tế toàn cầu",
    icon: "💡",
  },
  {
    title: "Phát triển nguồn nhân lực",
    description: "Đầu tư mạnh vào giáo dục và đào tạo nguồn nhân lực chất lượng cao",
    icon: "🎓",
  },
  {
    title: "Kinh tế xanh",
    description: "Chuyển đổi sang mô hình phát triển bền vững, thân thiện với môi trường",
    icon: "🌱",
  },
  {
    title: "Chuyển đổi số",
    description: "Đẩy mạnh chuyển đổi số trong mọi lĩnh vực kinh tế - xã hội",
    icon: "🚀",
  },
]

export default function ChallengesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="thach-thuc" className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-4 mb-16">
          <div className="px-4 py-2 bg-[#F59E0B]/5 rounded-full">
            <span className="text-[#F59E0B] text-sm font-semibold">Thách thức & Giải pháp</span>
          </div>
          <h2 className="text-center text-[#1a1a1a] text-3xl sm:text-4xl md:text-5xl font-serif">
            Những thách thức phía trước
          </h2>
          <p className="max-w-[650px] text-center text-[#4a4a4a] text-base md:text-lg leading-relaxed">
            Dù đạt nhiều thành tựu, Việt Nam vẫn đối mặt với những thách thức cần giải quyết
          </p>
        </div>

        {/* Challenges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {challenges.map((challenge, index) => (
            <div 
              key={challenge.title}
              className={`p-6 bg-white rounded-2xl border-2 border-[rgba(0,0,0,0.04)] hover:border-opacity-50 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ 
                transitionDelay: `${index * 150}ms`,
                borderColor: isVisible ? `${challenge.color}20` : 'rgba(0,0,0,0.04)'
              }}
            >
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: `${challenge.color}10` }}
              >
                {challenge.icon}
              </div>
              <h3 className="text-[#1a1a1a] text-lg font-semibold mb-3">{challenge.title}</h3>
              <p className="text-[#6a6a6a] text-sm leading-relaxed mb-4">{challenge.description}</p>
              <p className="text-[#9a9a9a] text-xs italic">Nguồn: {challenge.source}</p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-16">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[rgba(0,0,0,0.1)]"></div>
          <div className="px-6 py-3 bg-[#22C55E]/5 rounded-full">
            <span className="text-[#22C55E] text-sm font-semibold">Hướng đi tương lai</span>
          </div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[rgba(0,0,0,0.1)]"></div>
        </div>

        {/* Solutions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {solutions.map((solution, index) => (
            <div 
              key={solution.title}
              className={`p-5 bg-gradient-to-br from-[#22C55E]/5 to-white rounded-2xl border border-[#22C55E]/10 hover:border-[#22C55E]/30 hover:shadow-lg transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              style={{ transitionDelay: `${index * 100 + 500}ms` }}
            >
              <div className="text-3xl mb-3">{solution.icon}</div>
              <h4 className="text-[#1a1a1a] text-base font-semibold mb-2">{solution.title}</h4>
              <p className="text-[#6a6a6a] text-sm leading-relaxed">{solution.description}</p>
            </div>
          ))}
        </div>

        {/* Summary Quote */}
        <div className="mt-16 p-8 md:p-12 bg-gradient-to-br from-[#DA251D]/5 via-white to-[#FFCD00]/5 rounded-3xl border border-[#DA251D]/10 text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#DA251D]/10 flex items-center justify-center">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-[#DA251D]">
              <path d="M9 12L11 14L15 10M12 3L13.9101 4.87147L16.5 4.20577L17.2961 6.75193L19.7942 7.70411L19.0615 10.2682L20.5622 12.5L19.0615 14.7318L19.7942 17.2959L17.2961 18.2481L16.5 20.7942L13.9101 20.1285L12 22L10.0899 20.1285L7.5 20.7942L6.70389 18.2481L4.2058 17.2959L4.93852 14.7318L3.43782 12.5L4.93852 10.2682L4.2058 7.70411L6.70389 6.75193L7.5 4.20577L10.0899 4.87147L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <p className="text-[#1a1a1a] text-xl md:text-2xl font-serif leading-relaxed max-w-[800px] mx-auto mb-6">
            Phát biểu của Tổng Bí thư phản ánh đúng xu hướng phát triển chung của đất nước, nhưng vẫn cần nhìn nhận những thách thức để tiếp tục thúc đẩy công cuộc Đổi mới.
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-[2px] bg-[#DA251D]"></div>
            <span className="text-[#6a6a6a] text-sm font-medium">Kết luận</span>
            <div className="w-12 h-[2px] bg-[#DA251D]"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
