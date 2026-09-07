class ThemeToggle extends HTMLElement {
  $root = document.documentElement
  buttonType = this.dataset.button

  connectedCallback() {
    this.init()
  }

  init() {
    if (this.buttonType === 'checkbox') {
      this.addEventListener('click', ev => {
        const $target = ev.target instanceof Element ? ev.target : null
        const $themeToggle = $target?.closest('[data-theme-toggle]')
        if ($themeToggle instanceof HTMLElement) {
          this.handleToggleClick()
        }
      })
    }

    if (this.buttonType === 'menu') {
      const saveTheme = localStorage.getItem('theme')
      const $select = this.querySelector('[data-select]')

      if (!($select instanceof HTMLSelectElement)) return

      if (saveTheme === 'dark' || saveTheme === 'light') {
        $select.value = saveTheme
      }
      $select.addEventListener('change', ev => {
        if (!(ev.target instanceof HTMLSelectElement)) return
        const currentValue = ev.target.value
        this.$root.dataset.theme = currentValue
        localStorage.setItem('theme', currentValue)
      })
    }
  }
  handleToggleClick() {
    const nextTheme = this.$root.dataset.theme === 'dark' ? 'light' : 'dark'

    const switchTheme = () => {
      this.$root.dataset.theme = nextTheme
      localStorage.setItem('theme', nextTheme)
    }

    if (!document.startViewTransition) {
      switchTheme()
      return
    }

    document.startViewTransition(switchTheme)
  }
}

customElements.define('theme-toggle', ThemeToggle)
