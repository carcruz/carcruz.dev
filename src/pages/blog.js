import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled, { css } from 'styled-components';
import SEO from '../components/seo';
import { Link } from 'gatsby';
import {
  SubTitle,
  Tag,
  TagContainer,
  Card,
  CardContent,
  CardsContainer,
  CardTitle,
  CardText,
  CardDateContainer,
  CardDate,
} from '../components/common';
import moment from 'moment';

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

const StyledLink = styled.a`
  ${LinkStyled}
`;

const StyledRoute = styled(Link)`
  ${LinkStyled}
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
      allMdx(filter: { frontmatter: { path: { regex: "/blog/" } } }) {
        edges {
          node {
            id
            frontmatter {
              tags
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
      <SubTitle>Blog posts</SubTitle>
      <CardsContainer>
        {blogs &&
          blogs.map(node => (
            <Card key={node.id}>
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
            </Card>
          ))}
      </CardsContainer>

      <SubTitle>Dev.to</SubTitle>
      <CardsContainer>
        {rawData &&
          rawData.map(node => (
            <Card key={node.id}>
              <StyledLink target="_blank" href={node.url}>
                <CardContent>
                  <CardTitle>{node.title}</CardTitle>
                  <CardText>{node.description}</CardText>
                  <CardDateContainer>
                    <CardDate>
                      {moment(node.created_at).format('MMM D, YYYY')}
                    </CardDate>
                  </CardDateContainer>
                  <TagContainer>
                    {node.tags.map(tag => (
                      <Tag key={`${node.id}-tag-${tag}`}>{tag}</Tag>
                    ))}
                  </TagContainer>
                </CardContent>
              </StyledLink>
            </Card>
          ))}
      </CardsContainer>
    </>
  );
};

export default Posts;
