/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['var(--font-niramit)', 'ui-sans-serif', 'system-ui'],
        },
        colors: {
          primary: '#1E40AF',
          secondary: '#FACC15',
        },
      },
    },
    plugins: [],
  };
  