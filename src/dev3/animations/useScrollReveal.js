import { useState, useEffect, useRef } from 'react'

/**
 * useScrollReveal — Triggers a reveal animation when element enters the viewport.
 * Returns a ref to attach to the target element and a boolean `isVisible`.
 */
export function useScrollReveal(options = {}) {
  const { threshold = 0.15, rootMargin = '0px 0px -60px 0px', once = true } = options
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) observer.unobserve(element)
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return { ref, isVisible }
}

/**
 * useStaggerReveal — Returns props for stagger-animated children.
 * Each child gets a delay based on its index for a cascade effect.
 */
export function getStaggerDelay(index, baseDelay = 100) {
  return {
    transitionDelay: `${index * baseDelay}ms`,
  }
}

/**
 * CSS class presets for common animation patterns.
 * Apply these alongside the `isVisible` boolean from useScrollReveal.
 */
export const revealStyles = {
  fadeUp: {
    hidden: 'opacity-0 translate-y-8',
    visible: 'opacity-100 translate-y-0',
  },
  fadeIn: {
    hidden: 'opacity-0',
    visible: 'opacity-100',
  },
  scaleUp: {
    hidden: 'opacity-0 scale-95',
    visible: 'opacity-100 scale-100',
  },
  slideLeft: {
    hidden: 'opacity-0 translate-x-8',
    visible: 'opacity-100 translate-x-0',
  },
  slideRight: {
    hidden: 'opacity-0 -translate-x-8',
    visible: 'opacity-100 translate-x-0',
  },
}
