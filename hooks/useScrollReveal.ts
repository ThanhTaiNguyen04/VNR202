import { useEffect, useRef, useState } from 'react'

interface UseScrollRevealOptions {
  threshold: number
  rootMargin: string
  triggerOnce: boolean
  delay: number
}

const defaultOptions: UseScrollRevealOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px',
  triggerOnce: true,
  delay: 0,
}

export function useScrollReveal(options: Partial<UseScrollRevealOptions> = {}) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)
  const elementRef = useRef<HTMLElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout>()

  const mergedOptions = { ...defaultOptions, ...options }

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (mergedOptions.delay > 0) {
            timeoutRef.current = setTimeout(() => {
              setIsVisible(true)
              if (mergedOptions.triggerOnce) {
                setHasTriggered(true)
              }
            }, mergedOptions.delay)
          } else {
            setIsVisible(true)
            if (mergedOptions.triggerOnce) {
              setHasTriggered(true)
            }
          }
        } else if (!mergedOptions.triggerOnce && !hasTriggered) {
          setIsVisible(false)
        }
      },
      {
        threshold: mergedOptions.threshold,
        rootMargin: mergedOptions.rootMargin,
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [mergedOptions.threshold, mergedOptions.rootMargin, mergedOptions.triggerOnce, mergedOptions.delay, hasTriggered])

  return [elementRef, isVisible] as const
}

export function useScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = window.scrollY / totalHeight
      setScrollProgress(Math.min(Math.max(progress, 0), 1))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return scrollProgress
}

export function useParallaxOffset(speed = 0.5) {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * speed)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return offset
}