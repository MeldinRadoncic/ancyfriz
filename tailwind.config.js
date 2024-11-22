/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blush': '#F7E4DC',       // Soft blush beige - main light background
        'primary-charcoal': '#333333',   // Rich charcoal - dark text and navbar background
        'accent-rose-gold': '#B78E74',   // Muted rose gold - CTA buttons and highlights
        'neutral-pearl': '#FFFFFF',      // Pearl white - highlights and contrast
        'accent-olive': '#A7A284',       // Olive green accent - subtle highlights
        'neutral-gray': '#D9D7D2',       // Soft warm gray - alternate background
        'neutral-beige': '#EDE5DA',      // Sandy beige - secondary light background
      },
      spacing: {
        '2': '0.5rem',
        '4': '1rem',
        '6': '1.5rem',
        '8': '2rem',
        '12': '3rem',
        '16': '4rem',
        '24': '6rem',
        '32': '8rem', 
        '42': '10rem', 
        '60': '15rem', // Additional spacing for larger sections
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '3rem',
        '5xl': '4rem',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'], // Modern and clean font
        serif: ['Playfair Display', 'serif'], // Elegant serif for headers or special text
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        'DEFAULT': '0.25rem',
        'lg': '0.5rem',
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        'full': '9999px',
      },
      boxShadow: {
        'soft': '0 4px 6px rgba(0, 0, 0, 0.1)', // Soft shadow for modern effect
        'medium': '0 6px 8px rgba(0, 0, 0, 0.15)', // Medium shadow for cards or CTAs
        'large': '0 10px 15px rgba(0, 0, 0, 0.2)', // Larger shadow for emphasis
      },
    },
  },
  plugins: [],
};
