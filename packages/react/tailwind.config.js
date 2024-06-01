import { colors, fontSize, radii } from '@nemesis-ui/tokens';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors,
      fontSize,
      borderRadius: radii,
    },
  },
  plugins: [],
};
