/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sora': ['Sora'],
      },
      animation: {
        "loop-scroll": "loop-scroll 20s linear infinite"
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(500%)" },
          to: { transform: "translateX(-500%)" }
        }
      },
      backgroundImage: {
        'fifth-page-bg-img': "url('https://playarena.in/wp-content/themes/playarena.in/img/member_benefits_bg.svg')"
      }
    },
  },
  plugins: [],
}