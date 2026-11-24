// @ts-check
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  vite: {
    css: {
      transformer: 'lightningcss',
      lightningcss: {
        drafts: {
          customMedia: true,
        },
      },
    },
  },
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'es',
    routing: {
      prefixDefaultLocale: false,
    },
  },
})
