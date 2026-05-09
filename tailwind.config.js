/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#fbbf24',
        'app-bg': '#000000',
        'app-surface': '#000000',
        secondary: '#1e293b',
        dark: '#0f172a',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.5' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.8s ease-out',
        fadeIn: 'fadeIn 0.6s ease-out',
        slideInRight: 'slideInRight 0.8s ease-out',
        slideInLeft: 'slideInLeft 0.8s ease-out',
        float: 'float 3s ease-in-out infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      boxShadow: {
        glow: '0 0 20px rgba(251, 191, 36, 0.5)',
        'glow-lg': '0 0 40px rgba(251, 191, 36, 0.8)',
        premium: '0 20px 60px rgba(0, 0, 0, 0.3)',
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.glass': {
          '@apply bg-white/10 backdrop-blur-md border border-white/20 rounded-xl': {},
        },
        '.btn-glow': {
          '@apply hover:shadow-glow hover:shadow-yellow-500/50 transition-all duration-300': {},
        },
        '.text-glow': {
          '@apply text-shadow-lg': {},
        },
      });
    },
  ],
};