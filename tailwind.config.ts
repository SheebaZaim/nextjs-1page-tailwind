import type { Config } from "tailwindcss";
// const {default: flattenColorPalette,}=require("tailwindcss/lib/flattenColorPlatte");
function AddvariableForColors({addBase,theme}:any){
  const AllColors=(theme('colors'));
  const NewVars = Object.fromEntries(
    Object.entries(AllColors).map(([key, value]) => [`--${key}`, value])
  );
  addBase({':root':NewVars,})
  
}

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: '0',
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: '1',
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
      colors: {
        
          glow: {
            DEFAULT: 'rgba(0, 0, 255, 0.5)', // Custom glow color
            dark: 'rgba(0, 0, 139, 0.5)', // Darker shade for dark mode
          },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        glow: '0 0 5px rgba(0, 0, 255, 0.5), 0 0 10px rgba(0, 0, 255, 0.5)', // Glowing effect
      },
  },
},
  plugins: [AddvariableForColors],
};
export default config;
