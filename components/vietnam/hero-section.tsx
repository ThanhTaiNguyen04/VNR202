"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)
  const flagRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return
      const rect = heroRef.current.getBoundingClientRect()
      setMousePos({
        x: (e.clientX - rect.left - rect.width / 2) / rect.width,
        y: (e.clientY - rect.top - rect.height / 2) / rect.height,
      })
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <section ref={heroRef} className="w-full relative overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-[#DA251D] rounded-full animate-ping opacity-60" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-[#FFCD00] rounded-full animate-ping opacity-40" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-[#DA251D] rounded-full animate-ping opacity-50" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Navigation */}
      <nav className="w-full h-16 lg:h-20 flex justify-center items-center z-20 px-6 sm:px-8 md:px-12 lg:px-0 border-b border-[rgba(185,28,28,0.08)] backdrop-blur-sm bg-[#FAFAF8]/80">
        <div className="w-full max-w-[1060px] flex justify-between items-center">
          <div className="flex items-center gap-3">
            {/* Vietnam Flag Icon */}
            <div
              ref={flagRef}
              className="w-8 h-6 rounded-sm overflow-hidden shadow-sm transform hover:scale-110 transition-all duration-300 hover:shadow-lg"
              onMouseEnter={() => {
                if (flagRef.current) {
                  flagRef.current.style.transform = 'rotateY(10deg) scale(1.1)'
                }
              }}
              onMouseLeave={() => {
                if (flagRef.current) {
                  flagRef.current.style.transform = 'rotateY(0deg) scale(1)'
                }
              }}
            >
              <div className="w-full h-full bg-gradient-to-br from-[#DA251D] to-[#B91C1C] flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="drop-shadow-sm">
                  <path d="M12 2L14.09 8.26L21 9.27L16 14.14L17.18 21.02L12 17.77L6.82 21.02L8 14.14L3 9.27L9.91 8.26L12 2Z" fill="#FFFF00" />
                </svg>
              </div>
            </div>
            <span className="text-[#1a1a1a] font-semibold text-lg font-sans">Việt Nam</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#kinh-te" className="text-[#4a4a4a] hover:text-[#DA251D] text-sm font-medium transition-all duration-300 relative group">
              Kinh tế
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#DA251D] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#xa-hoi" className="text-[#4a4a4a] hover:text-[#DA251D] text-sm font-medium transition-all duration-300 relative group">
              Xã hội
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#DA251D] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#hoi-nhap" className="text-[#4a4a4a] hover:text-[#DA251D] text-sm font-medium transition-all duration-300 relative group">
              Hội nhập
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#DA251D] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#thach-thuc" className="text-[#4a4a4a] hover:text-[#DA251D] text-sm font-medium transition-all duration-300 relative group">
              Thách thức
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#DA251D] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <Link
              href="/chien-luoc"
              className="px-4 py-2 bg-gradient-to-r from-[#DA251D] to-[#B91C1C] text-white rounded-full text-sm font-medium transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 hover:from-[#B91C1C] hover:to-[#991B1B] relative overflow-hidden group"
            >
              <span className="relative z-10">Trò chơi 🎮</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
            </Link>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Content */}
      <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-32 pb-16 sm:pb-20 md:pb-24 lg:pb-32 flex flex-col justify-start items-center px-6 sm:px-8 md:px-12 lg:px-0 w-full relative z-10">
        {/* Advanced Background with parallax */}
        <div className="absolute inset-0 opacity-8 pointer-events-none">
          <div
            className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gradient-to-r from-[#DA251D] to-[#FF6B6B] blur-3xl animate-pulse"
            style={{
              transform: `translateY(${scrollY * 0.1}px) translateX(${Math.cos(Date.now() * 0.001) * 10}px)`
            }}
          ></div>
          <div
            className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-gradient-to-l from-[#FFCD00] to-[#FFB800] blur-3xl animate-pulse"
            style={{
              transform: `translateY(${scrollY * -0.05}px) translateX(${Math.sin(Date.now() * 0.001) * 15}px)`,
              animationDelay: '1s'
            }}
          ></div>

          {/* Floating particles */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-[#DA251D]/20 animate-pulse"
              style={{
                top: `${20 + i * 15}%`,
                left: `${10 + i * 12}%`,
                transform: `translateY(${scrollY * (0.02 + i * 0.01)}px)`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${2 + i * 0.5}s`
              }}
            />
          ))}
        </div>

        <div
          className={`w-full max-w-[900px] flex flex-col justify-center items-center gap-8 relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{
            transform: `perspective(1000px) rotateX(${mousePos.y * 2}deg) rotateY(${mousePos.x * 2}deg)`,
          }}
        >
          {/* Enhanced Badge */}
          <div className={`px-4 py-2 bg-white/90 backdrop-blur-sm shadow-[0px_0px_0px_4px_rgba(218,37,29,0.05)] rounded-full flex items-center gap-2 border border-[rgba(218,37,29,0.15)] hover:shadow-[0px_0px_0px_8px_rgba(218,37,29,0.08)] transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#DA251D] to-[#FF6B6B] animate-pulse relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#DA251D] to-[#FF6B6B] animate-ping"></div>
            </div>
            <span className="text-[#DA251D] text-sm font-medium bg-gradient-to-r from-[#DA251D] to-[#B91C1C] bg-clip-text text-transparent">Hành Trình Đổi Mới 1986 - 2024</span>
          </div>

          {/* Enhanced Main Title */}
          <h1 className={`text-center text-[#1a1a1a] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal leading-tight font-serif transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '200ms' }}>
            <span className="bg-gradient-to-r from-[#DA251D] via-[#FF6B6B] to-[#DA251D] bg-clip-text text-transparent bg-size-200 animate-gradient-x">Việt Nam</span> - Từ Đổi Mới
            <br />
            <span className="inline-block hover:scale-105 transition-transform duration-300">Đến Hội Nhập Toàn Cầu</span>
          </h1>

          {/* Enhanced Subtitle */}
          <p className={`max-w-[700px] text-center text-[#4a4a4a] text-base sm:text-lg md:text-xl leading-relaxed font-sans transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '400ms' }}>
            Khám phá hành trình phi thường của một quốc gia từ khó khăn, bao vây cấm vận,
            vươn lên trở thành một trong những nền <span className="text-[#DA251D] font-semibold">kinh tế năng động nhất châu Á</span>.
          </p>

          {/* Enhanced Stats Preview */}
          <div className={`flex flex-wrap justify-center items-center gap-6 md:gap-12 mt-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '600ms' }}>
            <div className="flex flex-col items-center group hover:scale-110 transition-all duration-300 cursor-pointer">
              <span className="text-[#DA251D] text-3xl md:text-4xl font-bold font-serif group-hover:bg-gradient-to-r group-hover:from-[#DA251D] group-hover:to-[#FF6B6B] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">35+</span>
              <span className="text-[#6a6a6a] text-sm font-medium group-hover:text-[#4a4a4a] transition-colors">Năm Đổi Mới</span>
            </div>
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-[rgba(0,0,0,0.1)] to-transparent hidden md:block"></div>
            <div className="flex flex-col items-center group hover:scale-110 transition-all duration-300 cursor-pointer">
              <span className="text-[#DA251D] text-3xl md:text-4xl font-bold font-serif group-hover:bg-gradient-to-r group-hover:from-[#DA251D] group-hover:to-[#FF6B6B] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">$459B</span>
              <span className="text-[#6a6a6a] text-sm font-medium group-hover:text-[#4a4a4a] transition-colors">GDP 2024</span>
            </div>
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-[rgba(0,0,0,0.1)] to-transparent hidden md:block"></div>
            <div className="flex flex-col items-center group hover:scale-110 transition-all duration-300 cursor-pointer">
              <span className="text-[#DA251D] text-3xl md:text-4xl font-bold font-serif group-hover:bg-gradient-to-r group-hover:from-[#DA251D] group-hover:to-[#FF6B6B] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">190+</span>
              <span className="text-[#6a6a6a] text-sm font-medium group-hover:text-[#4a4a4a] transition-colors">Quốc gia đối tác</span>
            </div>
          </div>

          {/* Enhanced Scroll Indicator */}
          <div
            className={`mt-12 flex flex-col items-center gap-2 cursor-pointer group transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '800ms' }}
            onClick={() => {
              const targetSection = document.querySelector('#dat-nuoc-ta')
              if (targetSection) {
                targetSection.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
                })
              }
            }}
          >
            <span className="text-[#6a6a6a] text-xs font-medium group-hover:text-[#DA251D] transition-colors">Khám phá thêm</span>
            <div className="transform group-hover:translate-y-1 transition-transform duration-300 animate-bounce">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#DA251D] group-hover:text-[#B91C1C] transition-colors">
                <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Add CSS styles for gradient animation
const styles = `
  @keyframes gradient-x {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
  .animate-gradient-x {
    animation: gradient-x 3s ease infinite;
    background-size: 200% 200%;
  }
  .bg-size-200 {
    background-size: 200% 200%;
  }
`

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style')
  styleSheet.textContent = styles
  document.head.appendChild(styleSheet)
}
