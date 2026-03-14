"use client"

export default function FooterSection() {
  return (
    <footer className="w-full py-12 md:py-16 bg-[#1a1a1a] mt-auto">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
          {/* Left Side - Brand */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-8 rounded overflow-hidden">
                <div className="w-full h-full bg-[#DA251D] flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L14.09 8.26L21 9.27L16 14.14L17.18 21.02L12 17.77L6.82 21.02L8 14.14L3 9.27L9.91 8.26L12 2Z" fill="#FFFF00" />
                  </svg>
                </div>
              </div>
              <span className="text-white font-semibold text-xl">Việt Nam</span>
            </div>
            <p className="text-white/60 text-sm max-w-[300px] leading-relaxed">
              Hành trình Đổi mới và Phát triển - Từ khó khăn vươn lên thành nền kinh tế năng động hàng đầu châu Á.
            </p>
          </div>

          {/* Right Side - Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* Navigation */}
            <div>
              <h4 className="text-white/50 text-sm font-semibold mb-4 uppercase tracking-wider">Nội dung</h4>
              <ul className="space-y-3">
                <li><a href="#kinh-te" className="text-white/80 text-sm hover:text-[#DA251D] transition-colors">Kinh tế</a></li>
                <li><a href="#xa-hoi" className="text-white/80 text-sm hover:text-[#DA251D] transition-colors">Xã hội</a></li>
                <li><a href="#hoi-nhap" className="text-white/80 text-sm hover:text-[#DA251D] transition-colors">Hội nhập</a></li>
                <li><a href="#thach-thuc" className="text-white/80 text-sm hover:text-[#DA251D] transition-colors">Thách thức</a></li>
              </ul>
            </div>

            {/* Sources */}
            <div>
              <h4 className="text-white/50 text-sm font-semibold mb-4 uppercase tracking-wider">Nguồn tham khảo</h4>
              <ul className="space-y-3">
                <li><span className="text-white/80 text-sm">World Bank</span></li>
                <li><span className="text-white/80 text-sm">IMF</span></li>
                <li><span className="text-white/80 text-sm">VnEconomy</span></li>
                <li><span className="text-white/80 text-sm">Country Economy</span></li>
              </ul>
            </div>

            {/* Context */}
            <div>
              <h4 className="text-white/50 text-sm font-semibold mb-4 uppercase tracking-wider">Bối cảnh</h4>
              <ul className="space-y-3">
                <li><span className="text-white/80 text-sm">Đại hội XIII</span></li>
                <li><span className="text-white/80 text-sm">Đổi mới 1986</span></li>
                <li><span className="text-white/80 text-sm">WTO 2007</span></li>
                <li><span className="text-white/80 text-sm">CPTPP 2018</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            Bài thuyết trình về thành tựu phát triển của Việt Nam
          </p>
          <div className="flex items-center gap-6">
            <span className="text-white/40 text-sm">2024</span>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#DA251D]"></div>
              <div className="w-3 h-3 rounded-full bg-[#FFCD00]"></div>
            </div>
          </div>
        </div>

        {/* Decorative Pattern */}
        <div className="mt-12 relative h-12 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            {Array.from({ length: 20 }).map((_, i) => (
              <div 
                key={i}
                className="w-[2px] h-4 mx-2 bg-gradient-to-b from-[#DA251D]/30 to-transparent transform rotate-45"
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
