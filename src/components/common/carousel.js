import { ImageMDX } from './imageMDX';
import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const SlickCarousel = ({ settings, images }) => (
  <Slider {...settings}>
    {images.map((image, i) => (
      <div key={i}>
        <ImageMDX src={`${image.src}`} alt={`${image.alt}`} />
      </div>
    ))}
  </Slider>
);
