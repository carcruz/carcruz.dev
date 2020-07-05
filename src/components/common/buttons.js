import { Link } from 'gatsby';
import styled, { css } from 'styled-components';

export const NavLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: #404041;
  padding: 7px 20px;
  margin-bottom: 10px;
  border: solid 1px #404041;
  transition: all 300ms ease;
  &:hover,
  &.active {
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
`;

export const LinkStyled = css`
  position: relative;
  text-decoration: none;
  display: flex;
  color: #404041;
  width: 100%;
  border: solid 1px var(--grey-color);
  transition: all 300ms ease;
  height: 100%;
  &:hover {
    -webkit-box-shadow: 2px 2px 9px -4px rgba(71, 71, 71, 1);
    -moz-box-shadow: 2px 2px 9px -4px rgba(71, 71, 71, 1);
    box-shadow: 2px 2px 9px -4px rgba(71, 71, 71, 1);
  }
`;
