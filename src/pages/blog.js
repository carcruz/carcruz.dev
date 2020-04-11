import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled, { css } from 'styled-components';
import SEO from '../components/seo';
import { Link } from 'gatsby';
import moment from 'moment'

const LinkStyled = css`
  position: relative;
  text-decoration: none;
  display: flex;
  color: #404041;
  padding: 15px 20px;
  border: solid 1px #404041;
  transition: all 300ms ease;
  &:hover {
    -webkit-box-shadow: 2px 2px 9px -4px rgba(71, 71, 71, 1);
    -moz-box-shadow: 2px 2px 9px -4px rgba(71, 71, 71, 1);
    box-shadow: 2px 2px 9px -4px rgba(71, 71, 71, 1);
  }
`;

const Post = styled.div`
  width: 100%;
`;

const StyledLink = styled.a`
  ${LinkStyled}
`;

const StyledRoute = styled(Link)`
  ${LinkStyled}
`;

const PostsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 15px;
  grid-row-gap: 15px;
  @media only screen and (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media only screen and (max-width: 1075px) and (min-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const TagContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
`;

const Tag = styled.span`
  padding: 2px 5px;
  background: #f6f6f6;
  margin-right: 5px;
  font-size: 12px;
  font-weight: 500;
`;

const CardContent = styled.div`
  width: 100%;
`;

const CardTitle = styled.h3`
  margin-bottom: 4px;
  margin-top: 0px;
`;

const CardText = styled.p`
  margin: 0;
  margin-bottom: 7px;
`;

const CardDateContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  background-color: #A6A6A6;
  color: #fff;
  padding: 0px 5px; 
`;

const CardDate = styled.p`
  font-size: 11px;
  /* font-weight: 700; */
  font-family: 'Inconsolata';
  margin: 0;
  text-align: right;
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
              created_at
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
              date
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
                <CardContent>
                  <CardTitle>{node.title}</CardTitle>
                  <CardText>{node.description}</CardText>
                  <CardDateContainer>
                    <CardDate>{node.date}</CardDate>
                  </CardDateContainer>
                  <TagContainer>
                    {node.tags &&
                      node.tags.map(tag => (
                        <Tag key={`${node.id}-tag-${tag}`}>{tag}</Tag>
                      ))}
                  </TagContainer>
                </CardContent>
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
                <CardContent>
                  <CardTitle>{node.title}</CardTitle>
                  <CardText>{node.description}</CardText>
                  <CardDateContainer>
                    <CardDate>{moment(node.created_at).format('MMM D, YYYY')}</CardDate>
                  </CardDateContainer>
                  <TagContainer>
                    {node.tags.map(tag => (
                      <Tag key={`${node.id}-tag-${tag}`}>{tag}</Tag>
                    ))}
                  </TagContainer>
                </CardContent>
              </StyledLink>
            </Post>
          ))}
      </PostsContainer>
    </>
  );
};

export default Posts;
