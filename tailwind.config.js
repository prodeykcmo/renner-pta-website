/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Renner Roadrunners palette — pulled from the school logo.
        // Edit hex values here to rebrand the whole site at once.

        // Primary red — matches the roadrunner mascot.
        scarlet: {
          50: '#FEF1F1',
          100: '#FCD9D9',
          200: '#F8B0B0',
          300: '#F18585',
          400: '#E55454',
          500: '#D52B1E',
          600: '#C0241A',
          700: '#9C1B14',
          800: '#76140F',
          900: '#530D0A',
        },
        // Royal blue — matches the logo's circle and ribbon.
        navy: {
          50: '#F0F4FB',
          100: '#D7E0F1',
          200: '#A8B7DD',
          300: '#7790C7',
          400: '#4D6CB0',
          500: '#2E4D94',
          600: '#1F3D7A',
          700: '#1B3A7B',
          800: '#142D5F',
          900: '#0E2046',
        },
        // Stark whites + light blue-gray for subtle section variation.
        cream: {
          50: '#F5F7FB',
          100: '#FFFFFF',
          200: '#EFF2F7',
        },
        sand: {
          50: '#F8F5EE',
          100: '#EFE9DA',
          200: '#DCD3BD',
        },
        ink: {
          DEFAULT: '#0F1B2E',
          soft: '#3F4A60',
          muted: '#7A8497',
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
        soft: '0 1px 2px rgba(15, 27, 46, 0.04), 0 8px 24px rgba(15, 27, 46, 0.07)',
        lift: '0 2px 6px rgba(15, 27, 46, 0.06), 0 16px 32px rgba(15, 27, 46, 0.10)',
      },
      maxWidth: {
        prose: '68ch',
      },
    },
  },
  plugins: [],
};
