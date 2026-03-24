"use client"

import StrategyGame from "@/components/vietnam/strategy-game"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"

export default function GamePage() {
  return (
    <div className="min-h-screen bg-[#FAFAF8] flex flex-col">
      {/* Mini Nav */}
      <nav className="w-full h-16 border-b border-red-100 bg-white/50 backdrop-blur-md sticky top-0 z-50 px-6 flex items-center">
        <div className="max-w-[1200px] mx-auto w-full flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 text-[#8B0000] font-medium hover:gap-3 transition-all">
            <ChevronLeft className="w-4 h-4" />
            Quay lại bối cảnh
          </Link>
          <div className="flex items-center gap-2">
             <div className="w-6 h-4 bg-[#DA251D] flex items-center justify-center rounded-xs">
                <svg width="8" height="8" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L14.09 8.26L21 9.27L16 14.14L17.18 21.02L12 17.77L6.82 21.02L8 14.14L3 9.27L9.91 8.26L12 2Z" fill="#FFFF00" />
                </svg>
             </div>
             <h1 className="text-lg font-serif font-bold text-[#1a1a1a]">Hành Trình Tỏa Sáng</h1>
          </div>
          <div className="w-20 hidden md:block"></div>
        </div>
      </nav>

      <main className="flex-grow py-12 px-4">
        <div className="max-w-[1200px] mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif text-[#1a1a1a] mb-4">Trò Chơi Chiến Lược</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
                Bản lĩnh điều hành - Vươn tầm vị thế. Bạn sẽ là người đưa ra các quyết định lịch sử để xây dựng cơ đồ đất nước.
            </p>
        </div>

        <StrategyGame />
      </main>

      {/* Footer */}
      <footer className="py-8 bg-white border-t border-red-50 px-6">
         <p className="text-center text-gray-400 text-sm">
            Sản phẩm sáng tạo môn VNR202 - Lịch sử Đảng Cộng sản Việt Nam
         </p>
      </footer>
    </div>
  )
}
