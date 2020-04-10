import React from 'react';
import SEO from '../components/seo';
import { MainHeader, MainText } from '../components/common';

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <MainHeader>Carlos Cruz</MainHeader>
    <MainText>
      Hi! I’m Carlos Cruz, a front-end web engineer with a curiosity for back-end implementations
      and SaaS. I have worked in scientific and research settings, as well as in
      myriad of data-driven industries.
    </MainText>
  </>
);

export default IndexPage;
