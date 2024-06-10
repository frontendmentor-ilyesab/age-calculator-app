import type { Config } from "tailwindcss";

const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      purple: "hsl(259, 100%, 65%)",
      red: "hsl(0, 100%, 67%)",
      white: {
        DEFAULT: "hsl(0, 0%, 100%)",
        off: "hsl(0, 0%, 94%)",
      },
      grey: {
        light: "hsl(0, 0%, 86%)",
        smokey: "hsl(0, 1%, 44%)",
      },
      black: {
        DEFAULT: colors.black,
        off: "hsl(0, 0%, 8%)",
      }
    },
    screens: {
      'xs': '375px',
      ...defaultTheme.screens,
    },
  },
  plugins: [
    plugin(function({ matchVariant }: {matchVariant: any}) {
      matchVariant(
        'nth',
        (value: any) => {
          return `&>:nth-child(${value})`;
        },
        {
          values: {
            1: '1',
            2: '2',
            3: '3',
            4: '4'
          }
        }
      );
    })
  ],
  safelist: [
    {
      pattern: /-me-(0.5|1||3|6)/,
      variants: ['nth-1', 'nth-2', 'nth-3', 'nth-4', 'nth-1:lg', 'nth-2:lg', 'nth-3:lg', 'nth-4:lg']
    }
  ]
} 

export default config;
