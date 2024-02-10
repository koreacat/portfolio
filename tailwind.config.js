module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ], theme: {
    extend: {
      colors: {
        'my-bg-color': '#191919',
        'my-color': 'rgba(255, 255, 255, 0.81)',
        'my-sub-color': '#9b9b9b',
        'my-border-color': 'rgba(255, 255, 255, 0.13)',
      },
      animation: {
        'fade-in': 'fade-in 1s ease-out',
        'fade-in-up': 'fade-in-up .5s ease-out',
        'fade-in-down': 'fade-in-down 1s ease-out',
        'fade-out': 'fade-out-up 0s ease-out',
        'fade-out-up': 'fade-out-up .3s ease-out',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0, },
          '100%': { opacity: 1 },
        },
        'fade-in-up': {
          '0%': { opacity: 0, transform: 'translateY(25%)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'fade-in-down': {
          '0%': { opacity: 0, transform: 'translateY(-15%)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'fade-out': {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        'fade-out-up': {
          '0%': { opacity: 1, transform: 'translateY(0)' },
          '100%': { opacity: 0, transform: 'translateY(15%)' },
        },
      },
    },
  },
  plugins: [],
}
