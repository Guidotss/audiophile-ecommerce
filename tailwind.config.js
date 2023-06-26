/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'white':        '#ffffff',
        'black':        '#000000',
        'peach':        '#fbaf85',
        'cinnamon':     '#d87d4a',
        'snow_white':   '#f1f1f1',
        'smoke_white':  '#fafafa',
        'carbon_black': '#101010',
      }
    },
  },
  plugins: [],
}
