import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';

const HeaderLayout = styled.header`
  box-sizing: border-box;
  position: sticky;
  top: 0;
  z-index: 100;
  background: #f8fafc;
  display: flex;
  justify-content: center;
  align-items: center;
  height: var(--header-height);
  padding-top: 30px;
  width: 100%;
`;

const Header = () => (
  <HeaderLayout>
    <Navbar />
  </HeaderLayout>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
