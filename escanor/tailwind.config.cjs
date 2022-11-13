/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: {
            light: '#004B74',
            dark: '#013B5A',
          },
          secondary: {
            light: '#EBEBEB',
            dark: '#1B252B ',
            darkest: '#141D23',
          },
          accent: {
            light: '#E88E22',
            soft: '#F2A03F',
          }
        },
        transparent: 'transparent',
      },
    },
  },
  plugins: [],
}
