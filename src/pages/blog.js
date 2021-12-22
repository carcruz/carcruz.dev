import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Seo from '../components/seo';
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
  LinkStyled,
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
      allMdx(
        filter: { frontmatter: { path: { regex: "/blog/" } } }
        sort: { order: DESC, fields: [frontmatter___order] }
      ) {
        nodes {
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
  `);

  const devArticles = data.allDevArticles.edges.map(
    (node) => node.node.article
  );
  const blogPosts = data.allMdx.nodes.map((node) => {
    return { ...node.frontmatter, id: node.id };
  });

  return (
    <>
      <Seo title="Blog" />
      <br></br>
      <CardsContainer>
        {blogPosts &&
          blogPosts.map((node) => (
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
                      node.tags
                        .split(',')
                        .map((tag) => (
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
        {devArticles &&
          devArticles.map((node) => (
            <Card key={node.id}>
              <StyledLink target="_blank" href={node.url} rel="noreferrer">
                <CardContent>
                  <CardTitle>{node.title}</CardTitle>
                  <CardText>{node.description}</CardText>
                  <CardDateContainer>
                    <CardDate>
                      {moment(node.created_at).format('MMM D, YYYY')}
                    </CardDate>
                  </CardDateContainer>
                  <TagContainer>
                    {node.tags.map((tag) => (
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
