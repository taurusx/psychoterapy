require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `eMocJa`,
    owner: `Poradnia Psychologiczna eMocJa - Agnieszka Wojnar-Jadczyszyn`,
    description: `Uzyskaj pomoc psychologa. Poradnia psychologiczna - Warszawa, Rzeszów i okolice. Konsultacje oraz psychoterapia indywidualna, dziecka, par, małżeństw.`,
    siteUrl: `https://psychoterapia.netlify.com`,
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
        trackingId: `UA-135932891-1`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Psychoterapia eMocJa`,
        short_name: `eMocJa`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#113377`,
        display: `minimal-ui`,
        icon: `content/assets/logo-psychoterapia.png`,
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
