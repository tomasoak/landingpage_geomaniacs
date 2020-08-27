import styled from 'styled-components';

export const Container = styled.div`
  height: 700px;
  width: 100%;
`;

export const Section = styled.div`
  margin: -40px 0 0 80px;

  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  margin-top: 70px;
  height: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderDescription = styled.div`
  margin: 12px 0;

  font-family: 'Roboto', cursive;
  font-size: 40px;
  line-height: 54px;
`;

export const HeaderUnderline = styled.div`
  width: 60px;
  border-bottom: 3px solid #2737cf;
  border-radius: 5px;

  &:hover {
    transition: 0.1s;
    border-color: #ffff00;
  }
`;

export const Content = styled.div`
  width: 92%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ImageContent = styled.div`
  width: 50%;
  height: 400px;
  margin: 60px 100px 0 0;

  svg {
    max-width: 100%;
    height: auto;
    padding: 36px;

    @media (max-width: 600px) {
      display: none;
    }
  }
`;

export const TechContent = styled.div`
  width: 40%;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  text-align: right;
`;

export const DescriptionHeader = styled.div`
  width: 525px;
  height: 100px;

  font-family: 'Sriracha', cursive;
  font-size: 36px;

  order: 1;
`;

export const DescriptionPage = styled.div`
  margin-top: -10px;

  text-align: right;
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
  justify-content: flex-end;
  align-items: center;
`;

export const Icon = styled.div`
  padding: 10px;
  padding-right: 4px;
  margin-right: 5px;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  color: #7e5dec;
`;

export const DescriptionButton = styled.div`
  width: 120px;
  height: 40px;

  padding: 7px;
  margin-top: 48px;

  align-items: center;

  font-size: 20px;

  color: #ffffff;
  border: 1px solid #7e5dec;
  background-color: #7e5dec;

  cursor: pointer;

  order: 4;

  &:hover {
    color: #fff000;
  }
`;
