const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  plugins: [
    require("daisyui"),
    require("@tailwindcss/typography")
  ],
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./content/**/*.{md,yml,json,yaml,toml,csv}",
    "./components/content/**/*.{js,vue,ts}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'night-rider': '#080605',
        'golden-grass': '#e29b21',
        'ebb': '#ece8e5',
        'sepia': '#6d3d16',
      }
    }
  },
  daisyui: {
    themes: [
      {
        kwaktheme: {
          "primary": "#e29b21",
          "secondary": "#6d3d16",
          "accent": "#ece8e5",
          "neutral": "#080605",
          "base-100": "#080605",
          "base-200": "#121110",
          "base-300": "#1a1918",
          "base-content": "#ece8e5",
          "info": "#e29b21",
          "success": "#4d9e2f",
          "warning": "#e29b21",
          "error": "#dc2626",
        },
      },
    ],
    darkTheme: "kwaktheme",
  },
};  