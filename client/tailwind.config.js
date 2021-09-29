const colors = require('tailwindcss/colors');

module.exports = {
    purge: [
        './index.html',
        './src/**/*.{js,jsx}'
    ],
    darkMode: false,
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            gray: colors.blueGray,
            blue: colors.cyan,
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
