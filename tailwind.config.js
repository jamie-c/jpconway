/** @type {import('tailwindcss').Config} */
export const content = [
  './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  './src/app/**/*.{js,ts,jsx,tsx,mdx}',
];
export const theme = {
  extend: {
    backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
    },
    colors: {
      pureWhite: {
            100: "#fbfbfa",
            200: "#f8f7f5",
            300: "#f4f4f0",
            400: "#f1f0eb",
            500: "#edece6",
            600: "#bebdb8",
            700: "#8e8e8a",
            800: "#5f5e5c",
            900: "#2f2f2e"
      },
      tricornBlack: {
            100: "#d5d5d6",
            200: "#acacac",
            300: "#828283",
            400: "#595959",
            500: "#2f2f30",
            600: "#262626",
            700: "#1c1c1d",
            800: "#131313",
            900: "#09090a"
      },
      brightBlue: {
            100: "#d8e7ff",
            200: "#b0cfff",
            300: "#89b6ff",
            400: "#619eff",
            500: "#3a86ff",
            600: "#2e6bcc",
            700: "#235099",
            800: "#173666",
            900: "#0c1b33"
      },
      darkBlue: {
            100: "#cde1ff",
            200: "#9cc2ff",
            300: "#6aa4ff",
            400: "#3985ff",
            500: "#0767ff",
            600: "#0652cc",
            700: "#043e99",
            800: "#032966",
            900: "#011533"
      },
      customGreen: {
          100: "#dcefe8",
          200: "#b9dfd0",
          300: "#97ceb9",
          400: "#74bea1",
          500: "#51ae8a",
          600: "#418b6e",
          700: "#316853",
          800: "#204637",
          900: "#10231c"
      },
      customPurple: {
          100: "#e8dcef",
          200: "#d0b9df",
          300: "#b997ce",
          400: "#a174be",
          500: "#8a51ae",
          600: "#6e418b",
          700: "#533168",
          800: "#372046",
          900: "#1c1023"
      },
    }
  },
};
export const plugins = [];
