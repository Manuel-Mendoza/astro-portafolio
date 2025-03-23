/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3B82F6',
        'secondary': '#10B981',
        'accent': '#F59E0B',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        'myTheme': {
          'fondo': '#2b2d42ff',
          'primario': '#d8973cff',
          'blanco': '#e8f1f2ff',
          'secundario': '#6e8387ff',
          'terciario': '#709176ff',
        },
      },
      "light",
      "dark",
      "cupcake",
    ],
  }
} 