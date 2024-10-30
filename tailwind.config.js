/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html", // Sesuaikan dengan path file kamu
  ],
  theme: {
    extend: {
      colors: {
        customOrange: "#FB9A39", // Warna oranye kustom
        abu: "#D9D9D9"
      },
      fontFamily: {
        'rubik': ['Rubik Scribble', 'system-ui', 'sans-serif'],
        'bebas': ['Bebas Neue', 'sans-serif'],
      },

    },
  },
  plugins: [],
}
