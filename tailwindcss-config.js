module.exports = {
    theme: {
        fontFamily: {
            display: ['Sulphur Point', 'sans-serif'],
            body: ['Roboto', 'sans-serif']
        },
        extend: {
            screens: {
                '2xl': '1600px',
            },
            spacing: {
                '72': '18rem',
                '84': '21rem',
                '96': '24rem',
            },
            maxWidth: theme => {
                return {
                    'screen-2xl': theme('screens.2xl'),
                    '1/4': '25%',
                    '1/2': '50%',
                    '3/4': '75%',
                }
            },
        },
    },
    variants: {
        opacity: ['responsive', 'hover', 'focus'],
    },
    plugins: [
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer'),
    ],
};
