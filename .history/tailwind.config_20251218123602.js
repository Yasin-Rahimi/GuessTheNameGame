/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // مسیر فایل‌های JSX/JS/TSX
  ],
  theme: {
    extend: {
      keyframes: {
        pop: {
          '0%': { transform: 'scale(0.9)', opacity: '0.5' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        shake: {
          '0%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-3px)' },
          '50%': { transform: 'translateX(3px)' },
          '75%': { transform: 'translateX(-3px)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        pop: 'pop 0.2s ease-out',
        shake: 'shake 0.25s ease-in-out',
      },
    },
  },
  plugins: [],
}
