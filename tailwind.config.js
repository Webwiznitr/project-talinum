module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors:{
      'cyanhead': '#35b8be',
      'notice-text':'hsla(0, 0%, 100%, 0.8)',
      'white': '#fff', 
      'col2' : '#333333'
    },
    fontSize:{
      's': '24px',
      's2': '16px',
      's3': '18px'
    },
    minHeight:{
      'cart':'55px',
      'cart2': '50px'
    },
    minWidth:{
      'cart': '55px',
    },
    boxShadow:{
      'xl': '7px 7px 25px 0 rgb(126 130 143 / 27%)',
    },
  },
  plugins: [],
};
