import React from 'react';
import styled from 'styled-components';
import { NavLink } from '../common';

const NavBarContainer = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StyledNavLink = styled(NavLink)`
  margin: 0 15px;
  @media only screen and (max-width: 600px) {
    margin: 0 5px;
  }
`;

const Navbar = () => {
  return (
    <NavBarContainer>
      <StyledNavLink activeClassName="active" to="/">
        Home
      </StyledNavLink>
      <StyledNavLink activeClassName="active" partiallyActive={true} to="/blog">
        Blog
      </StyledNavLink>
      <StyledNavLink activeClassName="active" to="/projects">
        Projects
      </StyledNavLink>
    </NavBarContainer>
  );
};

export default Navbar;
