import { useEffect, useState, useRef } from 'react'

export function useCountAnimation(
  targetValue: number,
  duration: number = 2000,
  startAnimation: boolean = false
) {
  const [count, setCount] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const animationRef = useRef<number>()
  const startTimeRef = useRef<number>()

  useEffect(() => {
    if (!startAnimation) return

    setIsAnimating(true)
    const startTime = Date.now()
    startTimeRef.current = startTime

    const animate = () => {
      const now = Date.now()
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function for smooth animation
      const easedProgress = 1 - Math.pow(1 - progress, 3)
      const currentValue = Math.floor(targetValue * easedProgress)

      setCount(currentValue)

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate)
      } else {
        setCount(targetValue)
        setIsAnimating(false)
      }
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [targetValue, duration, startAnimation])

  return { count, isAnimating }
}

export function useStaggeredAnimation(
  items: any[],
  delay: number = 100,
  startAnimation: boolean = false
) {
  const [visibleItems, setVisibleItems] = useState<number[]>([])

  useEffect(() => {
    if (!startAnimation) return

    setVisibleItems([])

    items.forEach((_, index) => {
      setTimeout(() => {
        setVisibleItems(prev => [...prev, index])
      }, index * delay)
    })
  }, [items.length, delay, startAnimation])

  return visibleItems
}

export function formatNumber(num: number, isGDP: boolean = false): string {
  if (isGDP) {
    if (num < 1000) return `$${num} triệu`
    return `$${num} tỷ`
  }

  if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}K`
  }
  return num.toString()
}

export function formatGDPValue(value: number): string {
  if (value >= 1000) {
    return `$${value} tỷ`
  } else if (value >= 100) {
    return `$${value.toFixed(1)} tỷ`
  } else {
    return `$${value} triệu`
  }
}