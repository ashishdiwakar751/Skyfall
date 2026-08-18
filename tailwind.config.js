/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#080807',
          secondary: '#11100E',
          charcoal: '#181613',
        },
        gold: {
          champagne: '#D6B15A',
          bronze: '#A8792F',
        },
        text: {
          primary: '#F5F1E8',
          muted: '#AAA49A',
        },
        border: {
          subtle: '#2A2823',
        },
      },
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Manrope"', 'sans-serif'],
      },
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}
