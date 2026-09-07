import { $, $$ } from '@/lib/dom'

const $sections = $$('section')
const $navLinks = $$('nav a')

globalThis.addEventListener(
  'scroll',
  () => {
    $sections.forEach($sect => {
      const top = globalThis.scrollY
      const offset = $sect.offsetTop
      const height = $sect.offsetHeight
      const id = $sect.getAttribute('id')

      if (top >= offset && top < offset + height) {
        $navLinks.forEach($links => {
          $links.classList.remove('active')
          const $activeLink = $(`nav a[href*=${id}]`)
          if ($activeLink) {
            $activeLink.classList.add('active')
          }
        })
      }
    })
  },
  { passive: true },
)
