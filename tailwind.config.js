module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'primary-blue': '#4a63fe',
        'primary-blue-light': '#4E73FF',
      },
      spacing: {
        13: '3.25rem',
        15: '3.75rem',
        25: '6.25rem',
        30: '7.5rem',
        62: '15rem',
        140: '35rem',
        160: '40rem',
        188: '47rem',
      },
    },
  },
  plugins: [],
};
