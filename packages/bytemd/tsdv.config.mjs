// @ts-check
import { defineConfig } from 'tsdv'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { sveltePreprocessor } from './build.mjs'

// nullish coalescing in es2020
// TODO: 'decode-named-character-reference'
export default defineConfig({
  target: 'es2019',
  tsc: false,
  plugins: [
    svelte({
      preprocess: [sveltePreprocessor],
    }),
  ],
})