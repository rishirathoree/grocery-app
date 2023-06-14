module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '300px',
        'md': '769px',
        'lg': '1080px'
      },
      buttons: {
        'my-btn': 'font-semibold text-lg px-6 py-2 bg-blue-500 rounded-lg text-white',
      },
    },
  },
  variants: {},
  plugins: [],
};
