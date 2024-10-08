/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily:{
      kumbh:["Kumbh Sans", "sans-serif"],
      inter:["Inter", "sans-serif"]
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
  ],
};
