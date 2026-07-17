import styled from 'styled-components';

export const MainText = styled.p`
  font-size: 18px;
  line-height: 1.5;
`;

export const LinkText = styled.a`
  font-weight: 400;
`;

export const StrongText = styled.span`
  font-weight: 400;
`;

export const SubTitle = styled.h2`
  color: var(--main-color);
  margin-top: 0;
  margin-bottom: 15px;
`;

export const SubTitle2 = styled.h3`
  color: var(--main-color);
  margin-top: 0;
  margin-bottom: 30px;
`;

export const MainHeader = styled.div`
  color: var(--navy);
  font-size: 34px;
  font-family: 'Inconsolata';
`;

export const ReferenceText = styled.p`
  color: #666;
  font-style: italic;
`;

export const TagContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
`;

export const Tag = styled.span`
  padding: 2px 5px;
  background: var(--light-grey-color);
  color: #fff;
  margin-right: 7px;
  font-size: 12px;
  font-family: 'Inconsolata';
`;
