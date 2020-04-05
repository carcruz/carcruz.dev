import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import AnimatedLogo from '../AnimatedLogo';
import Navbar from './Navbar'
import { Provider } from 'react-dims';

const HeaderLayout = styled.header`
  display: flex;
  justify-content: center;
  padding: 30px;
  text-align: center;
  width: 100%;
`;

const Header = () => (
  <Provider>
    <HeaderLayout>
      {/* <AnimatedLogo /> */}
    </HeaderLayout>
    <Navbar />
  </Provider>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
