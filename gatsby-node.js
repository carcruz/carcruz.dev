const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const DEV_TO_USERNAME = 'carcruz';
const SITE_URL = 'https://www.carcruz.dev';

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

// Strips MDX-only syntax (imports, JSX components) so prose reads cleanly as
// plain markdown in llms-full.txt.
const stripMdxSyntax = (body) =>
  body
    .split('\n')
    .filter((line) => !/^import\s/.test(line.trim()))
    .join('\n')
    .replace(/<[^>]+>/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();

const toLink = (node) =>
  `- [${node.frontmatter.title}](${SITE_URL}${node.frontmatter.path}): ${node.frontmatter.description}`;

const toSection = (node) =>
  `## ${node.frontmatter.title}\n${SITE_URL}${node.frontmatter.path}\n\n${stripMdxSyntax(node.body)}`;

exports.onPostBuild = async ({ graphql, reporter }) => {
  const result = await graphql(`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
      posts: allMdx(
        filter: { frontmatter: { path: { regex: "/blog/" }, hidden: { ne: true } } }
        sort: { frontmatter: { order: DESC } }
      ) {
        edges {
          node {
            body
            frontmatter {
              path
              title
              description
            }
          }
        }
      }
      projects: allMdx(
        filter: { frontmatter: { path: { regex: "/projects/" }, hidden: { ne: true } } }
        sort: { frontmatter: { order: ASC } }
      ) {
        edges {
          node {
            body
            frontmatter {
              path
              title
              description
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "onPostBuild" query for llms.txt');
    return;
  }

  const { title, description } = result.data.site.siteMetadata;
  const posts = result.data.posts.edges.map(({ node }) => node);
  const projects = result.data.projects.edges.map(({ node }) => node);

  const llmsTxt = [
    `# ${title}`,
    '',
    `> ${description}`,
    '',
    '## Blog',
    ...posts.map(toLink),
    '',
    '## Projects',
    ...projects.map(toLink),
    '',
  ].join('\n');

  const llmsFullTxt =
    [`# ${title}`, '', `> ${description}`].join('\n') +
    '\n\n---\n\n' +
    [...posts, ...projects].map(toSection).join('\n\n---\n\n');

  fs.writeFileSync(path.join(__dirname, 'public', 'llms.txt'), llmsTxt);
  fs.writeFileSync(path.join(__dirname, 'public', 'llms-full.txt'), llmsFullTxt);

  reporter.info('Generated llms.txt and llms-full.txt');
};
