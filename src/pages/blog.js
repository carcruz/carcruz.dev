import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled, { css } from 'styled-components';
import SEO from '../components/seo';
import { Link } from 'gatsby';

const LinkStyled = css`
  text-decoration: none;
  display: flex;
  color: #404041;
  padding: 10px 20px;
  margin-bottom: 10px;
  border: solid 1px #404041;
  transition: all 300ms ease;
  &:hover {
    -webkit-box-shadow: 2px 2px 9px -4px rgba(71, 71, 71, 1);
    -moz-box-shadow: 2px 2px 9px -4px rgba(71, 71, 71, 1);
    box-shadow: 2px 2px 9px -4px rgba(71, 71, 71, 1);
  }
`;

const Post = styled.div`
  width: 33%;
  &:not(:last-child) {
    margin-right: 1%;
  }
  @media only screen and (max-width: 960px) {
    width: 50%;
  }

  @media only screen and (max-width: 700px) {
    width: 100%;
  }
`;

const StyledLink = styled.a`
  ${LinkStyled}
`;

const StyledRoute = styled(Link)`
  ${LinkStyled}
`;

const PostsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  @media only screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

const TagContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
`;

const Tag = styled.span`
  padding: 5px 5px;
  background: #f6f6f6;
  margin-right: 5px;
`;

const Posts = () => {
  const data = useStaticQuery(graphql`
    query getDevArticles {
      allDevArticles {
        edges {
          node {
            article {
              id
              title
              tags
              description
              url
            }
          }
        }
      }
      allMdx {
        edges {
          node {
            id
            frontmatter {
              blog
              title
              description
              path
            }
          }
        }
      }
    }
  `);

  const rawData = data.allDevArticles.edges.map(node => node.node.article);
  const blogs = data.allMdx.edges.map(node => {
    return { ...node.node.frontmatter, id: node.node.id };
  });

  return (
    <>
      <SEO title="Blog" />
      <h2>Blog posts</h2>
      <PostsContainer>
        {blogs &&
          blogs.map(node => (
            <Post key={node.id}>
              <StyledRoute to={node.path}>
                <div>
                  <h3>{node.title}</h3>
                  <p>{node.description}</p>
                  <TagContainer>
                    {node.tags &&
                      node.tags.map(tag => (
                        <Tag key={`${node.id}-tag-${tag}`}>{tag}</Tag>
                      ))}
                  </TagContainer>
                </div>
              </StyledRoute>
            </Post>
          ))}
      </PostsContainer>

      <h2>Dev.to</h2>
      <PostsContainer>
        {rawData &&
          rawData.map(node => (
            <Post key={node.id}>
              <StyledLink target="_blank" href={node.url}>
                <div>
                  <h3>{node.title}</h3>
                  <p>{node.description}</p>
                  <TagContainer>
                    {node.tags.map(tag => (
                      <Tag key={`${node.id}-tag-${tag}`}>{tag}</Tag>
                    ))}
                  </TagContainer>
                </div>
              </StyledLink>
            </Post>
          ))}
      </PostsContainer>
    </>
  );
};

export default Posts;
