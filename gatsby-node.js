var fs = require('fs');
const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)
exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
    const workRegex = /components\/work$/g;    
    const { createNodeField } = boundActionCreators
    if(workRegex.test(node.dir) && node.internal.type === 'Directory') {
        return new Promise((resolve, reject) => {
            let props = {
                node,
                name: `work`                
            }
            var config = JSON.parse(fs.readFileSync(`${node.absolutePath}/config.json`, 'utf8'))
            props.value = config;
            createNodeField(props)
            resolve(); 
        })     
    }

    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode})
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
    }
}

exports.createPages = ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators
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
      `
    ).then(result => {
        result.data.allMarkdownRemark.edges.map(({ node }) => {
            createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/blog-post.js`),
            context: {
                // Data passed to context is available in page queries as GraphQL variables.
                slug: node.fields.slug,
            },
            })
        })
        resolve()
      })
    })
  }