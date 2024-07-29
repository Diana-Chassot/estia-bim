/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'gray': 'rgb(38 47 62)',
      'black': '#000000',
      'offwhite': '#ECF2FF',
      'bluish': 'rgb(255 255 255)',
      'navyblue': '#13224f',
      'lightwhite': '#d0d3db',
      'darkblue': 'rgb(0 16 63)',
      'green': 'rgb(17 25 40)',
      'red': '#455ede',
      'greenblue': 'rgb(33 61 78)',
      'radial1': '#2563eb40',
      'radial2': 'rgb(0 88 255 / 0.1)',
      'lightblue': 'rgb(255 255 255)',
      'blue': 'rgb(16 23 33)',
      'redd':'#ff2400',
      'mobile-gradients1': 'rgb(6 0 124)',
      'mobile-gradients2': 'rgb(0 88 255)'
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '2rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1.25' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1.25' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1.25rem' }],
    },
  },
  backgroundImage: {
    'contact-bg': "url('./public/images/Contact/contact.jpg')",
  },
  plugins: [ require('@tailwindcss/forms')],
}
