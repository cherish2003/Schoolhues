/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        LightBlue: "#CAF0F8",
        Light2Blue: "#90E0EF",
        Light3Blue: "#0077b6",
        Darkblue: "#0077b6",
      },
      height: {
        "500px": "500px",
        "550px": "550px",
      },
      text: {
        "text-5xl": "28px",
      },
    },
  },
  plugins: [],
};
