import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from './header';
import { Helmet } from 'react-helmet';
import 'normalize.css/normalize.css';
import './main-styles.css';

const PageContainer = styled.main`
  position: relative;
  min-height: 100vh;
  @media only screen and (max-width: 1520px) {
    margin: 0 40px;
  }
`;

const ContentWrap = styled.section`
  padding-bottom: 90px; /* Footer height */
  max-width: 1024px;
  margin: 0 auto;
  overflow: hidden;
`;

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  border-top: 1px solid #e3e3e3;
  text-align: center;
  height: 60px;
`;

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="keywords"
          content="developer,frontend,javascript,JavaScript,Costa Rica,Front end,Software engineer,d3js,d3"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <PageContainer>
        <ContentWrap>
          <Header />
          {children}
        </ContentWrap>
        <Footer>
          <p>© {new Date().getFullYear()}, Carlos Cruz</p>
        </Footer>
      </PageContainer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
