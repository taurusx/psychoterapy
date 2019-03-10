require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const { BLOCKS, INLINES } = require('@contentful/rich-text-types')

module.exports = {
  siteMetadata: {
    title: `Psychoterapia Rzeszów`,
    owner: `Poradnia Psychologiczna Agnieszka Wojnar-Jadczyszyn`,
    description: `Uzyskaj pomoc psychologa. Poradnia psychologiczna - Rzeszów i okolice. Konsultacje oraz psychoterapia indywidualna, par, małżeństw.`,
    siteUrl: `https://psychoterapia.netlify.com/`,
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
        name: `Psychoterapeuta Rzeszów`,
        short_name: `Psychoterapia`,
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
        spaceId: `sazfiq61gz9l`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: '@contentful/gatsby-transformer-contentful-richtext',
      options: {
        renderOptions: {
          /*
           * Defines custom html string for each node type like heading, embedded entries etc..
           */
          renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: node => {
              if (!node.data.target.fields.file) return ""
              return `<div class='contentful-image-container'><picture>
                <source
                  srcset="${node.data.target.fields.file['pl-PL'].url}?q=50&w=450"
                  media="(max-width: 480px)">
                <source
                  srcset="${node.data.target.fields.file['pl-PL'].url}?q=50&w=750"
                  media="(max-width: 800px)">
                <img  
                  src="${node.data.target.fields.file['pl-PL'].url}?q=50"
                  alt="${node.data.target.fields.description ? node.data.target.fields.description['pl-PL'] : ""}"
              /></picture></div>`
            },
            [BLOCKS.EMBEDDED_ENTRY]: node => {
              const href = `/${
                node.data.target.fields.postType['pl-PL']
              }/${
                node.data.target.fields.slug['pl-PL']
              }`
              return `<div class='contentful-post-link-container' />
                <div class='image-container'>
                  <img src="${node.data.target.fields.image['pl-PL'].fields.file['pl-PL'].url}?fit=thumb&w=400&q=50" />
                </div>
                <div class='text-container'>
                  <a href='${href}' target='_blank' rel='noopener noreferrer'>
                    <h4>${node.data.target.fields.title['pl-PL']}</h4>
                    <p>${node.data.target.fields.subtitle['pl-PL']}</p>
                </a></div>
                </div>`
            },
            [INLINES.EMBEDDED_ENTRY]: node => {
              const href = `/${
                node.data.target.fields.postType['pl-PL']
              }/${
                node.data.target.fields.slug['pl-PL']
              }`
              return `<span class='contentful-post-link-span'/>
                <a href='${href}' target='_blank' rel='noopener noreferrer'>${
                node.data.target.fields.title['pl-PL']
              }</a></span>`
            },
          },
        },
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
