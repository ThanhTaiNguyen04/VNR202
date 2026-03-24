"use client"

import React, { useState, useEffect } from "react"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent } from "@/components/ui/card"
import { STRATEGY_GAME_DATA, GameYear, GameCard, RandomEvent, RANDOM_EVENTS } from "@/lib/strategy-game-data"
import { TrendingUp, Users, Globe, Shield, AlertCircle, Trophy, RefreshCcw, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function StrategyGame() {
  const [round, setRound] = useState(0)
  const [stats, setStats] = useState({
    economy: 500,
    living: 500,
    diplomacy: 500,
    stability: 500,
  })
  const [history, setHistory] = useState<number[]>([])
  const [gameOver, setGameOver] = useState<"win" | "loss" | null>(null)
  const [milestone, setMilestone] = useState<string | null>(null)
  const [bonusEconomy, setBonusEconomy] = useState(1)
  const [diplomacyLock, setDiplomacyLock] = useState(0) // Rounds remaining for lock
  const [activeRandomEvent, setActiveRandomEvent] = useState<RandomEvent | null>(null)

  // Logic to handle 35 rounds with the available dataset
  // We will map 35 rounds into our 18 main historical steps
  const dataIndex = Math.floor((round / 35) * STRATEGY_GAME_DATA.length)
  const currentData = STRATEGY_GAME_DATA[Math.min(dataIndex, STRATEGY_GAME_DATA.length - 1)]

  // Check game over
  useEffect(() => {
    if (stats.economy <= 0 || stats.living <= 0 || stats.diplomacy <= 0 || stats.stability <= 0) {
      setGameOver("loss")
    }
  }, [stats])

  const handleChoice = (card: GameCard) => {
    if (gameOver) return

    // Difficulty scaling: Negatives become more severe as time goes on
    // Scale: from 1.0 (start) to 2.2 (end)
    const scaleFactor = 1 + (round / 35) * 1.2

    let effectMult = 1
    if (card.effects.economy > 0) effectMult = bonusEconomy

    const applyScale = (val: number) => {
        if (val < 0) return Math.round(val * scaleFactor)
        return val
    }

    const newStats = {
      economy: Math.min(1000, Math.max(0, stats.economy + applyScale(card.effects.economy) * effectMult)),
      living: Math.min(1000, Math.max(0, stats.living + applyScale(card.effects.living))),
      diplomacy: Math.min(1000, Math.max(0, stats.diplomacy + applyScale(card.effects.diplomacy))),
      stability: Math.min(1000, Math.max(0, stats.stability + applyScale(card.effects.stability))),
    }

    // Apply diplomacy lock if active: protected at 400 points
    if (diplomacyLock > 0) {
      newStats.diplomacy = Math.max(400, newStats.diplomacy)
      setDiplomacyLock(prev => prev - 1)
    }

    setStats(newStats)

    // Check milestones
    if (currentData?.year === 1995) {
      setMilestone("1995: Phá bỏ cấm vận! Chỉ số Ngoại giao được bảo vệ trong 5 vòng tới.")
      setDiplomacyLock(5)
    } else if (currentData?.year === 2007) {
      setMilestone("2007: Con tàu ra biển lớn! Hiệu suất kinh tế tăng 1.5x cho các thẻ bài tích cực.")
      setBonusEconomy(1.5)
    } else {
      setMilestone(null)
    }

    if (round >= 34) {
      setGameOver("win")
    } else {
        const nextDataIndex = Math.floor(((round + 1) / 35) * STRATEGY_GAME_DATA.length)
        const nextData = STRATEGY_GAME_DATA[Math.min(nextDataIndex, STRATEGY_GAME_DATA.length - 1)]

        // 1. Check if NEXT round has a FIXED event (100% chance)
        if (nextData && nextData.fixedEvent) {
            setActiveRandomEvent(nextData.fixedEvent)
        } 
        // 2. Otherwise roll for a generic Random event (11% chance)
        else {
            const willTrigger = Math.random() < 0.11
            if (willTrigger && round < 33) {
                const randomEvt = RANDOM_EVENTS[Math.floor(Math.random() * RANDOM_EVENTS.length)]
                setActiveRandomEvent(randomEvt)
            } else {
                setRound(prev => prev + 1)
            }
        }
    }
  }

  const resolveRandomEvent = () => {
    if (!activeRandomEvent) return
    
    // Scaling for random events too
    const scaleFactor = 1 + (round / 35) * 1.2
    const applyScale = (val: number) => val < 0 ? Math.round(val * scaleFactor) : val

    setStats(prev => ({
        economy: Math.min(1000, Math.max(0, prev.economy + applyScale(activeRandomEvent.effects.economy))),
        living: Math.min(1000, Math.max(0, prev.living + applyScale(activeRandomEvent.effects.living))),
        diplomacy: Math.min(1000, Math.max(0, prev.diplomacy + applyScale(activeRandomEvent.effects.diplomacy))),
        stability: Math.min(1000, Math.max(0, prev.stability + applyScale(activeRandomEvent.effects.stability))),
    }))
    
    setActiveRandomEvent(null)
    setRound(prev => prev + 1)
  }

  const resetGame = () => {
    setRound(0)
    setStats({ economy: 500, living: 500, diplomacy: 500, stability: 500 })
    setGameOver(null)
    setMilestone(null)
    setBonusEconomy(1)
    setDiplomacyLock(0)
    setActiveRandomEvent(null)
    // Round 0 trigger will handle shuffle
  }

  return (
    <div className={`w-full max-w-6xl mx-auto p-4 md:p-8 transition-all duration-1000 ${bonusEconomy > 1 ? 'bg-blue-50/30' : ''}`}>
      {/* Header Info */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold font-serif text-[#8B0000]">Hành Trình Tỏa Sáng</h2>
          <p className="text-gray-600">Năm mô phỏng: <span className="font-bold text-red-600">{currentData?.year || 2021}</span> <span className="text-sm border-l pl-3 ml-3 border-gray-300">(Vòng {round + 1} / 35)</span></p>
        </div>
        
        <div className="flex gap-4 flex-wrap justify-center">
            <MetricBox label="Kinh tế" value={stats.economy} icon={<TrendingUp className="w-4 h-4" />} color="bg-blue-600" />
            <MetricBox label="Đời sống" value={stats.living} icon={<Users className="w-4 h-4" />} color="bg-green-600" />
            <MetricBox label="Ngoại giao" value={stats.diplomacy} icon={<Globe className="w-4 h-4" />} color="bg-purple-600" glow={diplomacyLock > 0} />
            <MetricBox label="Ổn định" value={stats.stability} icon={<Shield className="w-4 h-4" />} color="bg-orange-600" />
        </div>
      </div>

      {milestone && !activeRandomEvent && (
        <div className="mb-6 p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 rounded flex items-center gap-3 animate-bounce">
          <Star className="w-6 h-6 fill-yellow-500" />
          <span className="font-bold">{milestone}</span>
        </div>
      )}

      {activeRandomEvent && (
          <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-md flex items-center justify-center p-4">
              <div className={`bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 border-4 animate-in zoom-in-95 duration-300 ${activeRandomEvent.isFixed ? 'border-blue-200' : 'border-red-200'}`}>
                <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${activeRandomEvent.isFixed ? 'bg-blue-100' : 'bg-red-100'}`}>
                    <AlertCircle className={`w-12 h-12 ${activeRandomEvent.isFixed ? 'text-blue-600' : 'text-red-600'}`} />
                </div>
                <h3 className={`text-2xl font-bold text-center mb-2 ${activeRandomEvent.isFixed ? 'text-blue-700' : 'text-red-700'}`}>
                    {activeRandomEvent.isFixed ? 'SỰ KIỆN LỊCH SỬ' : 'BIẾN CỐ BẤT NGỜ!'}
                </h3>
                <h4 className="text-xl font-bold text-center mb-4">{activeRandomEvent.title}</h4>
                <p className="text-center text-gray-600 mb-8 leading-relaxed">{activeRandomEvent.description}</p>
                
                <div className="grid grid-cols-2 gap-3 mb-8">
                    {Object.entries(activeRandomEvent.effects).map(([key, value]) => {
                        const val = value as number
                        if (val === 0) return null
                        const labels: Record<string, string> = { economy: 'Kinh tế', living: 'Đời sống', diplomacy: 'Ngoại giao', stability: 'Ổn định' }
                        return (
                            <div key={key} className={`flex justify-between px-3 py-2 rounded border font-bold text-sm ${activeRandomEvent.isFixed ? 'bg-blue-50 border-blue-100 text-blue-700' : 'bg-red-50 border-red-100 text-red-700'}`}>
                                <span>{labels[key]}</span>
                                <span>{val < 0 ? val : `+${val}`}</span>
                            </div>
                        )
                    })}
                </div>

                <Button 
                    onClick={resolveRandomEvent} 
                    className={`w-full py-6 text-lg rounded-xl text-white ${activeRandomEvent.isFixed ? 'bg-blue-700 hover:bg-blue-800' : 'bg-red-700 hover:bg-red-800'}`}
                >
                    {activeRandomEvent.isFixed ? 'Tiếp nhận lịch sử' : 'Chấp nhận và Đương đầu'}
                </Button>
              </div>
          </div>
      )}

      {!gameOver ? (
        <div className={`space-y-8 ${activeRandomEvent ? 'opacity-20 pointer-events-none' : 'opacity-100'}`}>
          <div className="text-center bg-white/40 backdrop-blur-sm p-4 rounded-xl border border-red-100">
            <h3 className="text-xl font-bold mb-2">{currentData?.label}</h3>
            <p className="text-gray-700 italic">"Lựa chọn một quyết định chiến lược để dẫn dắt đất nước."</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {currentData?.cards.map((card, idx) => (
              <div 
                key={`${round}-${idx}`}
                className="group relative flex flex-col h-full cursor-pointer"
                onClick={() => handleChoice(card)}
              >
                <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 group-hover:ring-2 group-hover:ring-red-500 bg-white/80 backdrop-blur-md shadow-md hover:shadow-xl">
                  <div 
                    className="h-40 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500" 
                    style={{ backgroundImage: `url(${card.image})` }}
                  />
                  <CardContent className="p-5 flex-grow flex flex-col">
                    <h4 className="font-bold text-lg mb-2 group-hover:text-red-700 transition-colors">{card.title}</h4>
                    <p className="text-sm text-gray-600 mb-6 flex-grow">{card.description}</p>
                    
                    <div className="grid grid-cols-2 gap-2 text-xs font-semibold mt-auto">
                      <EffectTag label="KT" val={card.effects.economy} mult={bonusEconomy} />
                      <EffectTag label="DS" val={card.effects.living} />
                      <EffectTag label="NG" val={card.effects.diplomacy} />
                      <EffectTag label="ÔĐ" val={card.effects.stability} />
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 bg-white/60 backdrop-blur-xl rounded-3xl border-2 border-dashed border-red-200">
          {gameOver === "win" ? (
            <div className="text-center px-4">
              <Trophy className="w-24 h-24 text-yellow-500 mx-auto mb-6 animate-pulse" />
              <h3 className="text-4xl font-bold text-green-700 mb-4">CHIẾN THẮNG HUY HOÀNG!</h3>
              <p className="text-xl max-w-2xl mx-auto mb-8 font-serif italic text-gray-800">
                "Đất nước ta chưa bao giờ có được cơ đồ, tiềm lực, vị thế và uy tín quốc tế như ngày nay."
              </p>
              <p className="text-gray-600 mb-10">- Chúc mừng bạn đã dẫn dắt dân tộc qua 35 năm Đổi mới rực rỡ -</p>
            </div>
          ) : (
            <div className="text-center px-4">
              <AlertCircle className="w-24 h-24 text-red-500 mx-auto mb-6" />
              <h3 className="text-4xl font-bold text-red-700 mb-4">THẤT BẠI TRONG THỬ TIẾP</h3>
              <p className="text-xl max-w-md mx-auto mb-10 text-gray-700">
                Sức ép từ các chỉ số đã khiến công cuộc Đổi mới gặp trở ngại. Hãy thử lại với tầm nhìn chiến lược mới.
              </p>
            </div>
          )}
          <Button onClick={resetGame} size="lg" className="bg-[#8B0000] hover:bg-red-800 text-white gap-2 px-10 rounded-full py-6 text-xl">
            <RefreshCcw className="w-6 h-6" /> Thử lại hành trình
          </Button>
        </div>
      )}
    </div>
  )
}

function MetricBox({ label, value, icon, color, glow }: { label: string, value: number, icon: React.ReactNode, color: string, glow?: boolean }) {
  return (
    <div className={`flex flex-col p-2 min-w-[100px] rounded-lg border bg-white shadow-sm transition-all ${glow ? 'ring-2 ring-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.5)]' : ''}`}>
      <div className="flex items-center gap-2 mb-1">
        <span className={`${color} text-white p-1 rounded-sm`}>{icon}</span>
        <span className="text-[10px] uppercase font-bold text-gray-500">{label}</span>
      </div>
      <div className="flex items-end justify-between">
        <span className="text-xl font-bold">{Math.round(value)}</span>
        <span className="text-[10px] text-gray-400 font-mono mb-1">/1000</span>
      </div>
      <Progress value={(value / 1000) * 100} className="h-1.5 mt-1" indicatorClassName={color} />
    </div>
  )
}

function EffectTag({ label, val, mult = 1 }: { label: string, val: number, mult?: number }) {
  if (val === 0) return null
  const displayVal = val > 0 ? `+${Math.round(val * mult)}` : Math.round(val)
  const colorClass = val > 0 ? "text-green-600" : "text-red-600"
  return (
    <div className={`flex justify-between px-2 py-1 rounded bg-gray-50 border ${colorClass}`}>
      <span>{label}</span>
      <span>{displayVal}</span>
    </div>
  )
}
