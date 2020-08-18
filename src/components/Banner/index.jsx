import React from 'react';
import { Element } from 'react-scroll';

import { ReactComponent as HomeWorld } from '../../assets/undraw_world_figma.svg';

import { Container, Content, Title, ImageContent } from './styles';

const Banner = () => {
  return (
    <Element name="home">
      <Container>
        <Content>
          <Title>
            Geospatial
            <span>Intelligence</span>
            <p>Developed with ReactJS and Styled-Component</p>
          </Title>
          <ImageContent>
            <HomeWorld />
          </ImageContent>
        </Content>
      </Container>
    </Element>
  );
};

export default Banner;
