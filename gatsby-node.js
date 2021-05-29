exports.createPages = async function ({ actions, graphql }) {
    const showcase = await graphql(`
      query {
        data: allDatoCmsRecipe {
            edges {
              node {
                url
              }
            }
          }
      }
    `).then(res => res.data)
  
    showcase.data.edges.forEach(edge => {
      const url = edge.node.url
      actions.createPage({
        path: `przepisy/${url}`,
        component: require.resolve(`./src/templates/recipe-post.js`),
        context: { url: url },
      })
    })
  }