/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    './storage/framework/views/*.php',
    './resources/views/**/*.blade.php',
    './resources/js/**/*.jsx',
],
  theme: {
    colors: {
      dark: '#1E2027',
      lightgray: '#898989',
      orange: '#FF4900',
      lightorange: '#FF9900',
      white: '#FFFFFF',
      black: '#000000'
    },
    extend: {
      boxShadow: {
        'white': '0px 0px 24px -3px rgba(255,255,255,1)'
      }
    },
  },
  plugins: [],
}

