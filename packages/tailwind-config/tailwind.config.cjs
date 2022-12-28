/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "**/*/index.html",
      "**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          "brand-main": "#414066"
        }
      },
    },
    plugins: [],
  }