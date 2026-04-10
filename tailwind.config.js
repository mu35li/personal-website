/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        retro: {
          bg: '#100720',
          panel: '#1c0f36',
          teal: '#3af2d4',
          pink: '#ff4db8',
          yellow: '#ffe066',
          purple: '#a78bfa',
        },
      },
      boxShadow: {
        neon: '0 0 10px rgba(58, 242, 212, 0.5), 0 0 22px rgba(255, 77, 184, 0.35)',
      },
      fontFamily: {
        display: ['"Press Start 2P"', 'ui-monospace', 'monospace'],
        body: ['"Space Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}

