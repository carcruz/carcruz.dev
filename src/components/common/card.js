import styled from 'styled-components';

export const Card = styled.div`
  width: 100%;
  height: 150px;
`;

export const CardsContainer = styled.div`
  margin-bottom: 30px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 15px;
  grid-row-gap: 60px;
  @media only screen and (max-width: 1024px) {
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 45px;
  }
`;

export const CardContent = styled.div`
  width: ${props => (props.small ? '50%' : '100%')};
  padding: 15px 20px;
  @media only screen and (max-width: 700px) {
    width: ${props => (props.small ? '100%' : '100%')};
    padding: 5px 10px;
  }
`;

export const CardTitle = styled.h3`
  margin-bottom: 4px;
  margin-top: 0px;
  color: var(--cta-color);
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const CardText = styled.p`
  margin: 0;
  width: 100%;
  height: 48px;
  margin-bottom: 14px;
  margin-top: 7px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const CardContainerImage = styled.div`
  height: 100%;
  width: 50%;
  overflow: hidden;
  & .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }
  @media only screen and (max-width: 700px) {
    display: none;
  }
`;

export const CardDateContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  background-color: var(--light-grey-color);
  color: #fff;
  padding: 0px 5px;
`;

export const CardDate = styled.p`
  font-size: 11px;
  font-family: 'Inconsolata';
  margin: 0;
  text-align: right;
`;
