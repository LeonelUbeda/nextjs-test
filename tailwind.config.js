module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './app/components/**/*.{js,ts,jsx,tsx}'],
    theme: {
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
      extend: {
        fontFamily: {
          // display: '',
          // sans: ['Merriweather', 'sans-serif']
        },
        borderWidth: {
          '16': '16px'
        },
        width: {
          '200px': '200px',
          '300px': '300px',
          '350px': '350px',
          '400px': '400px'
        },
        height: {
          '96': '24rem',
          '128': '32rem',
          '192': '48rem',
          '250px': '250px',
          '300px': '300px',
          '400px': '400px',
          '500px': '500px',
          '600px': '600px',
          '700px': '700px',
        },
        textColor: {
          'nucleo-green': '#00a54f'
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [
      require('@tailwindcss/typography'),
    ],
  }