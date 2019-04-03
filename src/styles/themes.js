const lightestColor = '#ffffff'
const accentLightColor = '#EEEEFF'
const grayColor = '#555555'
const accentDarkColor = '#1146BD'
const accentDarkestColor = '#0741ad'
const textDark = '#000000'
const transition = {
  duration: '0.5s',
  function: 'cubic-bezier(0.7,0.2,0.1,1.0)',
}

export const themes = {
  light: {
    fg: textDark,
    fgContrast: lightestColor,
    fgTopView: grayColor,
    bg: lightestColor,
    bgContrast: grayColor,
    bgTopView: lightestColor,
    accentDarkest: accentDarkestColor,
    accentDark: accentDarkColor,
    accentLight: accentLightColor,
    transition: transition,
  },
}
