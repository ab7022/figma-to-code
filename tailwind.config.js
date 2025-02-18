/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: '#E5E7EB',
        'status-green': '#16A34A',
        'status-red': '#DC2626',
        'status-yellow': '#CA8A04',
      },
      boxShadow: {
        'table': '0 1px 3px rgba(0, 0, 0, 0.1)',
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
      },
    },
  },
  plugins: [],
};