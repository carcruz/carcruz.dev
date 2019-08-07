import PropTypes from 'prop-types';
import React from 'react';
import Logo from './Logo';
import { Link } from 'gatsby';
import styled from 'styled-components';

const HeaderLayout = styled.header`
  display: flex;
  align-content: space-between;
  padding: 0 30px;
  margin-top: 30px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Header = ({ siteTitle }) => (
  <HeaderLayout>
    <StyledLink to="/">
      <Logo>Carlos Cruz</Logo>
    </StyledLink>
  </HeaderLayout>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
