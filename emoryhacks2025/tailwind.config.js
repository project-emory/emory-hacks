/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "brand-primary": "#314CC2",
        "brand-secondary": "#9965E6",
        "brand-tertiary": "#6EB8FF",
      },
      // backgroundImage: {
      //   homepage: "url('/images/IMG_1023.png')",
      // },
    },
  },
  plugins: [],
};
