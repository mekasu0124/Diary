/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./tests/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#440028',
        bg2: '#651142',
        hvr: '#D1258A',
        bdr: '#a95486',
        shadow: 'black',
        fg: '#CB87AF',
      },
    },
    fontFamily: {
      rancho: ["Rancho"],
    },
  },
  plugins: [],
}

