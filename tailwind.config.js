module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "logo": "url('./Assets/logo.png')",
        "home-background": "url('https://images.unsplash.com/photo-1615233262415-1a942703bc71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80')",
      }),
      fontFamily: {
        Montserrat: ["Montserrat"],
       },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
