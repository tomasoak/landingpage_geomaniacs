import styled from 'styled-components';

export const Container = styled.div`
  height: 700px;
  width: 100%;
`;

export const Section = styled.div`
  width: 100%;
  margin-top: -40px;
  padding: 0 50px;

  display: flex;
  flex-direction: column;
`;

export const Logo = styled.div`
  margin-top: 70px;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const ClientLogo = styled.div`
  margin: 16px 32px 0 32px;

  img {
    &:hover {
      cursor: pointer;
      transform: scale(1.15);
      transition: 0.4s ease-in-out;
    }
  }
`;

export const Header = styled.div`
  margin-top: 20px;
  height: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderTitle = styled.div`
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

export const HeaderDescription = styled.div`
  margin-top: 32px;

  font-family: 'Roboto';
  font-size: 24px;
  font-style: italic;
  line-height: 37px;
  text-align: center;
`;

export const TestimonialItem = styled.div`
  margin-top: 32px;
  box-sizing: content-box;
  min-height: 200px;

  img {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    margin: -40px 0 0 40px;
    position: relative;
    z-index: 2;
    border: 6px solid #ffff00;
    box-shadow: 0px 2px 15px;
  }

  p {
    font-style: italic;
    margin: 0 20px 0 20px;
    padding: 20px 20px 60px 20px;
    z-index: 1;
    position: relative;
    border-radius: 6px;
    z-index: 1;
    box-shadow: 0 0px 20px 0;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
    margin: 10px 0 5px 45px;
  }
  h4 {
    font-size: 14px;
    margin: 0 0 0 45px;
  }
`;

export const QuoteLeftIcon = styled.span`
  display: inline-block;
  left: -5px;
  position: relative;
`;

export const QuoteRightIcon = styled.span`
  display: inline-block;
  right: -5px;
  position: relative;
  top: 10px;
`;
