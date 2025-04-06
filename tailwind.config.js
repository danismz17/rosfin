/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,css}'],
  theme: {
    extend: {
      colors: {
        verdeRosfin: '#44513C',
        blancoRosfin: '#D8D8D8',
        naranjaRosfin: '#FF7F3E',
        negroRosfin: '#343131',
      },
      maxWidth: {
        'screen': '100vw',
      },
      fontFamily: {
        alata: ['Alata', 'sans-serif'], 
        vina: ['Vina Sans', 'cursive'], 
      },
    },
  },
  plugins: [],
};
