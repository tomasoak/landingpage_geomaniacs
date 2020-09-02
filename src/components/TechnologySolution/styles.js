import styled from 'styled-components';

export const Container = styled.div`
  height: 540px;
  width: 100%;

  background-color: #f0f0f5;
`;

export const Section = styled.div`
  margin: 40px 0 0 80px;

  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  width: 92%;
  margin: 20px 0 0 80px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TechContent = styled.div`
  width: 40%;
  margin-top: 60px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  text-align: left;
`;

export const DescriptionHeader = styled.div`
  width: 525px;
  height: 100px;
  margin-bottom: -20px;

  font-family: 'Sriracha', cursive;
  font-size: 36px;

  order: 1;
`;

export const DescriptionPage = styled.div`
  margin-top: -10px;
  width: 90%;
  text-align: left;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 400;
  color: #434343;
  font-style: italic;

  order: 2;
`;

export const DescriptionItems = styled.div`
  width: 488px;
  margin-top: 26px;
  order: 3;
`;
export const ListItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 300;
`;
export const Icon = styled.div`
  padding: 10px;
  padding-right: 4px;
  margin-right: 5px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  color: #7e5dec;
`;

export const ImageContent = styled.div`
  width: 50%;
  height: 400px;
  margin: 60px 100px 0 0;

  svg {
    max-width: 100%;
    height: auto;
    padding: 1%;

    @media (max-width: 600px) {
      display: none;
    }
  }
`;
