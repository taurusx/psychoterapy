const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const articlePost = path.resolve(`./src/templates/blog-post-contentful.js`)
  return graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
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

    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.edges

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: post.node.fields.slug,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })
    
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

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
