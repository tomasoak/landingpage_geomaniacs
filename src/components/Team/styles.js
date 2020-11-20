import styled from 'styled-components';

export const Container = styled.div`
  height: 720px;
  width: 100%;

  background-color: #f0f0f5;
`;

export const Section = styled.div`
  width: 100%;
  margin-top: -40px;
  padding: 0 50px;

  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const Header = styled.div`
  margin-top: 85px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderTitle = styled.div`
  font-family: 'Voltaire', sans-serif;
  font-size: 40px;
  line-height: 54px;

  margin-bottom: 12px;
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

  font-family: 'Roboto Condensed', sans-serif;
  font-size: 24px;
  font-style: italic;
  line-height: 37px;
  text-align: center;
  color: #4c4c4c;
`;

export const Member = styled.div`
  margin-top: 32px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  img {
    width: 240px;
    height: 300px;
    border-radius: 10px;
  }
`;

export const MemberInfo = styled.div`
  p {
    margin-top: 26px;
    margin-bottom: -20px;

    text-transform: uppercase;
    font-size: 28px;
    font-family: 'Staatliches', cursive;

    & + p {
      text-transform: uppercase;
      font-size: 20px;
      font-family: 'Roboto Condensed', sans-serif;
      letter-spacing: 0.02em;
      color: #6d6d6d;
    }
  }
`;

export const MemberSocialMedia = styled.div`
  margin-top: 32px;

  a {
    transition: color 0.3s;
    color: #6d6d6d;
    margin: 0 10px;
    display: inline-block;

    &:hover {
      color: #4c4c4c;
    }
  }
`;
