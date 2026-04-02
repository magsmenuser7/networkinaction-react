/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'nia-black': '#080808',
        'nia-orange': '#E87722',
        'nia-white': '#FFFFFF',
        'nia-gray': '#666666',
        'nia-dark': '#F5F5F5',
        'nia-darker': '#F9F9F9',
        'nia-border': '#E0E0E0',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      fontWeight: {
        'light': '300',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'extrabold': '800',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
      },
      letterSpacing: {
        'widest': '0.2em',
        'ultra-wide': '0.15em',
      },
      lineHeight: {
        'tight': '1.1',
        'relaxed-custom': '1.75',
      },
    },
  },
  plugins: [],
};
