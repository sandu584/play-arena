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
        "loop-scroll": "loop-scroll 20s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(500%)" },
          to: { transform: "translateX(-500%)" }
        },
      },
      backgroundImage: {
        'fifth-page-bg-img': "url('https://playarena.in/wp-content/themes/playarena.in/img/member_benefits_bg.svg')",
        'nav-bar-bg-img': "url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/2d/2b/9e/play-arena.jpg?w=1200&h=1200&s=1')"
      }
    },
  },
  plugins: [],
}