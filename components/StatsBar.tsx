"use client"

import { useState, useEffect, useRef } from 'react'

interface CounterProps {
  end: number
  duration: number
}

function Counter({ end, duration }: CounterProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef(0) 
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null) 

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect() 
        }
      },
      { threshold: 0.1 } 
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return 

    const incrementTime = 20 
    const stepTime = Math.abs(Math.floor(duration / incrementTime))
    const increment = end / stepTime
    
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.ceil(current))
      }
    }, incrementTime)

    return () => clearInterval(timer)
  }, [isVisible, end, duration])

  return <span ref={sectionRef}>{count.toLocaleString()}</span>
}

export default function StatsBar() {
  return (
    <section className="relative z-20 -mt-20 pb-8">
      <div className="container mx-auto px-6">
        {/* 
           CHANGES:
           bg-[#e63946] -> Enforces the solid red color (Same as Navbar).
           This prevents the Hero image from affecting the background.
        */}
        <div className="bg-[#e63946] text-white rounded-lg shadow-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
            
            {/* Stat 1 */}
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-5xl md:text-6xl font-extrabold mb-2">
                <Counter end={1200} duration={2500} />+
              </h3>
              <p className="text-lg md:text-xl font-medium">People helped in Tigania West</p>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-5xl md:text-6xl font-extrabold mb-2">
                <Counter end={350} duration={2500} />+
              </h3>
              <p className="text-lg md:text-xl font-medium">Emergency cases supported</p>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-5xl md:text-6xl font-extrabold mb-2">
                <Counter end={85} duration={2500} />
              </h3>
              <p className="text-lg md:text-xl font-medium">Volunteers engaged</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}