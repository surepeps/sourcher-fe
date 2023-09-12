/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'bgColor': '#FFFFFF',
        'textPurple': '#591664',
        'awimGreen': '#004C3F',
        'awimFadeGreen': '#004C3F90',
        'awimYellow': '#F1A24C',
      },
      fontFamily: {
        notoSans: ['Noto Sans', 'sans'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

