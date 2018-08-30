const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `)
      .then(result => {
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          console.log('NODE MARKDOWNREMARK', node.fields.slug)
          if (node.fields.slug.startsWith('/articles')) {
            console.log("========CREATED BLOG PAGE==========");
            createPage({
              path: node.fields.slug,
              component: path.resolve(`./src/pages/templates/blog-post.js`),
              context: {
                // Data passed to context is available
                // in page queries as GraphQL variables.
                slug: node.fields.slug,
              },
            })
          } else if (node.fields.slug.startsWith('/projects')) {
            console.log("=======CREATED PROJECT PAGE ==================");
            createPage({
              path: node.fields.slug,
              component: path.resolve(`./src/pages/templates/project-post.js`),
              context: {
                // Data passed to context is available
                // in page queries as GraphQL variables.
                testId: "Project",
                slug: node.fields.slug,
              },
            })
          }
        })
        resolve()
      })
      .catch(reject => {
        console.log('REJECTED?', reject)
      })
  })
}
