"use client"

import { useScrollReveal } from "@/hooks/useScrollReveal"

export default function AIUsageSection() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section ref={ref} className="w-full py-16 md:py-24 bg-gradient-to-b from-[#FAFAF8] to-white border-t border-[rgba(185,28,28,0.08)]">
      <div className="max-w-[1060px] mx-auto px-6 md:px-12">

        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <h2 className="text-[#1a1a1a] text-3xl md:text-4xl font-serif font-semibold">🤖 Sử Dụng Trí Tuệ Nhân Tạo</h2>
          </div>
          <p className="text-[#4a4a4a] text-lg leading-relaxed max-w-[600px] mx-auto">
            Hỗ Trợ Trí Tuệ Nhân Tạo Trong Dự Án
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Công Nghệ AI Được Sử Dụng */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
            <div className="bg-white rounded-2xl p-8 shadow-[0px_4px_24px_rgba(0,0,0,0.06)] border border-[rgba(0,0,0,0.04)] h-full hover:shadow-[0px_8px_32px_rgba(218,37,29,0.12)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#FFCD00]/20 flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-[#1a1a1a] text-xl font-semibold">Công Nghệ Trí Tuệ Nhân Tạo Được Sử Dụng</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#DA251D] mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium text-[#1a1a1a]">Claude (Anthropic)</div>
                    <div className="text-sm text-[#6a6a6a]">Phân tích nâng cao và phát triển website</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#DA251D] mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium text-[#1a1a1a]">ChatGPT và Gemini</div>
                    <div className="text-sm text-[#6a6a6a]">Tạo nội dung và xử lý dữ liệu</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#DA251D] mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium text-[#1a1a1a]">NotebookLM</div>
                    <div className="text-sm text-[#6a6a6a]">Nghiên cứu và tổng hợp nội dung học thuật</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#DA251D] mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium text-[#1a1a1a]">v0 của Vercel</div>
                    <div className="text-sm text-[#6a6a6a]">Thiết kế giao diện và phát triển thành phần</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Academic Integrity */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '400ms' }}>
            <div className="bg-gradient-to-r from-[#DA251D] to-[#B91C1C] rounded-2xl p-8 text-white h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full transform -translate-x-12 translate-y-12"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <h3 className="text-white text-xl font-semibold">Cam Kết Liêm Chính Học Thuật</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/80 mt-2 flex-shrink-0"></div>
                    <span className="text-white/90 text-sm leading-relaxed">
                      <strong className="text-white">Nguồn dữ liệu chính thống:</strong> World Bank, IMF, VnEconomy, Country Economy
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/80 mt-2 flex-shrink-0"></div>
                    <span className="text-white/90 text-sm leading-relaxed">
                      <strong className="text-white">Trí tuệ nhân tạo như công cụ hỗ trợ:</strong> Không thay thế nghiên cứu độc lập
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/80 mt-2 flex-shrink-0"></div>
                    <span className="text-white/90 text-sm leading-relaxed">
                      <strong className="text-white">Kiểm duyệt nội dung:</strong> Tất cả thông tin được xác thực bởi con người
                    </span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                      <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    <span className="text-white text-sm font-medium">Huy Hiệu Minh Bạch</span>
                  </div>
                  <span className="text-white/80 text-xs">
                    Dự án này tuân thủ các tiêu chuẩn học thuật cao nhất và minh bạch về việc sử dụng trí tuệ nhân tạo
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}