/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        display: ['Syne', '"DM Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        canvas: '#f4f3ef',
        ink: '#0a0a0a',
      },
    },
  },
  plugins: [],
};
