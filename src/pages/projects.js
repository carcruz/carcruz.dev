import React from 'react';
import SEO from '../components/seo';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
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
