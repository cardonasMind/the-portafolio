module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: { 
	extend: {
		colors: {
			militar: "#B5C99A",
			blueSky: "#98C1D9",
			terracotta: "#F58549"	
		}
	}
  },
  variants: {
    extend: {}
  },
  plugins: []
};
