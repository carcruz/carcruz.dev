import React from 'react';
import Seo from '../components/seo';
import styled, { keyframes } from 'styled-components';
import {
  MainHeader,
  MainText,
  RelatedLinksContainer,
  GithubLink,
  MailLink,
  LocationLink,
  StaticNavLink,
  SubTitle,
  LinkText,
  StrongText,
  SubTitle2,
} from '../components/common';

const StaticLinksContainer = styled.nav`
  display: flex;
  justify-content: left;
  & > a:nth-child(2) {
    margin-left: 30px;
  }
`;

const StyledRelatedLinksContainer = styled(RelatedLinksContainer)`
  margin-bottom: 30px;
`;

const ProfileContainer = styled.div`
  margin-bottom: 75px;
  margin-top: 60px;
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AnimatedBlock = styled.div`
  opacity: 0;
  animation: ${fadeInUp} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  animation-delay: ${(props) => props.index * 90}ms;

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none;
  }
`;

const HomePage = () => (
  <>
    <ProfileContainer>
      <AnimatedBlock index={0}>
        <MainHeader>Carlos Cruz-Castillo</MainHeader>
      </AnimatedBlock>
      <AnimatedBlock index={1}>
        <SubTitle>Senior Software Engineer & Team Lead</SubTitle>
      </AnimatedBlock>
      <AnimatedBlock index={2}>
        <StyledRelatedLinksContainer>
          <LocationLink url="https://goo.gl/maps/RxWushYKYkmoDMVj9">
            {' '}
            Cambridge, United Kingdom
          </LocationLink>
          <MailLink url="me@carcruzcast.com"> me@carcruzcast.com</MailLink>
          <GithubLink url="https://github.com/carcruz"> carcruz</GithubLink>
        </StyledRelatedLinksContainer>
      </AnimatedBlock>
    </ProfileContainer>
    <AnimatedBlock index={3}>
      <MainText>
        I'm Carlos Cruz-Castillo, a full-stack software engineer and team lead
        specializing in data-centred applications and data visualization. I build
        across domains — from genomics and drug discovery to IoT, smart cities,
        and AI-powered tooling — bringing the same focus on usability and
        engineering quality to each.
      </MainText>
    </AnimatedBlock>
    <AnimatedBlock index={4}>
      <MainText>
        Currently, I lead the front-end team at{' '}
        <LinkText href="https://www.opentargets.org/">Open Targets</LinkText> (
        <LinkText href="https://www.ebi.ac.uk/">
          European Bioinformatics Institute
        </LinkText>
        ), where our platforms serve{' '}
        <StrongText>50,000+ researchers globally</StrongText>, each month. With
        over 10 years of experience spanning healthcare, IoT, and scientific
        computing, I've published research in{' '}
        <LinkText href="https://academic.oup.com/bioinformatics">
          Oxford Bioinformatics
        </LinkText>{' '}
        and built production systems supporting critical drug discovery pipelines.
      </MainText>
    </AnimatedBlock>
    <br />
    <AnimatedBlock index={5}>
      <SubTitle2>Recent Highlights</SubTitle2>
      <MainText>
        <LinkText href="https://academic.oup.com/bioinformatics/article/41/4/btaf070/8010255">
          {' '}
          Published Research (2025)
        </LinkText>{' '}
        - Lead author of "Associations on the Fly" in Oxford Bioinformatics,
        developing breakthrough tools for systematic drug target identification.
      </MainText>
      <MainText>
        <LinkText href="https://academic.oup.com/bioinformatics/article/41/4/btaf070/8010255">
          {' '}
          Technical Leadership
        </LinkText>{' '}
        - Led migration to modern Turborepo architecture, reducing build times by
        60% while enabling AI integration across research platforms.
      </MainText>
    </AnimatedBlock>
    <br />
    <br />
    <AnimatedBlock index={6}>
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
    </AnimatedBlock>
  </>
);

export default HomePage;

export const Head = () => (
  <Seo
    title="Home"
    pathname="/"
    description="Carlos Cruz-Castillo is a full-stack software engineer and team lead specializing in data-centred applications and data visualization, from genomics and drug discovery to IoT and AI-powered tooling."
    jsonLd={{
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Carlos Cruz-Castillo',
      jobTitle: 'Senior Software Engineer & Team Lead',
      url: 'https://www.carcruz.dev',
      email: 'mailto:me@carcruzcast.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Cambridge',
        addressCountry: 'GB',
      },
      sameAs: ['https://github.com/carcruz'],
    }}
  />
);
