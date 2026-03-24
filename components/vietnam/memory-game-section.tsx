"use client"

import React, { useState, useEffect } from "react"
import { CheckCircle2, RotateCcw } from "lucide-react"

// Shuffle function
function shuffle(array: any[]) {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

const CARDS_DATA = [
  { pairId: 1, type: "past", text: "Lạm phát phi mã 774% (1986)" },
  { pairId: 1, type: "present", text: "Lạm phát kiểm soát ở mức <4% (2022)" },
  { pairId: 2, type: "past", text: "Bị bao vây, cấm vận" },
  { pairId: 2, type: "present", text: "Quan hệ ngoại giao với 193 nước" },
  { pairId: 3, type: "past", text: "Tỷ lệ đói nghèo 58.1% (1993)" },
  { pairId: 3, type: "present", text: "Tỷ lệ hộ nghèo đa chiều 2.93% (2023)" },
  { pairId: 4, type: "past", text: "Thiếu lương thực trầm trọng" },
  { pairId: 4, type: "present", text: "Cường quốc xuất khẩu gạo hàng đầu thế giới" },
]

export default function MemoryGameSection() {
  const [cards, setCards] = useState<{ id: number; pairId: number; type: string; text: string }[]>([])
  const [flippedIds, setFlippedIds] = useState<number[]>([])
  const [matchedPairIds, setMatchedPairIds] = useState<number[]>([])
  const [won, setWon] = useState(false)

  // Initialize game
  useEffect(() => {
    startNewGame()
  }, [])

  const startNewGame = () => {
    const initialCards = CARDS_DATA.map((c, idx) => ({ ...c, id: idx }))
    setCards(shuffle(initialCards))
    setFlippedIds([])
    setMatchedPairIds([])
    setWon(false)
  }

  // Handle card click
  const handleCardClick = (id: number, pairId: number) => {
    if (flippedIds.length === 2) return // Prevent clicking more than 2
    if (flippedIds.includes(id)) return // Already flipped
    if (matchedPairIds.includes(pairId)) return // Already matched

    const newFlipped = [...flippedIds, id]
    setFlippedIds(newFlipped)

    if (newFlipped.length === 2) {
      const card1 = cards.find((c) => c.id === newFlipped[0])
      const card2 = cards.find((c) => c.id === newFlipped[1])

      if (card1?.pairId === card2?.pairId) {
        // Match!
        setTimeout(() => {
          setMatchedPairIds((prev) => {
            const newMatched = [...prev, card1!.pairId]
            if (newMatched.length === 4) {
              setTimeout(() => setWon(true), 800)
            }
            return newMatched
          })
          setFlippedIds([])
        }, 1000)
      } else {
        // No match
        setTimeout(() => {
          setFlippedIds([])
        }, 1500)
      }
    }
  }

  return (
    <section className="w-full py-20 px-4 sm:px-6 relative z-10 bg-white/50 border-y border-[rgba(185,28,28,0.1)]">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#8B0000] font-serif mb-4 flex items-center justify-center gap-3">
            <span className="w-8 h-[2px] bg-[#8B0000] inline-block"></span>
            Lật Mở Bức Tranh Toàn Cảnh
            <span className="w-8 h-[2px] bg-[#8B0000] inline-block"></span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Hãy lật mở và tìm cặp mảnh ghép tương ứng giữa <strong className="text-red-700">Thách thức xưa</strong> và <strong className="text-blue-700">Thành tựu nay</strong> để thấy được sự lột xác toàn diện của đất nước.
          </p>
        </div>

        {/* Game Container */}
        <div className="relative w-full max-w-3xl aspect-[4/3] sm:aspect-video rounded-xl overflow-hidden shadow-2xl border-4 border-[#8B0000]/20 bg-gray-900">
          
          {/* Background Image / The Puzzle Picture */}
          {/* Using a placeholder vibrant image of VN (Ho Chi Minh City / Landmark 81 style) */}
          <div 
            className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${won ? 'opacity-100 scale-100 blur-none' : 'opacity-40 scale-105 blur-[2px]'}`}
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1583417657208-c89163df1cf6?q=80&w=2670&auto=format&fit=crop")' }}
          ></div>
          <div className={`absolute inset-0 bg-black/40 transition-opacity duration-1000 ${won ? 'opacity-50' : 'opacity-80'}`}></div>

          {/* Cards Grid */}
          <div className="absolute inset-0 z-10 p-4 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pointer-events-none">
            {cards.map((card) => {
              const isMatched = matchedPairIds.includes(card.pairId)
              const isFlipped = flippedIds.includes(card.id) || isMatched
              
              // When matched, the card becomes highly transparent to reveal the background, 
              // but text stays visible or we just hide the card completely to reveal the puzzle.
              // Let's make matched cards completely opacity-0 to reveal the beautiful image!
              const cardOpacityClass = isMatched ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100 pointer-events-auto"

              return (
                <div 
                  key={card.id} 
                  className={`relative perspective-1000 w-full h-full transition-all duration-700 ease-in-out cursor-pointer ${cardOpacityClass}`}
                  onClick={() => handleCardClick(card.id, card.pairId)}
                >
                  <div className={`w-full h-full duration-500 preserve-3d relative ${isFlipped ? 'rotate-y-180' : ''}`}>
                    
                    {/* Front of card (Face down) - A pattern or logo */}
                    <div className="absolute inset-0 backface-hidden w-full h-full bg-gradient-to-br from-[#8B0000] to-red-900 rounded-lg shadow-md flex items-center justify-center border-2 border-red-300/30 hover:border-yellow-400 focus:outline-none transition-colors">
                      <div className="w-12 h-12 rounded-full border border-yellow-400/50 flex items-center justify-center">
                        <span className="text-yellow-400 text-2xl font-serif">★</span>
                      </div>
                    </div>

                    {/* Back of card (Face up) - The text */}
                    <div className={`absolute inset-0 w-full h-full rounded-lg shadow-lg flex flex-col items-center justify-center p-3 text-center rotate-y-180 backface-hidden border-2 
                      ${card.type === 'past' ? 'bg-orange-50 border-orange-300 text-orange-900' : 'bg-blue-50 border-blue-300 text-blue-900'}
                    `}>
                      <span className={`text-xs font-bold uppercase tracking-wider mb-2 ${card.type === 'past' ? 'text-orange-600' : 'text-blue-600'}`}>
                        {card.type === 'past' ? 'Thử thách' : 'Thành tựu'}
                      </span>
                      <p className="text-sm font-medium leading-snug">
                        {card.text}
                      </p>
                    </div>

                  </div>
                </div>
              )
            })}
          </div>

          {/* Victory Overlay */}
          <div className={`absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center transition-all duration-1000 ${won ? 'opacity-100 pointer-events-auto backdrop-blur-[2px]' : 'opacity-0 pointer-events-none'}`}>
            <div className="bg-white/90 backdrop-blur-md border border-yellow-400 p-8 rounded-2xl shadow-2xl max-w-2xl transform transition-transform duration-700 delay-300 scale-95 hover:scale-100">
              <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#8B0000] mb-6">
                Tuyệt vời! Bạn đã mở bức tranh thành tựu.
              </h3>
              <div className="relative">
                <span className="text-4xl text-yellow-500 absolute -top-4 -left-4 font-serif">"</span>
                <p className="text-lg sm:text-xl font-medium text-gray-800 italic relative z-10 px-4">
                  Đất nước ta chưa bao giờ có được cơ đồ, tiềm lực, vị thế và uy tín quốc tế như ngày nay.
                </p>
                <span className="text-4xl text-yellow-500 absolute -bottom-8 -right-4 font-serif">"</span>
              </div>
              <p className="text-right text-gray-600 mt-4 font-semibold">
                - Tổng Bí thư Nguyễn Phú Trọng -
              </p>
              
              <button 
                onClick={startNewGame}
                className="mt-8 px-6 py-2.5 bg-[#8B0000] hover:bg-red-800 text-white font-medium rounded-full shadow-md transition-all flex items-center gap-2 mx-auto"
              >
                <RotateCcw className="w-4 h-4" />
                Chơi lại
              </button>
            </div>
          </div>
        </div>

        {/* Global styles for 3D flip card, required since Tailwind doesn't have these by default */}
        <style dangerouslySetInnerHTML={{__html: `
          .perspective-1000 {
            perspective: 1000px;
          }
          .preserve-3d {
            transform-style: preserve-3d;
          }
          .backface-hidden {
            backface-visibility: hidden;
          }
          .rotate-y-180 {
            transform: rotateY(180deg);
          }
        `}} />
      </div>
    </section>
  )
}
