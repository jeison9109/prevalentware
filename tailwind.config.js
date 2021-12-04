module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto"],
      },
      colors: {
        primary: "#2F3337",
        secondary: "#26B4FF",
        tertiary: "#424242",
        background: "#E5E7EB",
        formtxt: "#727171",
        formtxt2: "#26B4FF",
        backdrop: "rgba(196, 196, 196, 0.54)",
      },
      corePlugins: {
        // ...
        textDecoration: true,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
