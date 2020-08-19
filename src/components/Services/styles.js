import styled from 'styled-components';

import { ReactComponent as BackgroundService1 } from '../../assets/service01.svg';
import { ReactComponent as BackgroundService2 } from '../../assets/service02.svg';
import { ReactComponent as BackgroundService3 } from '../../assets/service03.svg';
import { ReactComponent as BackgroundService4 } from '../../assets/service04.svg';

// import BackgroundService1 from '../../assets/service01.svg';

export const Container = styled.div`
  height: 700px;
  background: #f0f0f5;
`;

export const Section = styled.div`
  margin: -40px 0 0 80px;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
`;

export const Header = styled.div`
  margin-top: 85px;
  /* height: 100px; */

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderName = styled.div`
  font-family: 'Roboto', cursive;
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

  font-family: 'Roboto';
  font-size: 24px;
  font-style: italic;
  line-height: 37px;
  text-align: center;
`;

export const ServicesContainer = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: space-evenly;
`;

export const ServicesItem = styled.div`
  width: 225px;
  height: 350px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: #ffffff;
  border-radius: 2%;

  &:hover {
    box-shadow: 0px 0 12px 0;
    transition: ease-in-out 0.4s;

    svg {
      path {
        color: ${props => props.hoverIconColor};
        transition: 0.5s;
      }
      cursor: pointer;
    }
  }
`;

export const ServiceLogo = styled.div`
  position: relative;
  margin-top: 24px;
  height: 112px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ServiceDescription = styled.div`
  margin: 36px 15px 0 15px;
  font-family: 'Roboto';
  font-size: 26px;
  line-height: 30px;
  text-align: center;
`;

export const Icon = styled.div`
  position: relative;
  top: 6px;
  left: 8px;
`;

export const IconBackground1 = styled(BackgroundService1)`
  position: absolute;
  width: 112.45px;
  height: 112.45px;
`;

export const IconBackground2 = styled(BackgroundService2)`
  position: absolute;
  width: 112.45px;
  height: 112.45px;
  top: 6px;
  left: -30px;
`;

export const IconBackground3 = styled(BackgroundService3)`
  position: absolute;
  width: 112.45px;
  height: 112.45px;
  top: 8px;
  left: -30px;
`;

export const IconBackground4 = styled(BackgroundService4)`
  position: absolute;
  width: 112.45px;
  height: 112.45px;
  top: 6px;
  left: -30px;
`;

export const ServiceButton = styled.div`
  position: relative;
  width: 90px;
  height: 34px;

  padding: 5px;
  margin-top: 70px;
  text-align: center;
  border-radius: 5%;
  cursor: pointer;

  background: #7a5ded;

  &:hover {
    border: 1px solid #ffff00;
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
