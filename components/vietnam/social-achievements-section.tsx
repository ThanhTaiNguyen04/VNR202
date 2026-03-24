"use client"

import { useEffect, useRef, useState } from "react"
import { useScrollReveal, useParallaxOffset } from "@/hooks/useScrollReveal"

const povertyData = [
  { year: "1980", value: 70, description: "Thời hậu chiến, tỷ lệ nghèo cao" },
  { year: "1990", value: 75, description: "Đỉnh điểm khó khăn kinh tế" },
  { year: "2002", value: 28.9, description: "Bước đầu Đổi Mới có hiệu quả" },
  { year: "2010", value: 20.7, description: "Tăng trưởng kinh tế ổn định" },
  { year: "2020", value: 5, description: "Giảm nghèo bền vững" },
  { year: "2022", value: 4.2, description: "Thành tựu đáng ghi nhận" },
]

const socialStats = [
  { value: "73+", label: "Tuổi thọ trung bình", desc: "Tăng đáng kể so với trước Đổi mới", color: "#22C55E" },
  { value: "95%+", label: "Tỷ lệ biết chữ", desc: "Một trong những tỷ lệ cao nhất khu vực", color: "#FFCD00" },
  { value: "92%+", label: "Bảo hiểm y tế", desc: "Bao phủ toàn dân", color: "#DA251D" },
]

const socilaFactors = [
  { icon: "📈", title: "Tăng trưởng kinh tế cao", desc: "GDP tăng liên tục hơn 30 năm", gradient: "from-emerald-500/10 to-green-400/10" },
  { icon: "💼", title: "Mở rộng cơ hội việc làm", desc: "Công nghiệp hóa tạo triệu việc làm", gradient: "from-blue-500/10 to-indigo-400/10" },
  { icon: "🏥", title: "Chính sách an sinh xã hội", desc: "Bảo hiểm y tế mở rộng", gradient: "from-purple-500/10 to-pink-400/10" },
  { icon: "🌾", title: "Phát triển nông thôn", desc: "Hiện đại hóa nông nghiệp", gradient: "from-orange-500/10 to-yellow-400/10" },
]

export default function SocialAchievementsSection() {
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null)
  const [animatedStats, setAnimatedStats] = useState<number[]>([0, 0, 0])

  // Enhanced scroll reveal hooks with staggered delays
  const [sectionRef, sectionVisible] = useScrollReveal({ threshold: 0.1, delay: 100 })
  const [chartRef, chartVisible] = useScrollReveal({ threshold: 0.2, delay: 300 })
  const [factorsRef, factorsVisible] = useScrollReveal({ threshold: 0.15, delay: 200 })
  const [statsRef, statsVisible] = useScrollReveal({ threshold: 0.3, delay: 400 })

  const parallaxOffset = useParallaxOffset(0.08)

  // Animate statistics numbers
  useEffect(() => {
    if (statsVisible) {
      const targets = [73, 95, 92]
      targets.forEach((target, index) => {
        setTimeout(() => {
          let current = 0
          const increment = target / 60 // 60 frames for smooth animation
          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              current = target
              clearInterval(timer)
            }
            setAnimatedStats(prev => {
              const newStats = [...prev]
              newStats[index] = current
              return newStats
            })
          }, 16) // ~60fps
        }, index * 200)
      })
    }
  }, [statsVisible])

  return (
    <section
      ref={sectionRef}
      id="xa-hoi"
      className="w-full py-16 md:py-24 bg-gradient-to-b from-white to-green-50/30 relative"
      style={{ transform: `translateY(${-parallaxOffset * 0.2}px)` }}
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-[#22C55E]/8 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/6 w-80 h-80 bg-gradient-to-br from-[#FFCD00]/6 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-[1100px] mx-auto px-6 md:px-12 relative z-10">
        {/* Enhanced Section Header */}
        <div className={`flex flex-col items-center gap-6 mb-16 transition-all duration-1000 ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="px-6 py-3 bg-gradient-to-r from-[#22C55E]/8 via-[#22C55E]/12 to-[#22C55E]/8 rounded-full border border-[#22C55E]/20 hover:border-[#22C55E]/40 transition-all duration-300 backdrop-blur-sm">
            <span className="text-[#22C55E] text-sm font-semibold bg-gradient-to-r from-[#22C55E] to-[#16A349] bg-clip-text text-transparent">✨ Thành tựu xã hội</span>
          </div>
          <h2 className="text-center text-[#1a1a1a] text-3xl sm:text-4xl md:text-5xl font-serif hover:scale-105 transition-transform duration-300">
            Giảm nghèo & <span className="bg-gradient-to-r from-[#22C55E] to-[#16A349] bg-clip-text text-transparent">Nâng cao đời sống</span>
          </h2>
          <p className="max-w-[650px] text-center text-[#4a4a4a] text-base md:text-lg leading-relaxed">
            Việt Nam là một trong những <span className="font-semibold text-[#22C55E]">câu chuyện giảm nghèo thành công nhất thế giới</span>
          </p>
        </div>

        {/* Enhanced Poverty Reduction Chart */}
        <div
          ref={chartRef}
          className={`bg-gradient-to-br from-[#22C55E]/5 to-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-10 border border-[#22C55E]/15 mb-12 shadow-[0px_8px_48px_rgba(34,197,94,0.1)] hover:shadow-[0px_12px_60px_rgba(34,197,94,0.15)] transition-all duration-700 ${chartVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div>
              <h3 className="text-[#1a1a1a] text-xl font-semibold font-sans mb-1">Tỷ lệ nghèo theo thời gian</h3>
              <p className="text-[#6a6a6a] text-sm flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[#22C55E]">
                  <path d="M13 10V3L4 14H11V21L20 10H13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Giảm từ <span className="font-semibold text-[#EF4444]">75%</span> xuống còn <span className="font-semibold text-[#22C55E]">4.2%</span> - một kỳ tích ấn tượng
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-[#EF4444]/10 to-[#22C55E]/10 rounded-full">
                <div className="w-8 h-2 rounded-full bg-gradient-to-r from-[#EF4444] to-[#22C55E]"></div>
                <span className="text-[#6a6a6a] text-sm font-medium">Xu hướng giảm</span>
              </div>
            </div>
          </div>

          {/* Enhanced SVG Chart */}
          <div className={`transition-all duration-1000 ${chartVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <svg
              viewBox="0 0 500 210"
              className="w-full hover:scale-105 transition-transform duration-300"
              style={{ height: '280px' }}
              overflow="visible"
            >
              <defs>
                <linearGradient id="enhancedPovertyGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#22C55E" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#22C55E" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#22C55E" stopOpacity="0" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {(() => {
                const CL = 44, CR = 492, CT = 36, CB = 174
                const W = CR - CL
                const H = CB - CT
                const xOf = (i: number) => CL + (i / (povertyData.length - 1)) * W
                const yOf = (v: number) => CB - (v / 75) * H
                const pts = povertyData.map((d, i) => ({ ...d, x: xOf(i), y: yOf(d.value) }))

                return (
                  <>
                    {/* Enhanced Grid */}
                    {[0, 25, 50, 75].map(pct => {
                      const gy = yOf(pct)
                      return (
                        <g key={pct}>
                          <line x1={CL} y1={gy} x2={CR} y2={gy} stroke="rgba(34,197,94,0.15)" strokeWidth="1" strokeDasharray="4,4" />
                          <text x={CL - 8} y={gy + 3.5} textAnchor="end" fontSize="11" fill="#16A349" fontWeight="500">{pct}%</text>
                        </g>
                      )
                    })}

                    {/* Enhanced Area Fill */}
                    <path
                      d={`M ${pts[0].x} ${pts[0].y} ${pts.map(p => `L ${p.x} ${p.y}`).join(' ')} L ${CR} ${CB} L ${CL} ${CB} Z`}
                      fill="url(#enhancedPovertyGradient)"
                      className="animate-pulse"
                    />

                    {/* Enhanced Line with Glow */}
                    <polyline
                      points={pts.map(p => `${p.x},${p.y}`).join(' ')}
                      fill="none"
                      stroke="#22C55E"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      filter="url(#glow)"
                      pathLength="100"
                      style={{
                        strokeDasharray: 100,
                        strokeDashoffset: chartVisible ? 0 : 100,
                        transition: 'stroke-dashoffset 2s cubic-bezier(0.4, 0, 0.2, 1)'
                      }}
                    />

                    {/* Enhanced Data Points */}
                    {pts.map((p, index) => {
                      const color = p.value > 50 ? '#EF4444' : p.value > 20 ? '#F59E0B' : '#22C55E'
                      const isHovered = hoveredPoint === index
                      const labelY = p.y < CT + 30 ? p.y + 24 : p.y - 15

                      return (
                        <g
                          key={p.year}
                          style={{
                            transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 100}ms`,
                            opacity: chartVisible ? 1 : 0,
                            transform: chartVisible ? 'scale(1)' : 'scale(0)',
                            transformOrigin: `${p.x}px ${p.y}px`
                          }}
                          className="cursor-pointer"
                          onMouseEnter={() => setHoveredPoint(index)}
                          onMouseLeave={() => setHoveredPoint(null)}
                        >
                          {/* Enhanced Tooltip */}
                          {isHovered && (
                            <foreignObject x={p.x - 60} y={p.y - 50} width="120" height="40">
                              <div className="bg-white/95 backdrop-blur-sm px-3 py-2 rounded-lg shadow-xl border border-white/50 text-center transform -translate-x-1/2">
                                <div className="text-xs font-bold text-gray-800">{p.description}</div>
                              </div>
                            </foreignObject>
                          )}

                          {/* Glow Effect */}
                          <circle
                            cx={p.x}
                            cy={p.y}
                            r={isHovered ? "12" : "8"}
                            fill={color}
                            fillOpacity={isHovered ? "0.2" : "0.12"}
                            className="transition-all duration-300"
                          />

                          {/* Main Dot */}
                          <circle
                            cx={p.x}
                            cy={p.y}
                            r={isHovered ? "6" : "4.5"}
                            fill={color}
                            stroke="white"
                            strokeWidth="2.5"
                            className="transition-all duration-300 drop-shadow-sm"
                          />

                          {/* Value Label */}
                          <text
                            x={p.x}
                            y={labelY}
                            textAnchor="middle"
                            fontSize={isHovered ? "12" : "10.5"}
                            fontWeight="700"
                            fill={color}
                            className="transition-all duration-300 drop-shadow-sm"
                          >
                            {p.value}%
                          </text>

                          {/* Year Label */}
                          <text
                            x={p.x}
                            y="200"
                            textAnchor="middle"
                            fontSize="11"
                            fill="#22C55E"
                            fontWeight="600"
                            className={isHovered ? "text-lg" : ""}
                          >
                            {p.year}
                          </text>
                        </g>
                      )
                    })}
                  </>
                )
              })()}
            </svg>
          </div>
        </div>

        {/* Enhanced Key Factors */}
        <div
          ref={factorsRef}
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 transition-all duration-1000 ${factorsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {socilaFactors.map((item, index) => (
            <div
              key={item.title}
              className={`group p-5 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer overflow-hidden relative`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              {/* Background Gradient on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

              <div className="relative z-10">
                <div className="text-3xl mb-3 transform group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h4 className="text-[#1a1a1a] text-sm font-semibold mb-1 group-hover:text-[#22C55E] transition-colors duration-300">{item.title}</h4>
                <p className="text-[#6a6a6a] text-xs group-hover:text-[#4a4a4a] transition-colors duration-300">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Photo Section */}
        <div className={`relative w-full h-[360px] md:h-[480px] rounded-3xl overflow-hidden my-12 group transition-all duration-1000 ${factorsVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
             style={{ transitionDelay: '600ms' }}>
          <img
            src="/vietnam/xa-hoi.jpg"
            alt="Thành tựu xã hội Việt Nam"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#22C55E]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-6 left-6 right-6">
            <p className="text-white text-lg md:text-xl font-semibold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              Việt Nam — Cải thiện đời sống nhân dân
            </p>
            <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
              Hành trình từ đói nghèo đến thịnh vượng
            </p>
          </div>
        </div>

        {/* Enhanced Quality of Life Stats */}
        <div
          ref={statsRef}
          className={`bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] rounded-3xl p-8 md:p-12 relative overflow-hidden transition-all duration-1000 ${statsVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
          style={{ transitionDelay: '800ms' }}
        >
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#22C55E]/5 via-transparent to-[#DA251D]/5 opacity-50"></div>
          <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-br from-[#22C55E]/10 to-transparent rounded-full blur-2xl"></div>

          <div className="relative z-10">
            <h3 className="text-white text-xl md:text-2xl font-semibold mb-2 text-center">
              Cải thiện <span className="bg-gradient-to-r from-[#22C55E] to-[#FFCD00] bg-clip-text text-transparent">chất lượng cuộc sống</span>
            </h3>
            <p className="text-white/60 text-center mb-8">Những con số ấn tượng về phát triển xã hội</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {socialStats.map((stat, index) => (
                <div key={stat.label} className="text-center group cursor-pointer">
                  <div
                    className="text-5xl md:text-6xl font-bold mb-2 transform group-hover:scale-110 transition-all duration-500"
                    style={{
                      color: stat.color,
                      textShadow: `0 0 20px ${stat.color}40`
                    }}
                  >
                    {index === 0 && Math.floor(animatedStats[0])}
                    {index === 1 && Math.floor(animatedStats[1])}
                    {index === 2 && Math.floor(animatedStats[2])}
                    {index === 0 && '+'}
                    {index === 1 && '%+'}
                    {index === 2 && '%+'}
                  </div>
                  <div className="text-white/80 text-sm mb-1 font-medium group-hover:text-white transition-colors duration-300">{stat.label}</div>
                  <div className="text-white/50 text-xs group-hover:text-white/70 transition-colors duration-300">{stat.desc}</div>

                  {/* Progress Bar */}
                  <div className="mt-3 w-full bg-white/10 rounded-full h-1 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{
                        backgroundColor: stat.color,
                        width: statsVisible ? `${index === 0 ? 85 : index === 1 ? 95 : 92}%` : '0%',
                        transitionDelay: `${index * 200 + 1000}ms`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: "M22 10V6C22 4.89543 21.1046 4 20 4H4C2.89543 4 2 4.89543 2 6V10M22 10V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V10M22 10H2M6 16H8M12 16H14",
                    title: "Mạng lưới giáo dục",
                    desc: "Trường học bao phủ khắp cả nước từ mầm non đến đại học"
                  },
                  {
                    icon: "M19 21V19C19 17.9391 18.5786 16.9217 17.8284 16.1716C17.0783 15.4214 16.0609 15 15 15H9C7.93913 15 6.92172 15.4214 6.17157 16.1716C5.42143 16.9217 5 17.9391 5 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z",
                    title: "Mạng lưới y tế",
                    desc: "Bệnh viện và cơ sở y tế trải rộng từ trung ương đến địa phương"
                  }
                ].map((item, index) => (
                  <div
                    key={item.title}
                    className={`flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300 group cursor-pointer`}
                    style={{
                      transitionDelay: `${index * 200 + 1200}ms`,
                      opacity: statsVisible ? 1 : 0,
                      transform: statsVisible ? 'translateY(0)' : 'translateY(20px)'
                    }}
                  >
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white group-hover:text-[#22C55E] transition-colors duration-300">
                        <path d={item.icon} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1 group-hover:text-[#22C55E] transition-colors duration-300">{item.title}</h4>
                      <p className="text-white/60 text-sm group-hover:text-white/80 transition-colors duration-300">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
