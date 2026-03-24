"use client"

import { useEffect, useRef, useState } from "react"

const povertyData = [
  { year: "1980", value: 70 },
  { year: "1990", value: 75 },
  { year: "2002", value: 28.9 },
  { year: "2010", value: 20.7 },
  { year: "2020", value: 5 },
  { year: "2022", value: 4.2 },
]

export default function SocialAchievementsSection() {
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
    <section ref={sectionRef} id="xa-hoi" className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-4 mb-16">
          <div className="px-4 py-2 bg-[#22C55E]/5 rounded-full">
            <span className="text-[#22C55E] text-sm font-semibold">Thành tựu xã hội</span>
          </div>
          <h2 className="text-center text-[#1a1a1a] text-3xl sm:text-4xl md:text-5xl font-serif">
            Giảm nghèo & Nâng cao đời sống
          </h2>
          <p className="max-w-[650px] text-center text-[#4a4a4a] text-base md:text-lg leading-relaxed">
            Việt Nam là một trong những câu chuyện giảm nghèo thành công nhất thế giới
          </p>
        </div>

        {/* Poverty Reduction Chart */}
        <div className="bg-gradient-to-br from-[#22C55E]/5 to-white rounded-3xl p-6 md:p-10 border border-[#22C55E]/10 mb-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div>
              <h3 className="text-[#1a1a1a] text-xl font-semibold font-sans">Tỷ lệ nghèo theo thời gian</h3>
              <p className="text-[#6a6a6a] text-sm">Giảm từ 75% xuống còn 4.2% - một kỳ tích ấn tượng</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-2 rounded-full bg-gradient-to-r from-[#EF4444] to-[#22C55E]"></div>
                <span className="text-[#6a6a6a] text-sm">Xu hướng giảm</span>
              </div>
            </div>
          </div>

          {/* Line Chart — pure SVG, no overflow/alignment issues */}
          <div className={`transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <svg
              viewBox="0 0 500 210"
              className="w-full"
              style={{ height: '260px' }}
              overflow="visible"
            >
              <defs>
                <linearGradient id="povertyGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#22C55E" stopOpacity="0.22" />
                  <stop offset="100%" stopColor="#22C55E" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Chart bounds: left=44 right=492 top=36 bottom=174 */}
              {(() => {
                const CL = 44, CR = 492, CT = 36, CB = 174
                const W = CR - CL
                const H = CB - CT
                const xOf = (i: number) => CL + (i / (povertyData.length - 1)) * W
                const yOf = (v: number) => CB - (v / 75) * H
                const pts = povertyData.map((d, i) => ({ ...d, x: xOf(i), y: yOf(d.value) }))

                return (
                  <>
                    {/* Grid lines + Y-axis labels */}
                    {[0, 25, 50, 75].map(pct => {
                      const gy = yOf(pct)
                      return (
                        <g key={pct}>
                          <line x1={CL} y1={gy} x2={CR} y2={gy} stroke="rgba(0,0,0,0.07)" strokeWidth="1" strokeDasharray="4,4" />
                          <text x={CL - 6} y={gy + 3.5} textAnchor="end" fontSize="10" fill="#aaa">{pct}%</text>
                        </g>
                      )
                    })}

                    {/* Area fill */}
                    <path
                      d={`M ${pts[0].x} ${pts[0].y} ${pts.map(p => `L ${p.x} ${p.y}`).join(' ')} L ${CR} ${CB} L ${CL} ${CB} Z`}
                      fill="url(#povertyGradient)"
                    />

                    {/* Line */}
                    <polyline
                      points={pts.map(p => `${p.x},${p.y}`).join(' ')}
                      fill="none"
                      stroke="#22C55E"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      pathLength="100"
                      style={{ strokeDasharray: 100, strokeDashoffset: isVisible ? 0 : 100, transition: 'stroke-dashoffset 1.2s ease-out' }}
                    />

                    {/* Data points + labels */}
                    {pts.map((p, index) => {
                      const color = p.value > 50 ? '#EF4444' : p.value > 20 ? '#F59E0B' : '#22C55E'
                      // Put label below dot when near top, above when in lower area
                      const labelY = p.y < CT + 30 ? p.y + 22 : p.y - 13
                      return (
                        <g key={p.year} style={{ transition: `opacity 0.6s ${index * 100}ms`, opacity: isVisible ? 1 : 0 }}>
                          {/* Halo */}
                          <circle cx={p.x} cy={p.y} r="8" fill={color} fillOpacity="0.12" />
                          {/* Dot */}
                          <circle cx={p.x} cy={p.y} r="4.5" fill={color} stroke="white" strokeWidth="2" />
                          {/* Value label */}
                          <text x={p.x} y={labelY} textAnchor="middle" fontSize="10.5" fontWeight="700" fill={color}>{p.value}%</text>
                          {/* Year label */}
                          <text x={p.x} y="198" textAnchor="middle" fontSize="10" fill="#888">{p.year}</text>
                        </g>
                      )
                    })}
                  </>
                )
              })()}
            </svg>
          </div>
        </div>

        {/* Key Factors for Poverty Reduction */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { icon: "📈", title: "Tăng trưởng kinh tế cao", desc: "GDP tăng liên tục hơn 30 năm" },
            { icon: "💼", title: "Mở rộng cơ hội việc làm", desc: "Công nghiệp hóa tạo triệu việc làm" },
            { icon: "🏥", title: "Chính sách an sinh xã hội", desc: "Bảo hiểm y tế mở rộng" },
            { icon: "🌾", title: "Phát triển nông thôn", desc: "Hiện đại hóa nông nghiệp" },
          ].map((item, index) => (
            <div 
              key={item.title}
              className={`p-5 bg-white rounded-2xl border border-[rgba(0,0,0,0.06)] shadow-sm hover:shadow-md transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${index * 100 + 500}ms` }}
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h4 className="text-[#1a1a1a] text-sm font-semibold mb-1">{item.title}</h4>
              <p className="text-[#6a6a6a] text-xs">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Photo */}
        <div className="relative w-full h-52 md:h-64 rounded-3xl overflow-hidden my-12">
          <img
            src="/vietnam/xa-hoi.jpg"
            alt="Thành tựu xã hội Việt Nam"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <p className="absolute bottom-4 left-5 text-white/90 text-sm font-medium">Việt Nam — Cải thiện đời sống nhân dân</p>
        </div>

        {/* Quality of Life Stats */}
        <div className="bg-[#1a1a1a] rounded-3xl p-8 md:p-12">
          <h3 className="text-white text-xl md:text-2xl font-semibold mb-8 text-center">Cải thiện chất lượng cuộc sống</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Life Expectancy */}
            <div className="text-center">
              <div className={`text-5xl md:text-6xl font-bold text-[#22C55E] mb-2 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                73+
              </div>
              <div className="text-white/80 text-sm mb-1">Tuổi thọ trung bình</div>
              <div className="text-white/50 text-xs">Tăng đáng kể so với trước Đổi mới</div>
            </div>

            {/* Literacy Rate */}
            <div className="text-center">
              <div className={`text-5xl md:text-6xl font-bold text-[#FFCD00] mb-2 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                95%+
              </div>
              <div className="text-white/80 text-sm mb-1">Tỷ lệ biết chữ</div>
              <div className="text-white/50 text-xs">Một trong những tỷ lệ cao nhất khu vực</div>
            </div>

            {/* Healthcare Coverage */}
            <div className="text-center">
              <div className={`text-5xl md:text-6xl font-bold text-[#DA251D] mb-2 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                92%+
              </div>
              <div className="text-white/80 text-sm mb-1">Bảo hiểm y tế</div>
              <div className="text-white/50 text-xs">Bao phủ toàn dân</div>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path d="M22 10V6C22 4.89543 21.1046 4 20 4H4C2.89543 4 2 4.89543 2 6V10M22 10V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V10M22 10H2M6 16H8M12 16H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Mạng lưới giáo dục</h4>
                  <p className="text-white/60 text-sm">Trường học bao phủ khắp cả nước từ mầm non đến đại học</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path d="M19 21V19C19 17.9391 18.5786 16.9217 17.8284 16.1716C17.0783 15.4214 16.0609 15 15 15H9C7.93913 15 6.92172 15.4214 6.17157 16.1716C5.42143 16.9217 5 17.9391 5 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Mạng lưới y tế</h4>
                  <p className="text-white/60 text-sm">Bệnh viện và cơ sở y tế trải rộng từ trung ương đến địa phương</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
