// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this path if your files are in a different location
  ],
  theme: {
    extend: {
      fontFamily: {
        precious: ["Precious", "sans-serif"],
        tomatoes: ["Tomatoes", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"], // Add your custom font here
        opensans1: ["Open Sans1", "sans-serif"],
      },
    },
  },
  plugins: [],
};
