import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f7f7',
          100: '#b3e6e6',
          200: '#80d4d4',
          300: '#4dc3c3',
          400: '#1ab1b1',
          500: '#009999',
          600: '#007a7a',
          700: '#005b5b',
          800: '#003d3d',
          900: '#001e1e',
        },
        secondary: {
          50: '#fff5e6',
          100: '#ffe0b3',
          200: '#ffcc80',
          300: '#ffb74d',
          400: '#ffa31a',
          500: '#ff8f00',
          600: '#cc7200',
          700: '#995600',
          800: '#663900',
          900: '#331d00',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
