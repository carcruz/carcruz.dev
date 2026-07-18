import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from './header';
import 'normalize.css/normalize.css';
import './main-styles.css';

const PageContainer = styled.main`
  position: relative;
  min-height: 100vh;
  @media only screen and (max-width: 1520px) {
    margin: 0 30px;
  }
`;

const ContentWrap = styled.section`
  padding-top: 40px;
  padding-bottom: 90px;
  max-width: 1024px;
  margin: 0 auto;
  overflow: clip;
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
      <PageContainer>
        <Header />
        <ContentWrap>
          {children}
        </ContentWrap>
        <Footer>
          <p>© {new Date().getFullYear()}, Carlos Cruz-Castillo</p>
        </Footer>
      </PageContainer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
