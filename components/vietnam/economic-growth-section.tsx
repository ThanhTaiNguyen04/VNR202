"use client"

import { useEffect, useRef, useState } from "react"
import { useScrollReveal, useParallaxOffset } from "@/hooks/useScrollReveal"
import { useCountAnimation, useStaggeredAnimation } from "@/hooks/useAnimations"

const gdpData = [
  { year: "1980", value: 35, displayValue: 35, label: "$35 triệu", description: "Nền kinh tế khó khăn sau chiến tranh", isBillion: false },
  { year: "1990", value: 8, displayValue: 8, label: "$8 triệu", description: "Thời kỳ khủng hoảng kinh tế", isBillion: false },
  { year: "2000", value: 39.5, displayValue: 39.5, label: "$39.5 tỷ", description: "Khởi đầu Đổi Mới hiệu quả", isBillion: true },
  { year: "2010", value: 143.2, displayValue: 143.2, label: "$143.2 tỷ", description: "Tăng trưởng vững chắc", isBillion: true },
  { year: "2020", value: 346, displayValue: 346, label: "$346 tỷ", description: "Phát triển mạnh mẽ", isBillion: true },
  { year: "2024", value: 459, displayValue: 459, label: "$459 tỷ", description: "Đạt đỉnh cao mới", isBillion: true },
]

// Enhanced calculation for better visual impact
const maxValue = 459
const getBarHeight = (value: number) => {
  if (value < 100) return Math.max(8, (value / maxValue) * 100 + 15)
  return (value / maxValue) * 100
}

export default function EconomicGrowthSection() {
  const [sliderPos, setSliderPos] = useState(50)
  const [hoveredBar, setHoveredBar] = useState<number | null>(null)
  const isDragging = useRef(false)
  const compareRef = useRef<HTMLDivElement>(null)

  // Enhanced scroll reveal hooks
  const [sectionRef, sectionVisible] = useScrollReveal({
    threshold: 0.15,
    delay: 200
  })
  const [chartRef, chartVisible] = useScrollReveal({
    threshold: 0.3,
    delay: 400
  })
  const [comparisonRef, comparisonVisible] = useScrollReveal({
    threshold: 0.2,
    delay: 600
  })

  const parallaxOffset = useParallaxOffset(0.1)

  // Animation states
  const visibleBars = useStaggeredAnimation(gdpData, 150, chartVisible)

  // Count animations for each GDP value
  const gdp1980 = useCountAnimation(35, 1500, chartVisible)
  const gdp1990 = useCountAnimation(8, 1200, chartVisible)
  const gdp2000 = useCountAnimation(39.5, 2000, chartVisible)
  const gdp2010 = useCountAnimation(143.2, 2500, chartVisible)
  const gdp2020 = useCountAnimation(346, 2800, chartVisible)
  const gdp2024 = useCountAnimation(459, 3000, chartVisible)

  const animatedValues = [gdp1980, gdp1990, gdp2000, gdp2010, gdp2020, gdp2024]

  const handleMove = (clientX: number) => {
    if (!isDragging.current || !compareRef.current) return
    const rect = compareRef.current.getBoundingClientRect()
    const pos = Math.min(97, Math.max(3, ((clientX - rect.left) / rect.width) * 100))
    setSliderPos(pos)
  }

  // Format animated numbers
  const formatAnimatedValue = (animatedData: { count: number }, originalData: typeof gdpData[0]) => {
    if (originalData.isBillion) {
      return `$${animatedData.count.toFixed(1)} tỷ`
    } else {
      return `$${Math.floor(animatedData.count)} triệu`
    }
  }

  return (
    <section
      ref={sectionRef}
      id="kinh-te"
      className="w-full py-16 md:py-24 relative bg-white"
      style={{ transform: `translateY(${-parallaxOffset * 0.3}px)` }}
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-[#DA251D]/10 to-transparent rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-gradient-to-br from-[#FFCD00]/8 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-[1100px] mx-auto px-6 md:px-12 relative z-10">
        {/* Enhanced Section Header */}
        <div className={`flex flex-col items-center gap-4 mb-16 transition-all duration-1000 ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="px-4 py-2 bg-gradient-to-r from-[#DA251D]/5 via-[#DA251D]/10 to-[#DA251D]/5 rounded-full backdrop-blur-sm border border-[#DA251D]/20 hover:border-[#DA251D]/40 transition-all duration-300">
            <span className="text-[#DA251D] text-sm font-semibold bg-gradient-to-r from-[#DA251D] to-[#B91C1C] bg-clip-text text-transparent">Thành tựu kinh tế</span>
          </div>
          <h2 className="text-center text-[#1a1a1a] text-3xl sm:text-4xl md:text-5xl font-serif hover:scale-105 transition-transform duration-300">
            Tăng trưởng GDP ấn tượng
          </h2>
          <p className="max-w-[600px] text-center text-[#4a4a4a] text-base md:text-lg leading-relaxed">
            <span className="font-semibold text-[#DA251D]">32 năm</span> tăng trưởng GDP liên tục, nền kinh tế đã phát triển mạnh và mở rộng hơn <span className="font-semibold text-[#DA251D]">25 lần</span>
          </p>
        </div>

        {/* Enhanced GDP Chart */}
        <div
          ref={chartRef}
          className={`w-full bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-10 shadow-[0px_8px_48px_rgba(218,37,29,0.1)] border border-[rgba(218,37,29,0.1)] hover:shadow-[0px_12px_60px_rgba(218,37,29,0.15)] transition-all duration-700 ${chartVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        >
          <div className="flex flex-col gap-8">
            {/* Enhanced Chart Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-[#1a1a1a] text-xl font-semibold font-sans mb-1">GDP Việt Nam qua các năm</h3>
                <p className="text-[#6a6a6a] text-sm font-sans">Nguồn: <span className="text-[#DA251D] font-medium">countryeconomy.com/gdp/vietnam</span></p>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-[#DA251D]/5 to-[#FF6B6B]/5 rounded-full">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#DA251D] to-[#FF6B6B] animate-pulse"></div>
                <span className="text-[#4a4a4a] text-sm font-medium">Tổng sản phẩm quốc nội (GDP)</span>
              </div>
            </div>

            {/* Enhanced Bar Chart */}
            <div className="flex flex-col gap-2">
              {/* Bars row with enhanced interactivity */}
              <div className="flex items-end gap-2 md:gap-4 h-[240px]">
                {gdpData.map((item, index) => (
                  <div
                    key={item.year}
                    className="flex-1 flex flex-col items-center justify-end gap-1 group cursor-pointer"
                    onMouseEnter={() => setHoveredBar(index)}
                    onMouseLeave={() => setHoveredBar(null)}
                  >
                    {/* Enhanced Value Label with counting animation */}
                    <div
                      className={`text-[#DA251D] text-xs font-bold transition-all duration-700 text-center leading-tight transform relative ${
                        visibleBars.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      } ${hoveredBar === index ? 'scale-110 text-[#B91C1C]' : ''}`}
                      style={{ transitionDelay: `${600 + index * 100}ms` }}
                    >
                      {chartVisible ? formatAnimatedValue(animatedValues[index], item) : item.label}
                      {hoveredBar === index && (
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-[#1a1a1a] text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap z-10 animate-fadeIn">
                          {item.description}
                        </div>
                      )}
                    </div>
                    {/* Enhanced Bar with hover effects */}
                    <div
                      className={`w-full max-w-[60px] md:max-w-[80px] bg-gradient-to-t from-[#DA251D] via-[#FF6B6B] to-[#FF8A8A] rounded-t-lg transition-all duration-1000 ease-out relative overflow-hidden group-hover:shadow-lg ${
                        hoveredBar === index ? 'scale-105' : ''
                      }`}
                      style={{
                        height: chartVisible ? `${getBarHeight(item.value) * 2}px` : '0',
                        transitionDelay: `${400 + index * 150}ms`
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/10"></div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Enhanced X-axis labels */}
              <div className="flex gap-2 md:gap-4">
                {gdpData.map((item, index) => (
                  <div key={item.year} className="flex-1 text-center">
                    <span className={`text-[#4a4a4a] text-xs md:text-sm font-medium transition-all duration-500 ${hoveredBar === index ? 'text-[#DA251D] font-semibold' : ''}`}>{item.year}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Chart Footer */}
            <div className="pt-6 border-t border-gradient-to-r from-transparent via-[rgba(218,37,29,0.1)] to-transparent">
              <p className="text-[#6a6a6a] text-sm leading-relaxed">
                Từ cuối thập niên 1980, Việt Nam chỉ là một <span className="text-[#DA251D] font-medium">nền kinh tế nhỏ</span>. Sau quá trình Đổi mới, quy mô kinh tế
                tăng trưởng nhanh và liên tục, trở thành một trong những <span className="text-[#DA251D] font-medium">nền kinh tế tăng trưởng nhanh nhất thế giới</span>.
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced Before / After Comparison Slider */}
        <div
          ref={comparisonRef}
          className={`mt-12 transition-all duration-1000 ${comparisonVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-[#1a1a1a] text-base font-semibold flex items-center gap-2">
              <span className="w-2 h-2 bg-gradient-to-r from-[#DA251D] to-[#FF6B6B] rounded-full"></span>
              Hành trình chuyển mình
            </h3>
            <span className="text-[#6a6a6a] text-xs bg-gradient-to-r from-[#DA251D]/5 to-transparent px-3 py-1 rounded-full">← Kéo để so sánh →</span>
          </div>
          <div
            ref={compareRef}
            className="relative w-full h-[360px] md:h-[500px] rounded-3xl overflow-hidden cursor-col-resize select-none group hover:shadow-2xl transition-shadow duration-500"
            onMouseDown={() => { isDragging.current = true }}
            onMouseUp={() => { isDragging.current = false }}
            onMouseLeave={() => { isDragging.current = false }}
            onMouseMove={(e) => handleMove(e.clientX)}
            onTouchStart={() => { isDragging.current = true }}
            onTouchEnd={() => { isDragging.current = false }}
            onTouchMove={(e) => handleMove(e.touches[0].clientX)}
          >
            {/* Enhanced modern image (background) */}
            <img
              src="/vietnam/kinh-te-nay.webp"
              alt="Kinh tế Việt Nam hiện đại"
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
            />

            {/* Enhanced historical image (clipped from left) */}
            <img
              src="/vietnam/kinh-te-xua.jpg"
              alt="Kinh tế Việt Nam xưa"
              className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-300"
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            />

            {/* Enhanced divider line + handle */}
            <div
              className="absolute top-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-white to-transparent shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-all duration-200"
              style={{ left: `${sliderPos}%`, filter: isDragging.current ? 'drop-shadow(0 0 10px rgba(218,37,29,0.8))' : '' }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-2xl flex items-center justify-center gap-0.5 hover:scale-110 transition-transform duration-200 border-2 border-[#DA251D]/20">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="transform -translate-x-0.5">
                  <path d="M15 18L9 12L15 6" stroke="#DA251D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="transform translate-x-0.5">
                  <path d="M9 18L15 12L9 6" stroke="#DA251D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Enhanced labels with better styling */}
            <div className="absolute top-4 left-4 px-4 py-2 bg-black/70 backdrop-blur-md rounded-full border border-white/10">
              <span className="text-white text-xs font-semibold">Trước Đổi Mới</span>
            </div>

            <div className="absolute top-4 right-4 px-4 py-2 bg-gradient-to-r from-[#DA251D]/90 to-[#B91C1C]/90 backdrop-blur-md rounded-full">
              <span className="text-white text-xs font-semibold">Việt Nam ngày nay</span>
            </div>
          </div>
        </div>

        {/* Enhanced Key Factors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            {
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#DA251D]">
                  <path d="M13 10V3L4 14H11V21L20 10H13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ),
              title: "Cải cách kinh tế thị trường",
              description: "Chuyển đổi từ nền kinh tế kế hoạch hóa tập trung sang kinh tế thị trường định hướng xã hội chủ nghĩa.",
              bgColor: "bg-[#DA251D]/10",
              delay: "200ms"
            },
            {
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#DA251D]">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ),
              title: "Thu hút đầu tư nước ngoài",
              description: "Mở cửa nền kinh tế, thu hút vốn FDI từ các tập đoàn đa quốc gia như Samsung, Intel.",
              bgColor: "bg-[#FFCD00]/10",
              delay: "400ms"
            },
            {
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#DA251D]">
                  <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M3.6 9H20.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M3.6 15H20.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M12 3C14.5 5.5 16 8.5 16 12C16 15.5 14.5 18.5 12 21" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 3C9.5 5.5 8 8.5 8 12C8 15.5 9.5 18.5 12 21" stroke="currentColor" strokeWidth="2"/>
                </svg>
              ),
              title: "Mở rộng thương mại quốc tế",
              description: "Tham gia WTO, ký kết nhiều FTA, trở thành trung tâm sản xuất trong chuỗi cung ứng toàn cầu.",
              bgColor: "bg-[#DA251D]/10",
              delay: "600ms"
            },
          ].map((factor, index) => (
            <div
              key={index}
              className={`p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-[rgba(218,37,29,0.1)] shadow-sm hover:shadow-lg hover:scale-105 hover:border-[#DA251D]/30 transition-all duration-500 group cursor-pointer ${
                comparisonVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: factor.delay }}
            >
              <div className={`w-12 h-12 rounded-xl ${factor.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {factor.icon}
              </div>
              <h4 className="text-[#1a1a1a] text-lg font-semibold mb-2 group-hover:text-[#DA251D] transition-colors">{factor.title}</h4>
              <p className="text-[#6a6a6a] text-sm leading-relaxed group-hover:text-[#4a4a4a] transition-colors">{factor.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
