import type { Config } from "tailwindcss";

const config: Config = {
  // corePlugins: {
  //   preflight: false,
  // },

  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      spacing: {
        15: "clamp(12px,1vw,15px)",
        24: "clamp(16px,1.4vw,24px)",
        27: "clamp(19px,1.7vw,27px)",
        36: "clamp(24px,2vw,36px)",
        95: "clamp(16px,6vw,95px)",
        100: "clamp(65px,6.5vw,100px)",
        600: "clamp(320px,37vw,600px)",
      },

      fontSize: {
        16: "clamp(12px,1vw,16px)",
      },
      fontFamily: {
        sans: "DM Sans",
      },
    },
  },
  plugins: [],
};
export default config;
