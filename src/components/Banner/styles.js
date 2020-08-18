import styled, { keyframes } from 'styled-components';

import Homebg from '../../assets/home_bg.png';

export const Container = styled.div`
  width: 100%;
  padding: 100px 0;
  height: 650px;

  overflow: hidden;
  align-items: center;

  background: url(${Homebg}) center no-repeat;
  background-size: cover;

  @media (min-width: 1200px) {
    background-attachment: fixed;
  }
`;

export const Content = styled.div`
  margin: 80px 0 0 60px;

  display: grid;
  grid-template-columns: 680px 1fr;
  grid-template-rows: auto;
`;

export const Title = styled.h1`
  margin-top: 80px;
  padding: 0 50px;

  align-self: flex-start;

  font-size: 42px;

  span {
    color: #faff00;
  }

  p {
    font-size: 24px;
    max-width: 670px;
    color: #b6b6b6;
  }
`;

const ImageUpDown = keyframes`
  0% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(-10px);  
  }
`;

export const ImageContent = styled.div`
  position: relative;
  padding: 0 15px 100px 0;
  margin: 0 180px 0 0;
  justify-self: center;

  svg {
    max-width: 100%;
    height: auto;
    vertical-align: middle;
    border-style: none;
    animation: 2s ${ImageUpDown} ease-in-out infinite alternate-reverse both;
  }
`;
