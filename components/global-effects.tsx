"use client"

import { useEffect, useState, useRef } from 'react'

export default function GlobalEffects() {
  return (
    <>
      {/* Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Page Transition Overlay */}
      <PageTransition />

      {/* Background Grid Pattern */}
      <BackgroundGrid />
    </>
  )
}

function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = window.scrollY / totalHeight
      setScrollProgress(Math.min(Math.max(progress, 0), 1))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50 bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-[#DA251D] to-[#FF6B6B] transition-all duration-100"
        style={{
          width: `${scrollProgress * 100}%`,
          boxShadow: scrollProgress > 0 ? '0 0 10px rgba(218, 37, 29, 0.5)' : 'none'
        }}
      />
    </div>
  )
}

function PageTransition() {
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    // This would be controlled by Next.js router events in a real implementation
    const handleRouteChange = () => {
      setIsTransitioning(true)
      setTimeout(() => setIsTransitioning(false), 800)
    }

    // For demo purposes, we'll trigger on hash changes
    window.addEventListener('hashchange', handleRouteChange)
    return () => window.removeEventListener('hashchange', handleRouteChange)
  }, [])

  if (!isTransitioning) return null

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-[#DA251D] to-[#B91C1C] animate-slideIn" />
    </div>
  )
}

function BackgroundGrid() {
  return (
    <div className="fixed inset-0 pointer-events-none opacity-5 z-0">
      <div
        className="w-full h-full"
        style={{
          backgroundImage: `
            linear-gradient(rgba(218, 37, 29, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(218, 37, 29, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
    </div>
  )
}