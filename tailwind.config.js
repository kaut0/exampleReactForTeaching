/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    colors: {
      cokelatKuning: {
        50: "#fcf8f3",
        100: "#f9f1e7",
        200: "#f5e9db",
        300: "#f2e2cf",
        400: "#eedbc3",
        500: "#ead4b7",
        600: "#e6cdac",
        700: "#e3c6a0",
        800: "#dec095",
        900: "#dab989",
        950: "#d6b27e"
      }
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

