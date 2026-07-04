/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: '#22302d',
        fern: '#3f6f58',
        sky: '#7aa6c2',
        coral: '#dc735f',
        butter: '#f4c85f',
        petal: '#f8d9d2',
        linen: '#fff8ef',
        mist: '#e9f2ec',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 45px rgba(34, 48, 45, 0.12)',
      },
    },
  },
  plugins: [],
};
