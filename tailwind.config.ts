import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#3b45a0",
          secondary: "#8b5cf6",
          accent: "#1dcdbc",
          neutral: "#6b7280",
          "base-100": "#efeaf0",
          info: "#36b0ec",
          success: "#1fd178",
          warning: "#fbbd23",
          error: "#f45764",
          body: {
            "background-color": "#e3e6e6", //this way we can add a dark theme with a different background-color
          }
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
