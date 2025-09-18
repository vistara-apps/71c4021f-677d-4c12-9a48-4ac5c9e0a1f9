/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(225 12% 96%)',
        foreground: 'hsl(220 15% 40%)',
        primary: 'hsl(220 100% 50%)',
        accent: 'hsl(170 100% 50%)',
        surface: 'hsl(0 0% 100%)',
        'text-secondary': 'hsl(220 15% 60%)',
        dark: {
          background: 'hsl(220 15% 8%)',
          surface: 'hsl(220 15% 12%)',
          foreground: 'hsl(220 15% 85%)',
          'text-secondary': 'hsl(220 15% 65%)',
        }
      },
      borderRadius: {
        'lg': '12px',
        'md': '8px',
        'sm': '4px',
      },
      spacing: {
        'lg': '24px',
        'md': '16px',
        'sm': '8px',
      },
      boxShadow: {
        'card': '0 2px 8px hsla(220, 15%, 40%, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.2s ease-in-out',
        'slide-up': 'slideUp 0.2s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
