import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 380px;
`;

export const Section = styled.div`
  width: 100%;
  margin: 40px 0 20px 0;
  padding: 40px 50px 0 160px;

  display: flex;
  flex-direction: row;
  text-align: left;
`;

export const FooterItem = styled.div`
  margin-top: 20px;
  width: 250px;
  height: 350px;

  display: flex;
  flex-direction: column;

  h1 {
    padding-bottom: 20px;
    font-size: 30px;
    color: #6d6d6d;
    text-transform: uppercase;
    font-family: 'Staatliches', cursive;
  }

  a {
    font-weight: bold;
    padding: 8px;
    cursor: pointer;

    text-decoration: none;
    transition: color 0.3s;
    color: #000;
    font-size: 20px;
    font-family: 'Roboto Condensed', sans-serif;

    &:hover {
      color: #6d6d6d;
    }

    li {
      list-style-type: none;
    }
  }
`;

export const SubsHeader = styled.div`
  margin-top: 80px;
  width: 400px;

  font-family: 'Roboto Condensed', sans-serif;
  color: #6d6d6d;
`;

export const Subscribe = styled.div`
  margin-top: 20px;
  width: 225px;
  height: 350px;

  display: flex;
  flex-direction: row;

  input {
    width: 260px;
    height: 55px;
    padding: 12px 20px;
    margin-right: 32px;

    border: 2px solid #ccc;
    border-radius: 2.5px;

    font-size: 22px;
    font-family: 'Roboto Condensed', sans-serif;

    &:focus {
      border: 2px solid #7e5dec;
    }
  }

  button {
    border-left: 12px;
    padding: 12px;
    width: 160px;
    height: 55px;

    color: #fff;
    font-size: 22px;
    font-weight: bold;
    font-family: 'Roboto Condensed', sans-serif;

    cursor: pointer;
    border: none;
    background-color: #7e5dec;
    border-radius: 2.5px;

    &:hover {
      color: #fff000;
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
