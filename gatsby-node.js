const crypto = require('crypto');

const DEV_TO_USERNAME = 'carcruz';

exports.sourceNodes = async ({ actions, reporter }) => {
  const { createNode } = actions;

  let articles;
  try {
    const res = await fetch(
      `https://dev.to/api/articles?username=${DEV_TO_USERNAME}`
    );
    if (!res.ok) {
      throw new Error(`dev.to API responded with ${res.status}`);
    }
    articles = await res.json();
  } catch (error) {
    reporter.warn(`Could not fetch dev.to articles: ${error.message}`);
    return;
  }

  articles.forEach((article) => {
    const jsonString = JSON.stringify(article);
    createNode({
      article,
      id: `${article.id}`,
      parent: null,
      children: [],
      internal: {
        type: 'DevArticles',
        contentDigest: crypto.createHash('md5').update(jsonString).digest('hex'),
      },
    });
  });
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const postTemplate = require.resolve('./src/components/post-layout.js');
  const projectTemplate = require.resolve('./src/components/project-layout.js');
  // POSTS
  const posts = await graphql(`
    query {
      allMdx(filter: { frontmatter: { path: { regex: "/blog/" } } }) {
        edges {
          node {
            id
            internal {
              contentFilePath
            }
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
      component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
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
            internal {
              contentFilePath
            }
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
      component: `${projectTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: { id: node.id },
    });
  });
};
