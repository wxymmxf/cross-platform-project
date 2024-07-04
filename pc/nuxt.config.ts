// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
import { fileURLToPath } from "url";
import { resolve } from 'path'

export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    'shared': fileURLToPath(new URL('../shared', import.meta.url)),
  },
  compatibilityDate: '2024-07-04',
})
