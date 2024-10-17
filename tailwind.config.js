/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'purple': '#7275AB',
      'yellow': '#FFCB11',
      'black': '#000000',
      'gray': '#646464',
      'light-gray': '#E5E5E5',
      'white': '#FFFFFF'
    },
    screens: {
      sm: { 'max': '1024px' }
    },
    extend: {
      padding: {
        'md': '48px',
        'sm': '24px'
      }
    },
    fontFamily: {
      'serif': ['Tangerine']
    }
  }
}

