/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        heading: 'hsla(0, 0%, 100%, 0.6)',
        paragraph: 'hsla(0, 0%, 100%, 0.75)',
        darkBlue: 'hsl(233, 47%, 7%)',
        desatBlue: 'hsl(244, 38%, 16%)',
        softViolet: 'hsl(277, 64%, 61%)',
        lightViolet: 'rgb(171 92 219)'
      },
      fontSize:{
        custom: '0.938rem'
      }
    },
  },
  plugins: [],
};
