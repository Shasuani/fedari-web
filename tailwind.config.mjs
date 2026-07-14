/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        // Brand palette — source of truth: Fedari_Logo_Kit_Webdesigner.pdf
        navy: {
          DEFAULT: '#0A1D3D',
          900: '#081733',
          800: '#0A1D3D',
          700: '#12294F',
          600: '#1B3763',
        },
        blue: {
          DEFAULT: '#146BFF',
          600: '#0F57D6',   // darker — use for small text on white (AA)
          500: '#146BFF',
          100: '#E7F0FF',
        },
        offwhite: '#F5F7FA',
        line: '#E4E7EC',
        ink: '#0A1D3D',
        muted: '#5A6B85',
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1240px',
        prose: '68ch',
      },
      letterSpacing: {
        eyebrow: '0.14em',
      },
      boxShadow: {
        card: '0 1px 2px rgba(10,29,61,0.04), 0 12px 32px -12px rgba(10,29,61,0.14)',
        lift: '0 20px 50px -20px rgba(10,29,61,0.30)',
      },
      transitionTimingFunction: {
        lux: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        'hero-zoom': {
          from: { transform: 'scale(1)' },
          to: { transform: 'scale(1.08)' },
        },
      },
    },
  },
  plugins: [],
};
