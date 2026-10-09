import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './lib/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f4f9ff',
          100: '#eaf4ff',
          200: '#d6eafc',
          300: '#b9d7f8',
          400: '#8ebbf4',
          500: '#5d96e9',
          600: '#3f7de2',
          700: '#2d64c6',
          800: '#224da0',
          900: '#1d3f7a',
        },
        slate: {
          950: '#09111f',
        },
      },
      boxShadow: {
        soft: '0 10px 30px rgba(15, 23, 42, 0.08)',
      },
      backgroundImage: {
        grid: 'radial-gradient(circle at 1px 1px, rgba(148,163,184,0.18) 1px, transparent 0)',
      },
    },
  },
  plugins: [],
};

export default config;
