import { $, $$ } from '@/lib/dom'

const $nav = $('nav')
const $navLinks = $$('nav a[href^="#"]:not([href="#"])')

const $sections = $$('main section[id]').filter($sect =>
  $navLinks.some($link => $link.hash === `#${$sect.id}`),
)

const lastId = $sections.at(-1)?.id

const BAND = 2

let current = null

const setActive = id => {
  if (id === current) return
  current = id

  $navLinks.forEach($link => {
    $link.classList.toggle('active', $link.hash === `#${id}`)
  })
}

const atBottom = () =>
  globalThis.scrollY + globalThis.innerHeight >=
  document.documentElement.scrollHeight - 2

const observe = () => {
  const offset = $nav?.offsetHeight ?? 0
  const shrink = Math.max(0, globalThis.innerHeight - offset - BAND)

  const bandObserver = new IntersectionObserver(
    entries => {
      const entry = entries.find(({ isIntersecting }) => isIntersecting)

      if (entry) setActive(entry.target.id)
    },
    { rootMargin: `-${offset}px 0px -${shrink}px 0px`, threshold: 0 },
  )

  const bottomObserver = new IntersectionObserver(
    ([{ isIntersecting }]) => {
      if (isIntersecting && atBottom() && lastId) setActive(lastId)
    },
    { rootMargin: '0px 0px -100% 0px', threshold: 0 },
  )

  $sections.forEach($sect => {
    bandObserver.observe($sect)
    bottomObserver.observe($sect)
  })

  return () => {
    bandObserver.disconnect()
    bottomObserver.disconnect()
  }
}

let stop = observe()

globalThis.addEventListener('resize', () => {
  stop()
  stop = observe()
})
