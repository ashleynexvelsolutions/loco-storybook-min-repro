/** @type {import('tailwindcss').Config} */
module.exports = {
  // eslint-disable-next-line global-require
  plugins: [require('@tailwindcss/line-clamp')],
  content: ['./packages/**/*.js'],
  theme: {
    fontFamily: {
      body: ['Circular Std', 'sans-serif'],
      second: ['Poppins', 'serif'],
    },
    screens: {
      ssm: '375px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1510px',
    },
    container: {
      padding: {
        DEFAULT: '0',
        ssm: '1rem',
      },
    },
    extend: {
      colors: {
        grey: {
          darkest: '#090F19',
          darker: '#C9C9C9',
          dark: '#F2F2F2',
          light: '#404F71',
          lighter: '#4B5159',
          lightest: '#979797',
        },
        blue: {
          darktxt: '#A0B2DB',
          darkest2: '#004681',
          darkest: '#071836',
          darker: '#0B4C84',
          dark: '#00467F',
          light: '#0F3262',
          lighter: '#00467F',
          lightest: '#1B4989',
          lightest2: '#246CA0',
        },
        green: {
          darkest: '#79780C',
          darker: '#827C00',
          dark: '#91900E',
          light: '#9D9C10',
          lighttxt: '#B3B39E',
          lighter: '#B4B319',
          lightest: '#BBBA20',
          lightest2: '#BFBE15',
          lightest3: '#DFDE67',
        },
        yellow: {
          light: '#FEC007',
        },
        beige: {
          light: '#F6F6F6',
          dark: '#EFEFEF',
        },
      },
      boxShadow: {
        button: '0px 3px 11px #9F9F9F29',
        primary: '0px 3px 35px #8D8D8D29',
        secondary: '0px 3px 6px #0000001A',
        coupon: '0px 3px 26px #B7B7B729',
      },
    },
  },
  safelist: [
    {
      pattern: /^(.*?)/,
    },
  ],
}
