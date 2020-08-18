import styled from 'styled-components';

export const Container = styled.div`
  padding: 120px 0;
  height: 760px;
  width: 100%;
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  margin-top: 40px;
`;

export const ImageContent = styled.div`
  width: 680px;
  height: 400px;

  margin: 0 100px 0 100px;

  svg {
    max-width: 100%;
    height: auto;
  }
`;

export const Description = styled.div`
  width: 40%;
  margin-right: 120px;

  display: flex;
  flex-direction: column;
  justify-content: right;
  align-items: flex-end;
`;

export const DescriptionHeader = styled.div`
  width: 525px;
  height: 100px;

  font-family: 'Sriracha', cursive;
  font-size: 36px;
  text-align: right;

  order: 1;
`;

export const DescriptionPage = styled.div`
  margin-top: -10px;
  order: 2;

  text-align: right;
  color: #434343;
  font-style: italic;
`;

export const DescriptionItems = styled.div`
  width: 488px;
  margin-top: 26px;
  order: 3;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const Icon = styled.i`
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

export const Footer = styled.div`
  margin-top: 80px;

  img {
    width: 100%;
  }
`;
