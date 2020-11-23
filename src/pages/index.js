import React from 'react';
import SEO from '../components/seo';
import styled from 'styled-components';
import {
  MainHeader,
  MainText,
  RelatedLinksContainer,
  GithubLink,
  MailLink,
  LocationLink,
  StaticNavLink
} from '../components/common';

const StaticLinksContainer = styled.nav`
  display: flex;
  justify-content: left;
  &> a:nth-child(2) {
    margin-left: 30px;
  }
`;

const IndexPage = () => {

  return (
    <>
      <SEO title="Home" />
      <MainHeader>Carlos Cruz</MainHeader>
      <MainText>
        Hi! I’m Carlos Cruz, a front-end web engineer with a curiosity for
        back-end implementations and SaaS. I have worked in scientific and
        research settings, as well as in myriad of data-driven industries.
      </MainText>
      <br />
      <RelatedLinksContainer>
        <LocationLink url="https://goo.gl/maps/C29XqxWtDJixzrQX9"> Costa Rica</LocationLink>
        <MailLink url="me@carcruzcast.com"> me@carcruzcast.com</MailLink>
        <GithubLink url="https://github.com/carcruz"> carcruz</GithubLink>
      </RelatedLinksContainer>
      <br />
      <br />
      <StaticLinksContainer>
        <StaticNavLink href="https://carcruz.s3-us-west-2.amazonaws.com/CV.pdf" target="blank">
          CV
        </StaticNavLink>
        <StaticNavLink href="https://carcruz.s3-us-west-2.amazonaws.com/Resume.pdf" target="blank">
          Resume
        </StaticNavLink>
      </StaticLinksContainer>
    </>
  );
};

export default IndexPage;
