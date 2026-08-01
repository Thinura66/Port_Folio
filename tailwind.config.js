/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef7ff',
          100: '#d9eeff',
          200: '#bce2ff',
          300: '#8ed1ff',
          400: '#4a9eff',
          500: '#185adb',
          600: '#2c5aa0',
          700: '#1e4a80',
          800: '#1a3d6a',
          900: '#0a1931',
        },
        surface: {
          900: '#0b0f19',
          800: '#111827',
          700: '#1a2332',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
