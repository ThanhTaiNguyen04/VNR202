"use client"

import { useEffect, useRef, useState } from "react"

const exportData = [
  { year: "1990", value: 36.04 },
  { year: "2000", value: 53.93 },
  { year: "2010", value: 54.18 },
  { year: "2020", value: 84.39 },
  { year: "2023", value: 86.47 },
]

const partners = [
  "Hoa Kỳ", "Trung Quốc", "Nhật Bản", "Ấn Độ", "Hàn Quốc", "Nga", "Đức", "Pháp", "Úc", "Anh"
]

const organizations = [
  { name: "WTO", fullName: "Tổ chức Thương mại Thế giới", year: "2007" },
  { name: "ASEAN", fullName: "Hiệp hội các Quốc gia Đông Nam Á", year: "1995" },
  { name: "APEC", fullName: "Diễn đàn Hợp tác Kinh tế châu Á - Thái Bình Dương", year: "1998" },
  { name: "UN", fullName: "Liên Hợp Quốc", year: "1977" },
]

const ftas = [
  { name: "CPTPP", desc: "Hiệp định Đối tác Toàn diện và Tiến bộ xuyên Thái Bình Dương" },
  { name: "EVFTA", desc: "Hiệp định Thương mại Tự do Việt Nam - EU" },
  { name: "RCEP", desc: "Hiệp định Đối tác Kinh tế Toàn diện Khu vực" },
  { name: "UKVFTA", desc: "Hiệp định Thương mại Tự do Việt Nam - Anh" },
]

export default function InternationalIntegrationSection() {
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
    <section ref={sectionRef} id="hoi-nhap" className="w-full py-16 md:py-24 bg-gradient-to-b from-white to-[#FAFAF8] border-t border-[rgba(0,0,0,0.04)]">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-4 mb-16">
          <div className="px-4 py-2 bg-[#3B82F6]/5 rounded-full">
            <span className="text-[#3B82F6] text-sm font-semibold">Hội nhập quốc tế</span>
          </div>
          <h2 className="text-center text-[#1a1a1a] text-3xl sm:text-4xl md:text-5xl font-serif">
            Vị thế toàn cầu vững chắc
          </h2>
          <p className="max-w-[650px] text-center text-[#4a4a4a] text-base md:text-lg leading-relaxed">
            Từ bị bao vây cấm vận đến thiết lập quan hệ ngoại giao với hơn 190 quốc gia
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="p-6 bg-white rounded-2xl border border-[rgba(0,0,0,0.04)] shadow-sm text-center">
            <div className={`text-4xl md:text-5xl font-bold text-[#DA251D] mb-2 transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>190+</div>
            <div className="text-[#6a6a6a] text-sm">Quốc gia đối tác</div>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-[rgba(0,0,0,0.04)] shadow-sm text-center">
            <div className={`text-4xl md:text-5xl font-bold text-[#3B82F6] mb-2 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>17+</div>
            <div className="text-[#6a6a6a] text-sm">Hiệp định FTA</div>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-[rgba(0,0,0,0.04)] shadow-sm text-center">
            <div className={`text-4xl md:text-5xl font-bold text-[#22C55E] mb-2 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>Top 20</div>
            <div className="text-[#6a6a6a] text-sm">Xuất khẩu thế giới</div>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-[rgba(0,0,0,0.04)] shadow-sm text-center">
            <div className={`text-4xl md:text-5xl font-bold text-[#F59E0B] mb-2 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>#2</div>
            <div className="text-[#6a6a6a] text-sm">Xuất khẩu gạo</div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Strategic Partners */}
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-[0px_4px_24px_rgba(0,0,0,0.04)] border border-[rgba(0,0,0,0.04)]">
            <h3 className="text-[#1a1a1a] text-xl font-semibold mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#DA251D]/10 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#DA251D]">
                  <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              Đối tác chiến lược
            </h3>
            <div className="flex flex-wrap gap-2">
              {partners.map((partner, index) => (
                <div 
                  key={partner}
                  className={`px-4 py-2 bg-[#f5f5f5] rounded-full text-[#4a4a4a] text-sm font-medium hover:bg-[#DA251D]/10 hover:text-[#DA251D] transition-all cursor-default ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ transitionDelay: `${index * 50}ms`, transitionDuration: '500ms' }}
                >
                  {partner}
                </div>
              ))}
            </div>
          </div>

          {/* International Organizations */}
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-[0px_4px_24px_rgba(0,0,0,0.04)] border border-[rgba(0,0,0,0.04)]">
            <h3 className="text-[#1a1a1a] text-xl font-semibold mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#3B82F6]/10 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#3B82F6]">
                  <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M3.6 9H20.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M3.6 15H20.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M12 3C14.5 5.5 16 8.5 16 12C16 15.5 14.5 18.5 12 21" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 3C9.5 5.5 8 8.5 8 12C8 15.5 9.5 18.5 12 21" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              Tổ chức quốc tế
            </h3>
            <div className="space-y-3">
              {organizations.map((org, index) => (
                <div 
                  key={org.name}
                  className={`flex items-center justify-between p-3 bg-[#f5f5f5] rounded-xl transition-all ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                  style={{ transitionDelay: `${index * 100}ms`, transitionDuration: '500ms' }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[#3B82F6] font-bold text-sm">{org.name}</span>
                    <span className="text-[#6a6a6a] text-xs hidden md:block">{org.fullName}</span>
                  </div>
                  <span className="text-[#4a4a4a] text-xs font-medium bg-white px-2 py-1 rounded">{org.year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Export Growth Chart */}
        <div className="bg-[#1a1a1a] rounded-3xl p-6 md:p-10 mb-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div>
              <h3 className="text-white text-xl font-semibold">Tỷ lệ xuất khẩu / GDP</h3>
              <p className="text-white/60 text-sm">Nguồn: World Bank</p>
            </div>
            <div className="text-white/80 text-sm">
              Từ <span className="text-[#FFCD00] font-bold">36%</span> (1990) lên <span className="text-[#22C55E] font-bold">86%</span> (2023)
            </div>
          </div>

          {/* Progress bars */}
          <div className="space-y-4">
            {exportData.map((item, index) => (
              <div key={item.year} className="flex items-center gap-4">
                <span className="text-white/60 text-sm w-12">{item.year}</span>
                <div className="flex-1 h-8 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-[#DA251D] to-[#FFCD00] rounded-full transition-all duration-1000 flex items-center justify-end pr-3"
                    style={{ 
                      width: isVisible ? `${item.value}%` : '0%',
                      transitionDelay: `${index * 150}ms`
                    }}
                  >
                    <span className="text-white text-xs font-bold">{item.value}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FTAs */}
        <div>
          <h3 className="text-[#1a1a1a] text-xl font-semibold mb-6 text-center">Hiệp định Thương mại Tự do quan trọng</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {ftas.map((fta, index) => (
              <div 
                key={fta.name}
                className={`p-5 bg-white rounded-2xl border border-[rgba(0,0,0,0.04)] shadow-sm hover:shadow-md hover:border-[#DA251D]/20 transition-all group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${index * 100 + 500}ms`, transitionDuration: '500ms' }}
              >
                <div className="text-[#DA251D] text-xl font-bold mb-2 group-hover:scale-105 transition-transform">{fta.name}</div>
                <p className="text-[#6a6a6a] text-xs leading-relaxed">{fta.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Export Products */}
        <div className="mt-12 p-6 md:p-8 bg-gradient-to-r from-[#DA251D]/5 to-[#FFCD00]/5 rounded-3xl border border-[#DA251D]/10">
          <h4 className="text-[#1a1a1a] text-lg font-semibold mb-4">Mặt hàng xuất khẩu chủ lực</h4>
          <div className="flex flex-wrap gap-3">
            {["Điện tử", "Dệt may", "Giày dép", "Nông sản", "Thủy sản", "Gỗ & sản phẩm gỗ", "Máy móc thiết bị", "Cà phê", "Gạo"].map((item) => (
              <span key={item} className="px-4 py-2 bg-white rounded-full text-[#4a4a4a] text-sm font-medium shadow-sm">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
