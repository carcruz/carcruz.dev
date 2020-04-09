import React from 'react';
import SEO from '../components/seo';
import styled from 'styled-components';

const MainText = styled.p`
  font-size: 18px;
  line-height: 1.5;
  max-width: 720px;
`;

const MainHeader = styled.div`
  color: #000;
  font-size: 34px;
  font-family: 'Inconsolata';
`;

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <br />
    <br />
    <MainHeader>Carlos Cruz</MainHeader>
    <MainText>
      I’m a front-end web engineer with a curiosity for back-end implementations
      and SaaS. I have worked in scientific and research settings, as well as in
      myriad of data-driven industries.
    </MainText>
  </>
);

export default IndexPage;
