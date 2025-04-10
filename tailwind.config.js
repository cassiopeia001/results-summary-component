/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors : {
        'LightRed': 'hsl(0, 100%, 67%)',
        'LighterRed': 'hsla(0, 100%, 67%, 0.1)',
        'OrangeyYellow': 'hsl(39, 100%, 56%)',
        'LightOrangeyYellow': 'hsla(39, 100%, 56%, 0.1)',
        'GreenTeal': 'hsl(166, 100%, 37%)',
        'LightGreenTeal': 'hsla(166, 100%, 37%, 0.1)',
        'CobaltBlue': 'hsl(234, 85%, 45%)',
        'LightCobaltBlue': 'hsla(234, 85%, 45%, 0.1)',
        'LightSlateBlue': 'hsl(252, 100%, 67%)',
        'LightRoyalBlue': 'hsl(241, 81%, 54%)',
        'VioletBlue': 'hsla(256, 72%, 46%, 1)',
        'PersianBlue' : 'hsl(241, 72%, 46%)',
        'White': 'hsl(0, 0%, 100%)',
        'PaleBlue': 'hsl(221, 100%, 96%)',
        'LightLavender': 'hsl(241, 100%, 89%)',
        'DarkGrayBlue': 'hsl(224, 30%, 27%)'


      },
      fontFamily: {
        hankenGrotesk : ['HankenGrotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

