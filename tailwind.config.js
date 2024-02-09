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
        'my-sub-color': 'rgba(155, 155, 155, 1)',
        'my-border-color': 'rgba(255, 255, 255, 0.13)',
      },
      animation: {
        'fade-in': 'fade-in 1s ease-out',
        'fade-out': 'fade-out .3s ease-out',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'fade-out': {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
}
