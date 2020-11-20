import React from 'react';
// import { Element } from 'react-scroll';
import { FiCheckCircle } from 'react-icons/fi';
import { ReactComponent as UndrawSolution } from '../../assets/undraw_solution.svg';

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

function TechSolution() {
  return (
    <Container>
      <Section>
        <Content>
          <TechContent>
            <DescriptionHeader>Integrated Solutions</DescriptionHeader>

            <DescriptionPage>
              GEOManiacs offers you the most up-to-date technologies on the
              market
            </DescriptionPage>

            <DescriptionItems>
              <ListItem>
                <Icon>
                  <FiCheckCircle />
                </Icon>
                GeoSpatial BI
              </ListItem>
              <ListItem>
                <Icon>
                  <FiCheckCircle />
                </Icon>
                Cloud Processing
              </ListItem>
              <ListItem>
                <Icon>
                  <FiCheckCircle />
                </Icon>
                Web-GIS Platform
              </ListItem>
              <ListItem>
                <Icon>
                  <FiCheckCircle />
                </Icon>
                Earth Observation
              </ListItem>
              <ListItem>
                <Icon>
                  <FiCheckCircle />
                </Icon>
                Artificial GeoLocation Intelligence
              </ListItem>
            </DescriptionItems>
          </TechContent>
          <ImageContent>
            <UndrawSolution />
          </ImageContent>
        </Content>
      </Section>
    </Container>
  );
}

export default TechSolution;
