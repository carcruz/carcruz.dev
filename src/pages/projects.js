import React from 'react';
import SEO from '../components/seo';
import { useStaticQuery, graphql } from 'gatsby';
import styled, { css } from 'styled-components';
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

const StyledRoute = styled(Link)`
  ${LinkStyled}
`;

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query getProjects {
      allMdx(filter: { frontmatter: { path: { regex: "/projects/" } } }) {
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

  const projects = data.allMdx.edges.map(node => {
    return { ...node.node.frontmatter, id: node.node.id };
  });

  return (
    <>
      <SEO title="Projects" />
      <SubTitle>Projects</SubTitle>
      <CardsContainer>
        {projects &&
          projects.map(node => (
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
    </>
  );
};

export default IndexPage;
