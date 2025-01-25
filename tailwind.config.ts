import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: '600px',
      md: '728px',
      lg: '984px',
      xl: '1040px',

    },
    colors: {
      'blue-french': '#06c',
      'blue-malibu': '#5ea5e3',
      'blue-maritime': '#147',
      'blue-warmspring': '#3974ae',
      'gray-carbon': '#333',
      'gray-colossus': '#979797',
      'gray-doctor': '#f8f8f8',
      'gray-lucky': '#777',
      'gray-placebo': '#e3e3e3',
      'gray-platinum': '#dfdfdf',
      'gray-steam': '#ddd',
      'white': '#fff',
    },
    fontFamily: {
      trebuchet: ['Trebuchet MS', 'Lucida Grande', 'Verdana', 'Arial', 'Sans-Serif'],
      lucida: ['Lucida Grande', 'Verdana', 'Arial', 'Sans-Serif'],
      arial: ['SpaceMono', 'Helvetica', 'sans-serif'],
      sans: ['SpaceMono']
    },
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography")
  ],
}

export default config
