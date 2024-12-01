import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['IBM Plex Sans', 'sans-serif'],
        vidaloka: ['Vidaloka', 'serif'],  // Added Vidaloka font here
        poppins: ['Poppins', 'sans-serif'],  // Added Poppins font here
        lato: ['Lato', 'sans-serif'],

      },
      backgroundImage: {
        'front-page' : "url('https://mekedoniahomes.org/wp-content/uploads/2023/06/Mekedonia-Woman-Bed-Riders-768x512.jpg')",
        'binyam' : "url('https://mekedoniahomes.org/wp-content/uploads/2023/02/DSC00478-1024x683.jpg')",
        'help-us': "url('https://mekedoniahomes.org/wp-content/uploads/2023/02/DSC00474-768x512.jpg')",
        'home-bg': "url('https://mekedoniahomes.org/wp-content/uploads/2023/02/DSC00474-768x512.jpg')",
        'old-woman-drinking': "url('https://mekedoniahomes.org/wp-content/uploads/2023/02/DSC00412-768x512.jpg')",
        'art-room-drawing' : "url('https://mekedoniahomes.org/wp-content/uploads/2023/02/photo_2023-02-24_18-23-02-768x576.jpg')"
        ,'construction' : "url('https://mekedoniahomes.org/wp-content/uploads/2023/02/DSC00377-768x512.jpg')"
        ,'clothes': "url('data:image/jpeg;base64,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')"
        , 'reading' : "url('https://mekedoniahomes.org/wp-content/uploads/2023/02/DSC00434-768x512.jpg')"
        , 'community' : "url('https://mekedoniahomes.org/wp-content/uploads/2023/02/rsw_2600h_1600-2.webp')"
        , "fetlet" : "url('https://mekedoniahomes.org/wp-content/uploads/2023/02/DSC00470-768x512.jpg')"
      },
    },
  },
  plugins: [],
} satisfies Config;
