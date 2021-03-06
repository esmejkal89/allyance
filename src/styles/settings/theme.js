const Xs = '500px'
const Sm = '740px'
const Md = '900px'
const Lg = '1080px'
const Xl = '1200px'
const Xxl = '1540px'

export const Theme = {
  brandFont: 'Circular Std',
  breakpoints: [Sm, Md, Lg, Xl, Xxl],
  colors: {
    brandPrimary: '#E7DF1E',
    brandSecondary: '#e22d60',
    brandTertiary: '#2dbbe2',
    success: '#4AE79B',
    warning: '#FCF671',
    danger: '#EC5959',
    lightestGrey: '#959595',
    lightGrey: '#5B5B5B',
    grey: '#3E3E3E',
    darkGrey: '#212121',
    black: '#030C07',
    white: '#FFFFFF',
    background: '#F4F4F4',
  },
  fontweight: {
    light: 'normal',
    bold: 'bold',
    black: '900',
  },
}

const breakpoints = [{ xs: Xs }, { sm: Sm }, { md: Md }, { lg: Lg }, { xl: Xl }, { xxl: Xxl }]

export const Mq = breakpoints.reduce((acc, breakpoint) => {
  const entry = Object.entries(breakpoint)[0]
  acc = { ...acc, [entry[0]]: `@media (min-width: ${entry[1]})` }
  return acc
}, {})
