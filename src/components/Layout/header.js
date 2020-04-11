import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar'

const HeaderLayout = styled.header`
  display: flex;
  justify-content: center;
  padding: 60px 0;
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
