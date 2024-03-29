import React from 'react';
import Seo from '../components/seo';
import styled from 'styled-components';
import {
  MainHeader,
  MainText,
  RelatedLinksContainer,
  GithubLink,
  MailLink,
  LocationLink,
  StaticNavLink,
} from '../components/common';

const StaticLinksContainer = styled.nav`
  display: flex;
  justify-content: left;
  & > a:nth-child(2) {
    margin-left: 30px;
  }
`;

const HomePage = () => (
  <>
    <Seo title="Home" />
    <MainHeader>Carlos Cruz</MainHeader>
    <MainText>
      Hi! I’m Carlos Cruz, an experienced full-stack engineer with a curiosity
      for front-end implementations and SaaS.
    </MainText>
    <MainText>
      I enjoy building data visualizations and modern platforms tools for
      commercial, scientific, and research purposes, and I have worked in
      diverse data-driven industries, from IoT to Healthcare.
    </MainText>
    <MainText>
      Currently I am employed as Senior Web Developer and front-end Lead at{' '}
      <a href="https://www.opentargets.org/" target="_blank" rel="noreferrer">
        Open Targets.
      </a>{' '}
      Part of the{' '}
      <a href="https://www.ebi.ac.uk/" target="_blank" rel="noreferrer">
        European Bioinformatics Institute
      </a>
    </MainText>
    <br />
    <RelatedLinksContainer>
      <LocationLink url="https://goo.gl/maps/RxWushYKYkmoDMVj9">
        {' '}
        Cambridge, United Kingdom
      </LocationLink>
      <MailLink url="me@carcruzcast.com"> me@carcruzcast.com</MailLink>
      <GithubLink url="https://github.com/carcruz"> carcruz</GithubLink>
    </RelatedLinksContainer>
    <br />
    <br />
    <StaticLinksContainer>
      <StaticNavLink
        href="https://carcruz.s3-us-west-2.amazonaws.com/cv-carlos-cruz.pdf"
        target="blank"
      >
        CV
      </StaticNavLink>
      {/* <StaticNavLink
        href="https://carcruz.s3-us-west-2.amazonaws.com/resume-carlos-cruz.pdf"
        target="blank"
      >
        Resume
      </StaticNavLink> */}
    </StaticLinksContainer>
  </>
);

export default HomePage;
