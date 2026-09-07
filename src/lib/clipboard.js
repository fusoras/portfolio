import { $ } from '@/lib/dom.ts'

const $btnCopy = $('.btn-copy')
const $textElement = $('.mail')
const $tooltip = $('.copy-tooltip')
let hideTimer

$btnCopy?.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(
      $textElement?.querySelector('p')?.textContent.trim() ?? '',
    )
  } catch (err) {
    console.error('Copy error:', err)
    return
  }

  if (!$tooltip) return
  $tooltip.classList.add('show')
  clearTimeout(hideTimer)
  hideTimer = setTimeout(() => $tooltip.classList.remove('show'), 1000)
})