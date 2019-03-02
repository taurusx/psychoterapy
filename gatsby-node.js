const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const articlePost = path.resolve(`./src/templates/blog-post-contentful.js`)
  return graphql(
    `
      {
        allContentfulArticlePost (
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
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create contentful articles pages.
    const articles = result.data.allContentfulArticlePost.edges
    
    articles.forEach(post => {
      const { previous } = post
      const { next } = post
      const slugFull = `/${post.node.postType}/${post.node.slug}`
      if (previous) previous.slugFull = `/${previous.postType}/${previous.slug}`
      if (next) next.slugFull = `/${next.postType}/${next.slug}`

      createPage({
        path: slugFull,
        component: articlePost,
        context: {
          slug: post.node.slug,
          slugFull: slugFull,
          previous,
          next,
        },
      })
    })
  })
}
