"use client"

export default function QuoteSection() {
  return (
    <section className="w-full py-16 md:py-24 border-t border-b border-[rgba(185,28,28,0.08)] bg-gradient-to-b from-white to-[#FAFAF8]">
      <div className="max-w-[900px] mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center gap-8">
          {/* Quote Icon */}
          <div className="w-16 h-16 rounded-full bg-[#DA251D]/5 flex items-center justify-center">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-[#DA251D]">
              <path d="M3 21C5.2 21 7 19.2 7 17V10C7 7.8 5.2 6 3 6M3 21V17M3 21H7V17M3 6V10M3 6H7V10M3 10H7M13 21C15.2 21 17 19.2 17 17V10C17 7.8 15.2 6 13 6M13 21V17M13 21H17V17M13 6V10M13 6H17V10M13 10H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Quote Text */}
          <blockquote className="text-center">
            <p className="text-[#1a1a1a] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif leading-relaxed italic">
              "Đất nước ta chưa bao giờ có được cơ đồ, tiềm lực, vị thế và uy tín quốc tế như ngày nay."
            </p>
          </blockquote>

          {/* Attribution */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-[2px] bg-[#DA251D]"></div>
            <div className="text-center">
              <p className="text-[#1a1a1a] font-semibold text-lg font-sans">Tổng Bí thư Nguyễn Phú Trọng</p>
              <p className="text-[#6a6a6a] text-sm font-sans">Đại hội XIII của Đảng Cộng sản Việt Nam</p>
              <p className="text-[#6a6a6a] text-sm font-sans">25/1 - 1/2/2021, Trung tâm Hội nghị Quốc gia</p>
            </div>
          </div>

          {/* Context Card */}
          <div className="mt-8 w-full max-w-[800px] p-6 md:p-8 bg-white rounded-2xl shadow-[0px_4px_24px_rgba(0,0,0,0.06)] border border-[rgba(0,0,0,0.04)]">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-[#FFCD00]/10 flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-[#DA251D]">
                  <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-[#1a1a1a] text-lg font-semibold font-sans mb-3">Ý nghĩa của nhận định</h3>
                <p className="text-[#4a4a4a] text-base leading-relaxed font-sans">
                  Nhận định này không chỉ mang tính chính trị mà còn phản ánh đánh giá tổng kết hơn <strong className="text-[#DA251D]">35 năm liên tục phát triển và Đổi mới không ngừng nghỉ</strong> của nhân dân và Đảng Cộng sản Việt Nam. Từ một quốc gia bị tàn phá sau ngàn năm chiến tranh, với nền kinh tế kế hoạch hóa kém hiệu quả và bị bao vây cấm vận, Việt Nam đã vươn lên trở thành một trong những nền kinh tế đang phát triển vô cùng năng động tại châu Á.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
