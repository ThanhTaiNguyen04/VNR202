"use client"

import { useEffect, useRef, useState } from "react"

const gdpData = [
  { year: "1980", value: 35, label: "$35 triệu" },
  { year: "1990", value: 8, label: "$8 triệu" },
  { year: "2000", value: 39.5, label: "$39.5 tỷ" },
  { year: "2010", value: 143.2, label: "$143.2 tỷ" },
  { year: "2020", value: 346, label: "$346 tỷ" },
  { year: "2024", value: 459, label: "$459 tỷ" },
]

// Normalize values for chart display (logarithmic scale for better visualization)
const maxValue = 459
const getBarHeight = (value: number) => {
  // Using a modified scale to show growth better
  if (value < 100) return Math.max(5, (value / maxValue) * 100 + 10)
  return (value / maxValue) * 100
}

export default function EconomicGrowthSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="kinh-te" className="w-full py-16 md:py-24">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-4 mb-16">
          <div className="px-4 py-2 bg-[#DA251D]/5 rounded-full">
            <span className="text-[#DA251D] text-sm font-semibold">Thành tựu kinh tế</span>
          </div>
          <h2 className="text-center text-[#1a1a1a] text-3xl sm:text-4xl md:text-5xl font-serif">
            Tăng trưởng GDP ấn tượng
          </h2>
          <p className="max-w-[600px] text-center text-[#4a4a4a] text-base md:text-lg leading-relaxed">
            32 năm tăng trưởng GDP liên tục, nền kinh tế đã phát triển mạnh và mở rộng hơn 25 lần
          </p>
        </div>

        {/* GDP Chart */}
        <div className="w-full bg-white rounded-3xl p-6 md:p-10 shadow-[0px_4px_32px_rgba(0,0,0,0.06)] border border-[rgba(0,0,0,0.04)]">
          <div className="flex flex-col gap-8">
            {/* Chart Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-[#1a1a1a] text-xl font-semibold font-sans">GDP Việt Nam qua các năm</h3>
                <p className="text-[#6a6a6a] text-sm font-sans">Nguồn: countryeconomy.com/gdp/vietnam</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#DA251D] to-[#FF6B6B]"></div>
                <span className="text-[#4a4a4a] text-sm font-medium">Tổng sản phẩm quốc nội (GDP)</span>
              </div>
            </div>

            {/* Bar Chart */}
            <div className="flex flex-col gap-2">
              {/* Bars row */}
              <div className="flex items-end gap-2 md:gap-4 h-[220px]">
                {gdpData.map((item, index) => (
                  <div key={item.year} className="flex-1 flex flex-col items-center justify-end gap-1">
                    {/* Value Label */}
                    <div
                      className={`text-[#DA251D] text-xs font-bold transition-all duration-700 text-center leading-tight ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      {item.label}
                    </div>
                    {/* Bar */}
                    <div
                      className="w-full max-w-[60px] md:max-w-[80px] bg-gradient-to-t from-[#DA251D] to-[#FF6B6B] rounded-t-lg transition-all duration-1000 ease-out relative overflow-hidden"
                      style={{
                        height: isVisible ? `${getBarHeight(item.value) * 1.9}px` : '0',
                        transitionDelay: `${index * 100}ms`
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                    </div>
                  </div>
                ))}
              </div>
              {/* X-axis labels */}
              <div className="flex gap-2 md:gap-4">
                {gdpData.map((item) => (
                  <div key={item.year} className="flex-1 text-center">
                    <span className="text-[#4a4a4a] text-xs md:text-sm font-medium">{item.year}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Chart Footer */}
            <div className="pt-6 border-t border-[rgba(0,0,0,0.06)]">
              <p className="text-[#6a6a6a] text-sm leading-relaxed">
                Từ cuối thập niên 1980, Việt Nam chỉ là một nền kinh tế nhỏ. Sau quá trình Đổi mới, quy mô kinh tế 
                tăng trưởng nhanh và liên tục, trở thành một trong những nền kinh tế tăng trưởng nhanh nhất thế giới.
              </p>
            </div>
          </div>
        </div>

        {/* Key Factors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="p-6 bg-white rounded-2xl border border-[rgba(0,0,0,0.04)] shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-[#DA251D]/10 flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#DA251D]">
                <path d="M13 10V3L4 14H11V21L20 10H13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h4 className="text-[#1a1a1a] text-lg font-semibold mb-2">Cải cách kinh tế thị trường</h4>
            <p className="text-[#6a6a6a] text-sm leading-relaxed">Chuyển đổi từ nền kinh tế kế hoạch hóa tập trung sang kinh tế thị trường định hướng xã hội chủ nghĩa.</p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-[rgba(0,0,0,0.04)] shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-[#FFCD00]/10 flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#DA251D]">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h4 className="text-[#1a1a1a] text-lg font-semibold mb-2">Thu hút đầu tư nước ngoài</h4>
            <p className="text-[#6a6a6a] text-sm leading-relaxed">Mở cửa nền kinh tế, thu hút vốn FDI từ các tập đoàn đa quốc gia như Samsung, Intel.</p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-[rgba(0,0,0,0.04)] shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-[#DA251D]/10 flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#DA251D]">
                <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M3.6 9H20.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M3.6 15H20.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M12 3C14.5 5.5 16 8.5 16 12C16 15.5 14.5 18.5 12 21" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 3C9.5 5.5 8 8.5 8 12C8 15.5 9.5 18.5 12 21" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h4 className="text-[#1a1a1a] text-lg font-semibold mb-2">Mở rộng thương mại quốc tế</h4>
            <p className="text-[#6a6a6a] text-sm leading-relaxed">Tham gia WTO, ký kết nhiều FTA, trở thành trung tâm sản xuất trong chuỗi cung ứng toàn cầu.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
