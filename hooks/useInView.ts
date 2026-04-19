'use client'

import { useRef, useState, useEffect, RefObject } from 'react'

interface UseInViewOptions {
  threshold?: number
  once?: boolean
  rootMargin?: string
}

export function useInView<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.12,
  once = true,
  rootMargin = '0px',
}: UseInViewOptions = {}): { ref: RefObject<T>; isVisible: boolean } {
  const ref = useRef<T>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) observer.unobserve(el)
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, once, rootMargin])

  return { ref, isVisible }
}
