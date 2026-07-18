import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export const ImageMDX = ({ src, alt }) => {
  const { allImageSharp } = useStaticQuery(graphql`
    query {
      allImageSharp {
        edges {
          node {
            gatsbyImageData(width: 1440)
            parent {
              ... on File {
                base
              }
            }
          }
        }
      }
    }
  `);
  const image = allImageSharp.edges.find(
    edge => edge.node.parent.base === src
  );
  if (!image) {
    return 'no image';
  }
  return <GatsbyImage image={getImage(image.node)} alt={alt} />;
};
