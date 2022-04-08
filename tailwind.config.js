module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'img-custom': "url('image/hero3.jpeg')",
        'umrah': "url('image/galeriumrah2.jpeg')",
        },
      colors: {
            'ungu1': "#3d0066",
            'ungu2': "#5c0099",
            'ungu3': "#c86bfa",
            'ungu4': "#9a01ce",
            'emas1': "#fdc500",
            'emas2': "#ffd500",
            'emas3': "#ffee32",
            'hitam': "#03071e"

        },
        fontFamily: {
          inter: "'inter', sans-serif",
          grotesk: "'Grotesk Light', sans-serif", 
          minion: "'Minion Pro', serif", 
        }
    },
  },
  plugins: [],
}
