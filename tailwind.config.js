module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: {
          200: "#D8E28C", //custom lime yellow color
        },
        blue: {
          950: "#14202E", //custom navy blue color
        },
      },
      
      //custom font family
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'],
      },

      //custom heights
      height: {
        80: '20rem', 
        88: '22rem',
      },

      //custom widths
      width: {    
        88: "22rem",
        104: "26rem",
        112: '28rem',
        120: '30rem',
        128: '32rem',
        136: '34rem',
        144: '36rem',
        152: '38rem',
        160: '40rem',
        176: '44rem',
        192: '48rem',
        208: '52rem',
        224: '56rem',
      },
    },
  },
  plugins: [],
};

