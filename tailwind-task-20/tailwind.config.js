/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./html/*.html"],
  theme: {
    extend: {
      keyframes: {
        wave: {
          '0%': { transform: 'translateX(-0%)' },
          '20%': { transform: 'translateX(-20%)' },
          '40%': { transform: 'translateX(-40%)' },
          '60%': { transform: 'translateX(-60%)' },
          '80%': { transform: 'translateX(-80%)'},
          '100%': { transform: 'translateX(0%)' },
          
        },
        
    
    },
    animation: {
      'waving-hand': 'wave 20s infinite',
  },
  },
  plugins: [],
}
}