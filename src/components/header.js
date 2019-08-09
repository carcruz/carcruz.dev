import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import AnimatedLogo from './AnimatedLogo';


const HeaderLayout = styled.header`
  display: flex;
  align-content: space-between;
  padding: 0 30px;
  margin-top: 30px;
`;

const Header = () => (
  <HeaderLayout>
    <AnimatedLogo />
  </HeaderLayout>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
