import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/_components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'first': 'url(/_images/firstpage-arrow.png)',
        'prev': 'url(/_images/arrow_left.png)',
        'next': 'url(/_images/arrow_right.png)',
        'last': 'url(/_images/endpage-arrow.png)',
      },
      colors: {
        'white1': '#ffffff',
        'red1': '#ff0000',
        'red2': '#d10000',
        'red3': '#FF6347',
        'green1': '#009944',
        'green2': '#60bf8a',
        'green3': '#bfe5d0',
        'blue1': '#004098',
        'blue2': '#6088bf',
        'blue3': '#bfcfe5',
        'blue4': '#e8f1fe',
        'blue5': '#eeedff',
        'blue6': '#0500FF',
        'blue7': '#242a80',
        'blue8': '#516b8d',
        'gray1': '#b9b9b9',
        'gray2': '#dbdbdb',
        'gray3': '#efefef',
        'dark-gray1': '#6b7280',
        'dark-gray2': '#737373',
        'light-blue1': '#003EE5',
        'light-blue2': '#0017c1',
        'light-blue3': '#99daea',
        'black1': '#000000',
        'bright-blue1': '006cff',
      },
    },
  },
  plugins: [],
};
export default config;
