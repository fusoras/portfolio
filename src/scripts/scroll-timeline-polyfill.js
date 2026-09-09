// Carga el polyfill solo si faltan Scroll-driven Animations nativas.
try {
  const hasNative =
    CSS?.supports?.('animation-timeline: scroll()') &&
    'ViewTimeline' in globalThis
  if (!hasNative) {
    const reduced = matchMedia?.('(prefers-reduced-motion: reduce)')?.matches
    if (!reduced) {
      await import('scroll-timeline-polyfill/dist/scroll-timeline.js')
    }
  }
} catch (error) {
  console.warn('[scroll-timeline-polyfill] no se pudo cargar:', error)
}
