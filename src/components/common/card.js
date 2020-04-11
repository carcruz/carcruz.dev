import styled from 'styled-components';

export const Card = styled.div`
  width: 100%;
`;

export const CardsContainer = styled.div`
  margin-bottom: 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 15px;
  grid-row-gap: 15px;
  @media only screen and (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media only screen and (max-width: 1075px) and (min-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const CardContent = styled.div`
  width: 100%;
`;

export const CardTitle = styled.h3`
  margin-bottom: 4px;
  margin-top: 0px;
`;

export const CardText = styled.p`
  margin: 0;
  margin-bottom: 14px;
  margin-top: 7px;
`;

export const CardDateContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  background-color: #CACACA;
  color: #fff;
  padding: 0px 5px;
`;

export const CardDate = styled.p`
  font-size: 11px;
  font-family: 'Inconsolata';
  margin: 0;
  text-align: right;
`;
