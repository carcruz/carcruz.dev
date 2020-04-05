import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import MiniLogo from '../../images/logo-mini.svg';

const StyledLink = styled(Link)`
  text-decoration: none;
  display: inline-block;
  color: #404041;
  padding: 10px 20px;
  margin-bottom: 10px;
  border: solid 1px #404041;
  transition: all 300ms ease;
  margin: 0 15px;
  &:hover {
    -webkit-box-shadow: 2px 2px 9px -4px rgba(71, 71, 71, 1);
    -moz-box-shadow: 2px 2px 9px -4px rgba(71, 71, 71, 1);
    box-shadow: 2px 2px 9px -4px rgba(71, 71, 71, 1);
    border: solid 1px #404041;
  }
  &.active {
    background-color: #17b6e5;
    color: #fff;
    border: solid 1px #404041;
  }
  vertical-align: middle;
`;

const NavBarContainer = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

const Navbar = () => {
  return (
    <NavBarContainer>
      <StyledLink activeClassName="active" to="/">
        Home
      </StyledLink>
      <StyledLink activeClassName="active" to="/posts">
        Bloog & Posts
      </StyledLink>
      <StyledLink activeClassName="active" to="/about">
        About
      </StyledLink>
    </NavBarContainer>
  );
};

export default Navbar;
