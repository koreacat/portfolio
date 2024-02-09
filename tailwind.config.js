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
      }
    },
  },
  plugins: [],
}
