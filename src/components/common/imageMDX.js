import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

export const ImageMDX = ({ src, alt }) => {
  const { allImageSharp } = useStaticQuery(graphql`
    query {
      allImageSharp {
        edges {
          node {
            fluid(maxWidth: 1440) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
              originalName
            }
          }
        }
      }
    }
  `);
  console.log({src, alt, allImageSharp})
  const image = allImageSharp.edges.find(
    edge => edge.node.fluid.originalName === src
  );
  if (!image) {
    return "no image";
  }
  return <Img fluid={image.node.fluid} alt={alt} />;
};
