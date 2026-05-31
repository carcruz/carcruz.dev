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

const StyledRoute = styled(Link)`
  ${LinkStyled}
  @media only screen and (max-width: 700px) {
    &:hover {
      border: solid 1px transparent;
    }
  }
`;

const DevToSection = styled.div`
  margin-top: 50px;
`;

const DevToLabel = styled.h2`
  margin-bottom: 16px;
  margin-top: 0;
`;

const DevToList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const DevToItem = styled.li`
  border-bottom: 1px solid var(--light-grey-color);
  &:first-child {
    border-top: 1px solid var(--light-grey-color);
  }
`;

const DevToLink = styled.a`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
  padding: 10px 0;
  text-decoration: none;
  color: var(--grey-color);
  transition: color 200ms ease;
  &:hover {
    color: var(--blue);
  }
`;

const DevToTitle = styled.span`
  font-size: 14px;
  font-family: 'Inconsolata', monospace;
  flex: 1;
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const DevToMeta = styled.span`
  font-size: 11px;
  font-family: 'Inconsolata', monospace;
  color: var(--light-grey-color);
  white-space: nowrap;
  flex-shrink: 0;
  &::after {
    content: ' ↗';
  }
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

  const devArticles = data.allDevArticles.edges
    .map((node) => node.node.article)
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  const blogPosts = data.allMdx.nodes.map((node) => ({
    ...node.frontmatter,
    id: node.id,
  }));

  return (
    <>
      <Seo title="Blog" />
      <br />
      <CardsContainer>
        {blogPosts.map((node) => (
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

      <DevToSection>
        <DevToLabel>
          Also on{' '}
          <a href="https://dev.to/" target="_blank" rel="noopener noreferrer">
            DEV.to
          </a>
        </DevToLabel>
        <DevToList>
          {devArticles.map((node) => (
            <DevToItem key={node.id}>
              <DevToLink href={node.url} target="_blank" rel="noreferrer">
                <DevToTitle>{node.title}</DevToTitle>
                <DevToMeta>
                  {moment(node.created_at).format('MMM YYYY')}
                </DevToMeta>
              </DevToLink>
            </DevToItem>
          ))}
        </DevToList>
      </DevToSection>
    </>
  );
};

export default Posts;
