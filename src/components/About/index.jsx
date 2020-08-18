import React from 'react';
import { Element } from 'react-scroll';
import { FiCheckCircle } from 'react-icons/fi';

import {
  Container,
  ContainerInfo,
  ImageContent,
  Description,
  DescriptionHeader,
  DescriptionPage,
  DescriptionItems,
  ListItem,
  Icon,
  DescriptionButton,
  Footer,
} from './styles';

import { ReactComponent as AboutImg } from '../../assets/undraw_about.svg';
import AboutFooter from '../../assets/about_footer.png';

function About() {
  return (
    <Element name="about">
      <Container>
        <ContainerInfo>
          <ImageContent>
            <AboutImg />
          </ImageContent>

          <Description>
            <DescriptionHeader>Single Page Website</DescriptionHeader>

            <DescriptionPage>
              As the name defines, this type of layout is made to display all
              the content on just one page, simulating a GeoSpatial company,
              with well-defined sections displaying the contents
            </DescriptionPage>

            <DescriptionItems>
              <ListItem>
                <Icon>
                  <FiCheckCircle />
                </Icon>
                React
              </ListItem>
              <ListItem>
                <Icon>
                  <FiCheckCircle />
                </Icon>
                Lorem Ipsum text
              </ListItem>
              <ListItem>
                <Icon>
                  <FiCheckCircle />
                </Icon>
                Styled-component
              </ListItem>
              <ListItem>
                <Icon>
                  <FiCheckCircle />
                </Icon>
                React Scroll Library to vertical scrolling effect
              </ListItem>
            </DescriptionItems>

            <DescriptionButton>Learn more</DescriptionButton>
          </Description>
        </ContainerInfo>
        <Footer>
          <img src={AboutFooter} alt="AboutFooter" />
        </Footer>
      </Container>
    </Element>
  );
}

export default About;
