/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1a56db',
        'primary-dark': '#0e47c8',
        'secondary': '#6b7280',
        'success': '#10b981',
        'error': '#ef4444',
        'warning': '#f59e0b',
      },
    },
  },
  plugins: [],
}