exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  // POSTS
  const posts = await graphql(`
    query {
      allMdx(filter: { frontmatter: { path: { regex: "/blog/" } } }) {
        edges {
          node {
            id
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);
  if (posts.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }
  const postsNodes = posts.data.allMdx.edges;
  postsNodes.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: require.resolve('./src/components/post-layout.js'),
      context: { id: node.id },
    });
  });
  // PROJECTS
  const projects = await graphql(`
    query {
      allMdx(filter: { frontmatter: { path: { regex: "/projects/" } } }) {
        edges {
          node {
            id
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);
  if (projects.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }
  const projectsNodes = projects.data.allMdx.edges;
  projectsNodes.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: require.resolve('./src/components/project-layout.js'),
      context: { id: node.id },
    });
  });
};
