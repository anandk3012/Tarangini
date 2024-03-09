/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', "sans-serif"],
        poppins: ['Poppins' , "sans-serif"],
        ibm: ["IBM Plex Mono","monospace"],
        libre: ["Libre Baskerville", "serif"],
        acme: ["Acme", "sans-serif"],
        alexandria: ["Alexandria", "sans-serif"]
      },
      backgroundImage: {
        mainbg:"url('src/assets/images/main-bg.png')"
      }
    },
  },
  plugins: [],
}

