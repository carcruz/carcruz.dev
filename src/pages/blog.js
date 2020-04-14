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
  LinkStyled
} from '../components/common';
import moment from 'moment';

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
                      node.tags.split(',').map(tag => (
                        <Tag key={`${node.id}-tag-${tag}`}>{tag}</Tag>
                      ))}
                  </TagContainer>
                </CardContent>
              </StyledRoute>
            </Card>
          ))}
      </CardsContainer>

      <SubTitle>
        Some in{' '}
        <a href="https://dev.to/" target="_blank" rel="noopener noreferrer">
          DEV.to
        </a>{' '}
        community
      </SubTitle>
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
