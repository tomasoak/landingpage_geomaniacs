import React from 'react';
import { Element } from 'react-scroll';
import { FiCheckCircle } from 'react-icons/fi';

import TechSolution from '../TechnologySolution';
import TechTerritory from '../TechnologyTerritory';

import {
  Container,
  Section,
  Header,
  HeaderDescription,
  HeaderUnderline,
  Content,
  ImageContent,
  TechContent,
  DescriptionHeader,
  DescriptionPage,
  DescriptionItems,
  ListItem,
  Icon,
  DescriptionButton,
} from './styles';
import { ReactComponent as UndrawReact } from '../../assets/undraw_react.svg';

function Techonologies() {
  return (
    <Element name="technologies">
      <Container>
        <Section>
          <Header>
            <HeaderDescription>Technologies</HeaderDescription>
            <HeaderUnderline />
          </Header>
          <Content>
            <ImageContent>
              <UndrawReact />
            </ImageContent>
            <TechContent>
              <DescriptionHeader>ReactJS</DescriptionHeader>

              <DescriptionPage>
                We are a GeoSpatial company that use ReactJS and the following
                technologies in our applications. We also design products to be
                scalable and easy-reproducible, gaining efficiency and lowering
                production costs.
              </DescriptionPage>

              <DescriptionItems>
                <ListItem>
                  <Icon>
                    <FiCheckCircle />
                  </Icon>
                  JavaScript
                </ListItem>
                <ListItem>
                  <Icon>
                    <FiCheckCircle />
                  </Icon>
                  React-icons
                </ListItem>
                <ListItem>
                  <Icon>
                    <FiCheckCircle />
                  </Icon>
                  React Hooks
                </ListItem>
                <ListItem>
                  <Icon>
                    <FiCheckCircle />
                  </Icon>
                  Styled-components
                </ListItem>
              </DescriptionItems>

              <DescriptionButton>Learn more</DescriptionButton>
            </TechContent>
          </Content>
        </Section>
      </Container>
      <TechSolution />
      <TechTerritory />
    </Element>
  );
}

export default Techonologies;
