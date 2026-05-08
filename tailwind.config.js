/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Renner Elementary + Park Hill District palette.
        // Edit hex values here to rebrand the whole site at once.
        scarlet: {
          50: '#FFF1F3',
          100: '#FFD9DE',
          200: '#FFB3BD',
          300: '#FF8694',
          400: '#F25569',
          500: '#D9304A',
          600: '#C8102E', // Park Hill / Renner primary
          700: '#A60B25',
          800: '#7E0820',
          900: '#5A0617',
        },
        navy: {
          50: '#EEF1F7',
          100: '#D6DCEA',
          200: '#A9B5CF',
          400: '#586790',
          600: '#2E3F6B',
          700: '#1E2A4A',
          800: '#141C33',
        },
        cream: {
          50: '#FFFBF5',
          100: '#FCF7EE',
          200: '#F5ECDB',
        },
        sand: {
          50: '#F8F5EE',
          100: '#EFE9DA',
          200: '#DCD3BD',
        },
        ink: {
          DEFAULT: '#1F1D1A',
          soft: '#5A5651',
          muted: '#8B867E',
        },
      },
      fontFamily: {
        display: ['"Poppins"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(31, 29, 26, 0.04), 0 8px 24px rgba(31, 29, 26, 0.06)',
        lift: '0 2px 6px rgba(31, 29, 26, 0.06), 0 16px 32px rgba(31, 29, 26, 0.08)',
      },
      maxWidth: {
        prose: '68ch',
      },
    },
  },
  plugins: [],
};
