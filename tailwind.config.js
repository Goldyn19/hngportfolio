/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#0b0f22',
      },
      fontFamily: {
        'custom': 'var(--framer-font-family, Inter, Inter Placeholder, sans-serif)',
      },
      
    },
  },
  plugins: [],
}
