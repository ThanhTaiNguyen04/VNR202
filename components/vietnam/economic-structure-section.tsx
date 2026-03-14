"use client"

import { useEffect, useRef, useState } from "react"

const structureData = {
  before: [
    { name: "Nông - Lâm - Ngư nghiệp", value: 40.2, color: "#22C55E" },
    { name: "Công nghiệp - Xây dựng", value: 27.4, color: "#3B82F6" },
    { name: "Dịch vụ", value: 32.4, color: "#F59E0B" },
  ],
  after: [
    { name: "Nông - Lâm - Ngư nghiệp", value: 22.02, color: "#22C55E" },
    { name: "Công nghiệp - Xây dựng", value: 40.79, color: "#3B82F6" },
    { name: "Dịch vụ", value: 37.19, color: "#F59E0B" },
  ],
}

export default function EconomicStructureSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState<"before" | "after">("after")
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

  const currentData = structureData[activeTab]

  return (
    <section ref={sectionRef} className="w-full py-16 md:py-24 bg-gradient-to-b from-[#FAFAF8] to-white border-t border-[rgba(0,0,0,0.04)]">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-4 mb-16">
          <div className="px-4 py-2 bg-[#3B82F6]/5 rounded-full">
            <span className="text-[#3B82F6] text-sm font-semibold">Chuyển dịch cơ cấu</span>
          </div>
          <h2 className="text-center text-[#1a1a1a] text-3xl sm:text-4xl md:text-5xl font-serif">
            Từ nông nghiệp sang công nghiệp
          </h2>
          <p className="max-w-[650px] text-center text-[#4a4a4a] text-base md:text-lg leading-relaxed">
            Quá trình công nghiệp hóa và hiện đại hóa mạnh mẽ, Việt Nam trở thành trung tâm sản xuất điện tử và dệt may toàn cầu
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Chart */}
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-[0px_4px_32px_rgba(0,0,0,0.06)] border border-[rgba(0,0,0,0.04)]">
            {/* Toggle */}
            <div className="flex items-center justify-center gap-2 mb-8">
              <button
                onClick={() => setActiveTab("before")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === "before" 
                    ? "bg-[#1a1a1a] text-white" 
                    : "bg-[#f5f5f5] text-[#6a6a6a] hover:bg-[#e5e5e5]"
                }`}
              >
                1985
              </button>
              <button
                onClick={() => setActiveTab("after")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === "after" 
                    ? "bg-[#1a1a1a] text-white" 
                    : "bg-[#f5f5f5] text-[#6a6a6a] hover:bg-[#e5e5e5]"
                }`}
              >
                2011
              </button>
            </div>

            {/* Donut Chart */}
            <div className="relative w-[250px] h-[250px] mx-auto mb-8">
              <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                {(() => {
                  const circumference = 2 * Math.PI * 40 // ≈ 251.33
                  return currentData.map((item, index) => {
                    const previousTotal = currentData.slice(0, index).reduce((sum, d) => sum + d.value, 0)
                    const dash = (item.value / 100) * circumference
                    const gap = circumference - dash
                    const offset = -(previousTotal / 100) * circumference

                    return (
                      <circle
                        key={item.name}
                        cx="50"
                        cy="50"
                        r="40"
                        fill="transparent"
                        stroke={item.color}
                        strokeWidth="20"
                        strokeDasharray={`${dash} ${gap}`}
                        strokeDashoffset={offset}
                        className={`transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                        style={{ transitionDelay: `${index * 200}ms` }}
                      />
                    )
                  })
                })()}
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-[#1a1a1a] text-3xl font-bold">{activeTab === "before" ? "1985" : "2011"}</span>
                <span className="text-[#6a6a6a] text-sm">Tỷ trọng GDP</span>
              </div>
            </div>

            {/* Legend */}
            <div className="flex flex-col gap-3">
              {currentData.map((item, index) => (
                <div 
                  key={item.name} 
                  className={`flex items-center justify-between transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                  style={{ transitionDelay: `${index * 100 + 300}ms` }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                    <span className="text-[#4a4a4a] text-sm">{item.name}</span>
                  </div>
                  <span className="text-[#1a1a1a] font-semibold">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Info */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-[#1a1a1a] text-2xl font-semibold font-sans">Trung tâm sản xuất toàn cầu</h3>
              <p className="text-[#4a4a4a] text-base leading-relaxed">
                Việt Nam đã chuyển đổi từ nền kinh tế nông nghiệp sang công nghiệp và dịch vụ. 
                Tỷ trọng nông nghiệp giảm từ <strong className="text-[#22C55E]">40.2%</strong> xuống còn <strong className="text-[#22C55E]">22.02%</strong>, 
                trong khi công nghiệp - xây dựng tăng từ <strong className="text-[#3B82F6]">27.4%</strong> lên <strong className="text-[#3B82F6]">40.79%</strong>.
              </p>
            </div>

            {/* Company Logos */}
            <div className="p-6 bg-[#f5f5f5] rounded-2xl">
              <p className="text-[#6a6a6a] text-sm mb-4">Các tập đoàn lớn đặt cơ sở sản xuất tại Việt Nam:</p>
              <div className="flex flex-wrap gap-4">
                <div className="px-4 py-2 bg-white rounded-lg shadow-sm">
                  <span className="text-[#1a1a1a] font-semibold">Samsung</span>
                </div>
                <div className="px-4 py-2 bg-white rounded-lg shadow-sm">
                  <span className="text-[#1a1a1a] font-semibold">Intel</span>
                </div>
                <div className="px-4 py-2 bg-white rounded-lg shadow-sm">
                  <span className="text-[#1a1a1a] font-semibold">LG</span>
                </div>
                <div className="px-4 py-2 bg-white rounded-lg shadow-sm">
                  <span className="text-[#1a1a1a] font-semibold">Canon</span>
                </div>
                <div className="px-4 py-2 bg-white rounded-lg shadow-sm">
                  <span className="text-[#1a1a1a] font-semibold">Nike</span>
                </div>
              </div>
            </div>

            {/* Impact Cards */}
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 bg-white rounded-xl border border-[rgba(0,0,0,0.04)] text-center">
                <div className="w-10 h-10 rounded-full bg-[#22C55E]/10 flex items-center justify-center mx-auto mb-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#22C55E]">
                    <path d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M16 21V5C16 3.89543 15.1046 3 14 3H10C8.89543 3 8 3.89543 8 5V21" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <span className="text-[#1a1a1a] text-sm font-medium">Tạo việc làm</span>
              </div>
              <div className="p-4 bg-white rounded-xl border border-[rgba(0,0,0,0.04)] text-center">
                <div className="w-10 h-10 rounded-full bg-[#3B82F6]/10 flex items-center justify-center mx-auto mb-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#3B82F6]">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-[#1a1a1a] text-sm font-medium">Thúc đẩy xuất khẩu</span>
              </div>
              <div className="p-4 bg-white rounded-xl border border-[rgba(0,0,0,0.04)] text-center">
                <div className="w-10 h-10 rounded-full bg-[#F59E0B]/10 flex items-center justify-center mx-auto mb-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#F59E0B]">
                    <path d="M9.66347 17H14.3364M12 3V4M18.364 5.63604L17.6569 6.34315M21 12H20M4 12H3M6.34309 6.34315L5.63599 5.63604M8.46441 15.5356C6.51179 13.5829 6.51179 10.4171 8.46441 8.46449C10.417 6.51187 13.5829 6.51187 15.5355 8.46449C17.4881 10.4171 17.4881 13.5829 15.5355 15.5356L14.9884 16.0827C14.3555 16.7155 14 17.5739 14 18.469V19C14 20.1046 13.1046 21 12 21C10.8954 21 10 20.1046 10 19V18.469C10 17.5739 9.64445 16.7155 9.01156 16.0827L8.46441 15.5356Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-[#1a1a1a] text-sm font-medium">Chuyển giao CN</span>
              </div>
            </div>

            <p className="text-[#6a6a6a] text-sm italic">
              Nguồn: vneconomy.vn - Kinh tế Việt Nam 67 năm qua các con số
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
