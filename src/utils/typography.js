import Typography from 'typography'
import Wordpress2016 from 'typography-theme-wordpress-2016'

Wordpress2016.overrideThemeStyles = () => {
  return {
    'ul, ol': {
      marginLeft: '1.5rem',
    },
    'a.gatsby-resp-image-link': {
      boxShadow: `none`,
    },
    '@media(min-width:640px)': {
      p: {
        fontSize: '110%',
      },
      'h4, h5, h6': {
        fontSize: '1.25rem',
      },
    },
    '@media(max-width:640px)': {
      'h5, h6': {
        fontSize: '1.1rem',
      },
    },
    '@media(max-width:480px)': {
      h1: {
        fontSize: '2.0rem',
      },
      h2: {
        fontSize: '1.6rem',
      },
      'h3, h4': {
        fontSize: '1.25rem',
      },
    },
  }
}

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const { rhythm } = typography
export const { scale } = typography
