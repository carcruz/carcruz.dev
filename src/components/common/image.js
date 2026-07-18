import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export const Image = ({ image, alt = '' }) => {
  const imageData = getImage(image);
  if (!imageData) {
    return <div>Picture not found</div>;
  }

  return <GatsbyImage image={imageData} alt={alt} />;
};
