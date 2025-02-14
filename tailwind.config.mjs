/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customBeige: "#ede6dd",
        blue: {
          900: "#073b70", // Customize the blue shade
        },
      },
      fontFamily: {
        times: 'var(--font-times-regular)',
      },
    },
  },
  plugins: [],
};
