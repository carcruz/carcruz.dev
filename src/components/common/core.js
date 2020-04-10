import styled from 'styled-components';
import { Link } from 'gatsby';

export const NavLink = styled(Link)`
  text-decoration: none;
  display: inline-block;
  color: #404041;
  padding: 10px 20px;
  margin-bottom: 10px;
  border: solid 1px #404041;
  transition: all 300ms ease;
  &:hover, &.active {
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

export const MainText = styled.p`
  font-size: 18px;
  line-height: 1.5;
  max-width: 720px;
`;

export const MainHeader = styled.div`
  color: #000;
  font-size: 34px;
  font-family: 'Inconsolata';
`;

export const BlogMainContent = styled.section`
  max-width: 650px;
  line-height: 1.6em;
  margin-bottom: 30px;
`;

export const ReferenceText = styled.p`
  color: #666;
  font-style: italic;
`;

export const BlogHeader = styled.div`
  margin-bottom: 30px;
`;

export const BlogFooter = styled.div`
  margin-top: 60px;
`
