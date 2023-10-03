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
        'awimLightPurple': '#7A3785',
        'awimGreen': '#004C3F',
        'awimGray80': '#DEDEDE80',
        'awimFadeGreen': '#004C3F90',
        'awimYellow': '#F1A24C',
        'awimLightYellow': '#F1A24C10',
        'letterColor5': '#0F172A5',
        'awimGray': '#F2F4F7',
        'awimPink80': '#FADDFF80',
        'awimPink70': '#FADDFF70',
        'awimPink60': '#FADDFF60',
        'awimPink50': '#FADDFF50',
        'awimPink40': '#FADDFF40',
        'awimPink30': '#FADDFF30',
        'awimDarkBlue': '#0F172A',
        'awimInputBorder': '#969595',
        'awimRed': '#EB0E3E',
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

