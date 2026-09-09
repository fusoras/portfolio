// Carga el polyfill solo si falta la Popover API nativa.
try {
  if (!('showPopover' in HTMLElement.prototype)) {
    await import('@oddbird/popover-polyfill')
  }
} catch (error) {
  console.warn('[popover-polyfill] no se pudo cargar:', error)
}
