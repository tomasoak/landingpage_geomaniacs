import styled from 'styled-components';

export const Container = styled.div`
  height: 560px;
  width: 100%;
`;

export const Section = styled.div`
  margin: 40px 0 0 80px;

  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  width: 92%;
  margin: -40px 0 0 80px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TechContent = styled.div`
  width: 40%;
  margin: 140px 60px 0 0;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  text-align: right;
`;

export const DescriptionHeader = styled.div`
  width: 525px;
  height: 100px;
  padding-right: 25px;

  line-height: 38px;
  font-family: 'Sriracha', cursive;
  font-size: 36px;

  order: 1;
`;

export const DescriptionPage = styled.div`
  margin-top: -10px;
  padding-right: -26px;
  width: 95%;
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

export const ImageContent = styled.div`
  width: 70%;
  margin: 50px 100px 0 -80px;

  img {
    max-width: 120%;

    @media (max-width: 600px) {
      display: none;
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 60px;
  background: linear-gradient(
    90deg,
    rgba(0, 31, 147, 0.9) 0%,
    rgba(60, 63, 220, 0.9) 25%,
    rgba(83, 118, 208, 0.9) 50%,
    rgba(92, 80, 237, 0.9) 75%,
    rgba(154, 56, 240, 0.9) 100%
  );
`;
