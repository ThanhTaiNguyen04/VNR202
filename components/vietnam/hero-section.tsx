"use client"

import { useEffect, useState } from "react"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="w-full relative overflow-hidden">
      {/* Navigation */}
      <nav className="w-full h-16 lg:h-20 flex justify-center items-center z-20 px-6 sm:px-8 md:px-12 lg:px-0 border-b border-[rgba(185,28,28,0.08)]">
        <div className="w-full max-w-[1060px] flex justify-between items-center">
          <div className="flex items-center gap-3">
            {/* Vietnam Flag Icon */}
            <div className="w-8 h-6 rounded-sm overflow-hidden shadow-sm">
              <div className="w-full h-full bg-[#DA251D] flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L14.09 8.26L21 9.27L16 14.14L17.18 21.02L12 17.77L6.82 21.02L8 14.14L3 9.27L9.91 8.26L12 2Z" fill="#FFFF00" />
                </svg>
              </div>
            </div>
            <span className="text-[#1a1a1a] font-semibold text-lg font-sans">Việt Nam</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#kinh-te" className="text-[#4a4a4a] hover:text-[#DA251D] text-sm font-medium transition-colors">Kinh tế</a>
            <a href="#xa-hoi" className="text-[#4a4a4a] hover:text-[#DA251D] text-sm font-medium transition-colors">Xã hội</a>
            <a href="#hoi-nhap" className="text-[#4a4a4a] hover:text-[#DA251D] text-sm font-medium transition-colors">Hội nhập</a>
            <a href="#thach-thuc" className="text-[#4a4a4a] hover:text-[#DA251D] text-sm font-medium transition-colors">Thách thức</a>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-32 pb-16 sm:pb-20 md:pb-24 lg:pb-32 flex flex-col justify-start items-center px-6 sm:px-8 md:px-12 lg:px-0 w-full relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#DA251D] blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-[#FFCD00] blur-3xl"></div>
        </div>

        <div 
          className={`w-full max-w-[900px] flex flex-col justify-center items-center gap-8 relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Badge */}
          <div className="px-4 py-2 bg-white shadow-[0px_0px_0px_4px_rgba(218,37,29,0.05)] rounded-full flex items-center gap-2 border border-[rgba(218,37,29,0.15)]">
            <div className="w-2 h-2 rounded-full bg-[#DA251D] animate-pulse"></div>
            <span className="text-[#DA251D] text-sm font-medium">Hành Trình Đổi Mới 1986 - 2024</span>
          </div>

          {/* Main Title */}
          <h1 className="text-center text-[#1a1a1a] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal leading-tight font-serif">
            <span className="text-[#DA251D]">Việt Nam</span> - Từ Đổi Mới
            <br />
            Đến Hội Nhập Toàn Cầu
          </h1>

          {/* Subtitle */}
          <p className="max-w-[700px] text-center text-[#4a4a4a] text-base sm:text-lg md:text-xl leading-relaxed font-sans">
            Khám phá hành trình phi thường của một quốc gia từ khó khăn, bao vây cấm vận, 
            vươn lên trở thành một trong những nền kinh tế năng động nhất châu Á.
          </p>

          {/* Stats Preview */}
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 mt-8">
            <div className="flex flex-col items-center">
              <span className="text-[#DA251D] text-3xl md:text-4xl font-bold font-serif">35+</span>
              <span className="text-[#6a6a6a] text-sm font-medium">Năm Đổi Mới</span>
            </div>
            <div className="w-px h-12 bg-[rgba(0,0,0,0.1)] hidden md:block"></div>
            <div className="flex flex-col items-center">
              <span className="text-[#DA251D] text-3xl md:text-4xl font-bold font-serif">$459B</span>
              <span className="text-[#6a6a6a] text-sm font-medium">GDP 2024</span>
            </div>
            <div className="w-px h-12 bg-[rgba(0,0,0,0.1)] hidden md:block"></div>
            <div className="flex flex-col items-center">
              <span className="text-[#DA251D] text-3xl md:text-4xl font-bold font-serif">190+</span>
              <span className="text-[#6a6a6a] text-sm font-medium">Quốc gia đối tác</span>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-12 flex flex-col items-center gap-2 animate-bounce">
            <span className="text-[#6a6a6a] text-xs font-medium">Khám phá thêm</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#DA251D]">
              <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
