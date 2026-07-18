import React from 'react';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <meta key="charset" charSet="utf-8" />,
    <meta
      key="viewport"
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />,
    <meta
      key="keywords"
      name="keywords"
      content="developer,frontend,javascript,JavaScript,Costa Rica,Front end,Software engineer,d3js,d3"
    />,
  ]);
};
