import React from 'react';
import SEO from '../components/seo';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { Link } from 'gatsby';

import {
  Tag,
  TagContainer,
  Card,
  CardContent,
  CardsContainer,
  CardTitle,
  CardText,
  CardContainerImage,
  LinkStyled,
  Image,
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
              smallImage {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const projects = data.allMdx.edges.map(node => {
    return { ...node.node.frontmatter, id: node.node.id };
  });

  console.log(projects);

  return (
    <>
      <SEO title="Projects" />
      <br></br>
      <CardsContainer>
        {projects &&
          projects.map(node => (
            <Card key={node.id}>
              <StyledRoute to={node.path}>
                <CardContent small>
                  <CardTitle>{node.title}</CardTitle>
                  <CardText>{node.description}</CardText>
                  <TagContainer>
                    {node.tags &&
                      node.tags
                        .split(',')
                        .map(tag => (
                          <Tag key={`${node.id}-tag-${tag}`}>{tag}</Tag>
                        ))}
                  </TagContainer>
                </CardContent>
                <CardContainerImage>
                  {node.smallImage && <Image fluidPath={node.smallImage.childImageSharp.fluid} />}
                </CardContainerImage>
              </StyledRoute>
            </Card>
          ))}
      </CardsContainer>
    </>
  );
};

export default IndexPage;
