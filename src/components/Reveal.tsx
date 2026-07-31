import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  delay?: number
  y?: number
  blur?: boolean
  duration?: number
  once?: boolean
  className?: string
}

/**
 * Fade + rise (+ optional blur) reveal, triggered when the element
 * enters the viewport. Used throughout the site for a consistent,
 * unhurried "walking through the hotel" pacing.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 40,
  blur = true,
  duration = 1.1,
  once = true,
  className,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: blur ? 'blur(10px)' : 'blur(0px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once, amount: 0.3 }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

interface StaggerProps {
  children: ReactNode[]
  delayStep?: number
  className?: string
}

/** Staggers a list of children (e.g. words, letters, cards) into view. */
export function Stagger({ children, delayStep = 0.09, className }: StaggerProps) {
  return (
    <div className={className}>
      {children.map((child, i) => (
        <Reveal key={i} delay={i * delayStep} y={26}>
          {child}
        </Reveal>
      ))}
    </div>
  )
}
