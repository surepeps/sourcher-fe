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
        'textWhite': '#FFFFFF',
        'textPurple': '#591664',
        'awimGreen': '#004C3F',
        'awimFadeGreen': '#004C3F90',
        'awimYellow': '#F1A24C',
        'letterColor5': '#0F172A5',
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

