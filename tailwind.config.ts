import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        success: {
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
          800: '#065F46',
          900: '#064E3B',
        },
        warning: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#92400E',
        },
        error: {
          50: '#FFF1F2',
          100: '#FFE4E6',
          200: '#FECDD3',
          300: '#FDA4AF',
          400: '#FB7185',
          500: '#F43F5E',
          600: '#E11D48',
          700: '#BE123C',
          800: '#9F1239',
          900: '#881337',
        },
        primary: {
          light: '#ffffff',
          dark: '#363738'
        },
        secondary: {
          primary: '#FEFAF1',
          secondary: '#DB4444'
        },
        background: {
          primary: '#FFFFFF'
        },
        text: {
          primary: '#FAFAFA',
          secondary: '#7D8184',
        },
        card: {
          primary: '#000'
        },
        button: {
          primary: '#000',
          secondary: '#DB4444',
          hover: '#E07575',
          hoverSecondary: '#A0BCE0'
        },
        other: {
          primary: '#0F6',
        }
      },
      padding: {
        body: '135px'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translateX(0px)' },
          '25%': { transform: 'translateX(1.5px)' },
          '75%': { transform: 'translateX(-1.5px)' },
        }
      },
      animation: {
        wiggle: 'wiggle 0.6s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}
export default config
