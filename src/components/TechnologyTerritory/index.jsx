import React from 'react';

import { FiCheckCircle } from 'react-icons/fi';

import UndrawRocket from '../../assets/undraw_rocket.png';

import {
  Container,
  Section,
  Content,
  TechContent,
  DescriptionHeader,
  DescriptionPage,
  DescriptionItems,
  ListItem,
  Icon,
  ImageContent,
} from './styles';

function TechTerritory() {
  return (
    <Container>
      <Section>
        <Content>
          <ImageContent>
            <img src={UndrawRocket} alt="Rocket" />
          </ImageContent>
          <TechContent>
            <DescriptionHeader>
              Sustainable territorial development
            </DescriptionHeader>

            <DescriptionPage>
              GEOManiacs counts with relevant spatial data scientists on the
              main sectors of society to bring insightful solutions
            </DescriptionPage>

            <DescriptionItems>
              <ListItem>
                <Icon>
                  <FiCheckCircle />
                </Icon>
                Logistics
              </ListItem>
              <ListItem>
                <Icon>
                  <FiCheckCircle />
                </Icon>
                Telecommunications
              </ListItem>
              <ListItem>
                <Icon>
                  <FiCheckCircle />
                </Icon>
                Heathcare & Pharma
              </ListItem>
              <ListItem>
                <Icon>
                  <FiCheckCircle />
                </Icon>
                Marketing & Advertising
              </ListItem>
              <ListItem>
                <Icon>
                  <FiCheckCircle />
                </Icon>
                Environmental & Natural Resources
              </ListItem>
            </DescriptionItems>
          </TechContent>
        </Content>
      </Section>
    </Container>
  );
}

export default TechTerritory;
