/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { },
     
    },
    container: {
      center: true,
      padding: {
        Default: "20px",
        md: "40px"
      }
    }
  },
  plugins: [],
}

