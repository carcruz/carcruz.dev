import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';

const HeaderLayout = styled.header`
  display: flex;
  justify-content: center;
  padding-top: 3em;
  padding-bottom: 60px;
  text-align: center;
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
