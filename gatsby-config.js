require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `eMOCja`,
    owner: `Gabinet terapii poznawczo-behawioralnej i terapii schematu "eMOCja" - Agnieszka Wojnar-Jadczyszyn`,
    description: `Agnieszka Wojnar-Jadczyszyn - bardzo dobry psycholog, psychoterapeuta z Warszawa Włochy, Ursus i Rzeszów. Umów się na wizytę 🕿 665-400-815.`,
    siteUrl: `https://gabinet-emocja.pl`,
    social: {
      twitter: ``,
    },
    author: `Zawistowski`,
    authorSite: 'https://taurusx.netlify.com',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-146004399-1`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Psychoterapia eMOCja`,
        short_name: `eMOCja`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#113377`,
        display: `minimal-ui`,
        icon: `content/assets/logo/emocja-logo-butterfly.svg`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `3tychyb0m94v`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
