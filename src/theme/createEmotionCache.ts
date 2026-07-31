import createCache from '@emotion/cache'
import { prefixer } from 'stylis'
import rtlPlugin from 'stylis-plugin-rtl'

/**
 * Creates an Emotion cache configured for the given direction.
 * RTL uses stylis-plugin-rtl to automatically mirror MUI's generated
 * CSS (margins, paddings, positions) so components don't need manual
 * left/right overrides.
 */
export function createEmotionCache(direction: 'ltr' | 'rtl') {
  return createCache({
    key: direction === 'rtl' ? 'muirtl' : 'muiltr',
    stylisPlugins: direction === 'rtl' ? [prefixer, rtlPlugin] : [prefixer],
  })
}
