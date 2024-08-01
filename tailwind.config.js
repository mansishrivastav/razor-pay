/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [function({ addUtilities }) {
    addUtilities({
   
      '.custom-range': {
        '-webkit-appearance': 'none',
        'width': '100%',
        'height': '4px',
        'background-color': 'green',
        'outline': 'none',
        'opacity': '0.7',
        'transition': 'opacity .15s ease-in-out',
      },
      '.custom-range::-webkit-slider-runnable-track': {
        'width': '100%',
        'height': '4px',
        'background': 'green',
      },
      '.custom-range::-webkit-slider-thumb': {
        '-webkit-appearance': 'none',
        'appearance': 'none',
        'width': '0',
        'height': '0',
      },
      '.custom-range::-moz-range-thumb': {
        'width': '0',
        'height': '0',
      },
      '.custom-range::-ms-thumb': {
        'width': '0',
        'height': '0',
      },
      '.custom-range:hover': {
        'opacity': '1',
      },

      '.custom-small-range': {
        '-webkit-appearance': 'none',
        'width': '100%',
        'height': '4px',
        'background': 'gray',
        'outline': 'none',
        'opacity': '0.7',
        'transition': 'opacity .15s ease-in-out',
      },
      '.custom-small-range::-webkit-slider-runnable-track': {
        'width': '100%',
        'height': '4px',
        'background': 'gray',
      },
      '.custom-small-range::-webkit-slider-thumb': {
        '-webkit-appearance': 'none',
        'appearance': 'none',
        'width': '0',
        'height': '0',
      },
      '.custom-small-range::-moz-range-thumb': {
        'width': '0',
        'height': '0',
      },
      '.custom-small-range::-ms-thumb': {
        'width': '0',
        'height': '0',
      },
      
    });
  },
],
}

