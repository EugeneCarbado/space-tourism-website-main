import type {Config} from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        homeImageMobile:
          "url('../images/background/background-home-mobile.jpg')",
        destinationImageMobile:
          "url('../images/background/background-destination-mobile.jpg')",
        moonImage: "url('../images/destination/image-moon.webp')",
        europaImage: "url('../images/destination/image-europa.webp')",
        marsImage: "url('../images/destination/image-mars.webp')",
        titanImage: "url('../images/destination/image-titan.webp')",
      },
      colors: {
        spBlack: '#0B0D17',
        spLilac: '#D0D6F9',
        spWhite: '#FFFFFF',
      },
      fontFamily: {
        belleFair: ['var(--font-belleFair)'],
        barlowCondensed: ['var(--font-barlowCondensed)'],
        barlow: ['var(--font-barlow)'],
      },
    },
  },
  plugins: [],
};
export default config;
