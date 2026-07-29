// @ts-check
import { defineConfig } from 'astro/config'
import supersvgPlugin from 'vite-plugin-supersvg'

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
    plugins: [supersvgPlugin()],
  },
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'es',
    routing: {
      prefixDefaultLocale: false,
    },
  },
})
