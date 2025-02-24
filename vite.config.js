import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  ssr: {
    noExternal: ['sveltestrap', '@popperjs/core']
  }
};

export default config;
