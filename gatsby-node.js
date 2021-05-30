exports.createPages = async function ({ actions, graphql }) {
  const showcase = await graphql(`
    query {
      data: allDatoCmsRecipe {
        edges {
          node {
            url
            category {
              name
              url
            }
          }
        }
      }
    }
  `).then((res) => res.data);

  showcase.data.edges.forEach((edge) => {
    const url = edge.node.url;
    const categoryUrl = edge.node.category.url;

    // Create page for specific category
    if (categoryUrl === "posilki-na-silownie") {
      actions.createPage({
        path: `przepisy/${categoryUrl}/${url}`,
        component: require.resolve(`./src/templates/recipe-post.js`),
        context: { url: url },
      });
    }

    if (categoryUrl === "posilki-odchudzajace") {
      actions.createPage({
        path: `przepisy/${categoryUrl}/${url}`,
        component: require.resolve(`./src/templates/recipe-post.js`),
        context: { url: url },
      });
    }

    if (categoryUrl === "posilki-dla-kobiet-w-ciazy-i-karmiacych") {
      actions.createPage({
        path: `przepisy/${categoryUrl}/${url}`,
        component: require.resolve(`./src/templates/recipe-post.js`),
        context: { url: url },
      });
    }
  });
};
