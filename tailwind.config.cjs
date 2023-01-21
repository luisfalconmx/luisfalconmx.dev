/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'deepsky-blue': '#16B4F2',
        'navy-blue': '#4C32E0',
        pomelo: '#F1B000',
        error: '#FF2727',
        dark: {
          50: '#F5F5F6',
          100: '#DFDFDF',
          200: '#AAAAB7',
          300: '#404152',
          400: '#060A11'
        }
      },
      boxShadow: {
        custom: '0px 4px 24px rgba(0, 0, 0, 0.08);'
      }
    }
  },
  plugins: []
}
