import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Runs a GSAP scope callback once the DOM ref is ready and cleans up
 * all ScrollTriggers created inside it on unmount. Pass a ref to the
 * section root and a setup function that receives (gsap, ScrollTrigger).
 */
export function useScrollScene(
  ref: React.RefObject<HTMLElement>,
  setup: (ctx: { gsap: typeof gsap; ScrollTrigger: typeof ScrollTrigger }) => void,
  deps: unknown[] = [],
) {
  useEffect(() => {
    if (!ref.current) return
    const ctx = gsap.context(() => {
      setup({ gsap, ScrollTrigger })
    }, ref)
    return () => ctx.revert()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}

export { gsap, ScrollTrigger }
