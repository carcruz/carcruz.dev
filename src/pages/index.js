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

const HomePage = () => (
  <>
    <Seo title="Home" />

    <ProfileContainer>
      <MainHeader>Carlos Cruz-Castillo</MainHeader>
      <SubTitle>Senior Software Engineer & Team Lead</SubTitle>

      <StyledRelatedLinksContainer>
        <LocationLink url="https://goo.gl/maps/RxWushYKYkmoDMVj9">
          {' '}
          Cambridge, United Kingdom
        </LocationLink>
        <MailLink url="me@carcruzcast.com"> me@carcruzcast.com</MailLink>
        <GithubLink url="https://github.com/carcruz"> carcruz</GithubLink>
      </StyledRelatedLinksContainer>
    </ProfileContainer>
    <MainText>
      I'm Carlos Cruz-Castillo, a full-stack software engineer and team lead
      specializing in data-centred applications and data visualization. I build
      across domains — from genomics and drug discovery to IoT, smart cities,
      and AI-powered tooling — bringing the same focus on usability and
      engineering quality to each.
    </MainText>
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
    <br />
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
