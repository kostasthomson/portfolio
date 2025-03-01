/** @type {import('tailwindcss').Config} */
import { Config } from "tailwindcss";

const config: Config = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'hsl(243, 48%, 10%)',
        primary: 'hsl(249, 51%, 20%)',
        secondary: 'hsl(245, 39%, 50%)',
        highlight: 'hsl(280, 34%, 76%)',
        accent: 'hsl(0, 0%, 100%)',
        darkAccent: 'hsl(250, 50%, 30%)',
        midShade: 'hsl(247, 45%, 35%)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(20px)' },
          '100%': { transform: 'translateY(0)' },
        },
        blowIn: {
          '0%': { transform: 'scale(0.1)' },
          '100%': { transform: 'scale(1)' },
        },
        fadeInOut: {
          '0%': { opacity: 0, transform: 'translateY(-10px)' },
          '10%': { opacity: 1, transform: 'translateY(0)' },
          '90%': { opacity: 1, transform: 'translateY(0)' },
          '100%': { opacity: 0, transform: 'translateY(-10px)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out forwards',
        slideIn: 'slideIn 0.5s ease-out forwards',
        blowIn: 'blowIn 0.5s ease-out forwards',
        fadeInOut: 'fadeInOut 3s ease-in-out',
      },
    },
  },
  plugins: [],
};

export default config;