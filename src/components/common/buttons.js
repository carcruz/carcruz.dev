import React from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';
import { IoLogoGithub, IoMdGlobe, IoMdBook } from 'react-icons/io';

export const RelatedLinksContainer = styled.div`
  display: flex;
`;

const RelatedLink = styled.a`
  display: flex;
  align-items: center;
  margin-right: 25px;
  text-decoration: none;
  & > svg {
    margin-right: 5px;
  }
`;

export const LiveLink = ({ url, children }) => (
  <RelatedLink href={url}>
    <IoMdGlobe /> {children}
  </RelatedLink>
);

export const DocsLink = ({ url, children }) => (
  <RelatedLink href={url}>
    <IoMdBook /> {children}
  </RelatedLink>
);

export const GithubLink = ({ url, children }) => (
  <RelatedLink href={url} target="blank">
    <IoLogoGithub /> {children}
  </RelatedLink>
);

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #404041;
  padding: 7px 20px;
  margin-bottom: 10px;
  border: solid 1px #404041;
  transition: all 300ms ease;
  display: flex;
  align-items: center;
  justify-content: center;
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
  border: solid 1px #fff;
  transition: all 300ms ease;
  height: 100%;
  &:hover {
    border: solid 1px var(--grey-color);
  }
`;
