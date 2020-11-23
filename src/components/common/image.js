import React from 'react';
import Img from 'gatsby-image';

export const Image = ({ fluidPath }) => {
  if (!fluidPath) {
    return <div>Picture not found</div>;
  }

  return <Img fluid={fluidPath} />;
};
