/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'royal-blue': {
          500: '#4169E1',
        }
      }
    },
  },
  safelist: [
    'text-red-500',
    'text-royal-blue-500',
    'text-yellow-500',
    'text-green-500',
    'text-gray-500',
    'text-orange-500',
    'text-white',
    'text-pink-500',
    'text-purple-500',
    'bg-red-500',
    'bg-royal-blue-500',
    'bg-yellow-500',
    'bg-green-500',
    'bg-gray-500',
    'bg-orange-500',
    'bg-white',
    'bg-pink-500',
    'bg-purple-500',
  ],
  plugins: [],
};