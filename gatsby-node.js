const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const articlePostTemplate = path.resolve(
      `./src/templates/article-post-contentful.js`
    )
    const disorderTemplate = path.resolve(
      `./src/templates/disorder-contentful.js`
    )
    const pricingTemplate = path.resolve(
      `./src/templates/pricing-contentful.js`
    )
    resolve(
      graphql(
        `
          {
            allContentfulArticlePost(
              filter: { node_locale: { eq: "pl-PL" } }
              sort: { fields: [date], order: DESC }
            ) {
              totalCount
              edges {
                next {
                  postType
                  slug
                  title
                }
                previous {
                  postType
                  slug
                  title
                }
                node {
                  postType
                  slug
                  title
                }
              }
            }
            allContentfulDisorder(
              filter: { node_locale: { eq: "pl-PL" } }
              sort: { fields: [order], order: ASC }
            ) {
              edges {
                next {
                  slug
                  title
                }
                previous {
                  slug
                  title
                }
                node {
                  description {
                    json
                  }
                  icon
                  order
                  slug
                  title
                }
              }
              totalCount
            }
            allContentfulPricing(
              filter: { node_locale: { eq: "pl-PL" } }
              sort: { fields: [order], order: ASC }
            ) {
              edges {
                next {
                  slug
                  title
                }
                previous {
                  slug
                  title
                }
                node {
                  description {
                    json
                  }
                  icon
                  order
                  price
                  slug
                  time
                  title
                }
              }
              totalCount
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        // Create contentful articles pages.
        const articles = result.data.allContentfulArticlePost.edges
        const disorders = result.data.allContentfulDisorder.edges
        const pricings = result.data.allContentfulPricing.edges

        articles.forEach(post => {
          const { previous } = post
          const { next } = post
          const slugFull = `/${post.node.postType}/${post.node.slug}`
          if (previous)
            previous.slugFull = `/${previous.postType}/${previous.slug}`
          if (next) next.slugFull = `/${next.postType}/${next.slug}`

          createPage({
            path: slugFull,
            component: articlePostTemplate,
            context: {
              slug: post.node.slug,
              slugFull,
              previous,
              next,
            },
          })
        })

        // Create contentful disorders descriptions pages.
        disorders.forEach(disorder => {
          const { previous } = disorder
          const { next } = disorder
          const slugFull = `/opis-zaburzen/${disorder.node.slug}`
          if (previous) previous.slugFull = `/opis-zaburzen/${previous.slug}`
          if (next) next.slugFull = `/opis-zaburzen/${next.slug}`

          createPage({
            path: slugFull,
            component: disorderTemplate,
            context: {
              slug: disorder.node.slug,
              slugFull,
              previous,
              next,
            },
          })
        })

        // Create contentful pricings descriptions pages.
        pricings.forEach(pricing => {
          const { previous } = pricing
          const { next } = pricing
          const slugFull = `/cennik/${pricing.node.slug}`
          if (previous) previous.slugFull = `/cennik/${previous.slug}`
          if (next) next.slugFull = `/cennik/${next.slug}`

          createPage({
            path: slugFull,
            component: pricingTemplate,
            context: {
              slug: pricing.node.slug,
              slugFull,
              previous,
              next,
            },
          })
        })
      })
    )
  })
}
