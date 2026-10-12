export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        school: {
          gold: '#f2c94c',
          cream: '#f9efe0',
          warm: '#e56c3f',
          red: '#d75a2d',
          ink: '#1d1d1d'
        }
      },
      boxShadow: {
        soft: '0 12px 30px rgba(29, 29, 29, 0.08)',
        card: '0 16px 40px rgba(61, 52, 28, 0.08)'
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'sans-serif']
      }
    }
  },
  plugins: []
};
