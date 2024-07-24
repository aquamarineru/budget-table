/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["PT Sans", "sans-serif"],
      },
      colors: {
        text: "#333",
        active: "#2177B7",
        hover: "#DFF1FF",
        border: "#CBCBCB",
        red: "#FA432B",
        green: "#36B600",
        table: "#E8E4DE",
        tableLight: '#F4F1EF',
        tableText: '#5D5B59',
        tableValue: '#E2D4FF',
        tableActive: '#FD9800'
      },
      screens:{
        'sm': {'max': '768px'},
        'md': {'min': '769px', 'max': '1280px'}, 
        'lg': {'min': '1281px'},  
      }
    },
},
  plugins: [],
}