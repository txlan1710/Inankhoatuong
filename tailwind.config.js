/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3dbeb3', // Màu xanh lá chính
        secondary: '#ffffff', // Trắng
        dark: '#000000', // Đen
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Font dễ đọc
      },
    },
  },
  plugins: [],
}