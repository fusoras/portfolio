class ColorPicker extends HTMLElement {
  $root = document.documentElement
  customProperty = this.dataset.customProperty ?? '--clrp-accent'

  connectedCallback() {
    this.init()
  }

  init() {
    const $colorInput = this.querySelector('[data-colorpicker]')
    if (!($colorInput instanceof HTMLInputElement)) return

    const defaultColor = $colorInput.value

    $colorInput.addEventListener('input', () => {
      this.$root.style.setProperty(this.customProperty, $colorInput.value)
      this.classList.toggle('has-color', $colorInput.value !== defaultColor)
    })

    const $resetColor = this.querySelector('[data-resetcolor]')
    $resetColor?.addEventListener('click', () => {
      $colorInput.value = defaultColor
      this.$root.style.removeProperty(this.customProperty)
      this.classList.remove('has-color')
    })
  }
}

customElements.define('color-picker', ColorPicker)
