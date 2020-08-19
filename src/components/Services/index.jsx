import React from 'react';
import { Element } from 'react-scroll';
import {
  FaSatellite,
  FaDatabase,
  FaMapMarkedAlt,
  FaUsersCog,
} from 'react-icons/fa';

import {
  Container,
  Section,
  Header,
  HeaderName,
  HeaderUnderline,
  HeaderDescription,
  ServicesContainer,
  ServicesItem,
  ServiceLogo,
  ServiceDescription,
  ServiceButton,
  Icon,
  IconBackground1,
  IconBackground2,
  IconBackground3,
  IconBackground4,
  Footer,
} from './styles';

function Services() {
  return (
    <Element name="services">
      <Container>
        <Section>
          <Header>
            <HeaderName>Services</HeaderName>
            <HeaderUnderline />
          </Header>
          <HeaderDescription>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs.
          </HeaderDescription>

          <ServicesContainer>
            <ServicesItem hoverIconColor="#7a5ded">
              <ServiceLogo>
                <IconBackground1 />
                <Icon>
                  <FaSatellite size={30} />
                </Icon>
              </ServiceLogo>
              <ServiceDescription>Satelite Image Analysis</ServiceDescription>
              <ServiceButton>Select</ServiceButton>
            </ServicesItem>

            <ServicesItem hoverIconColor="#ffa76e">
              <ServiceLogo>
                <IconBackground2 />
                <Icon>
                  <FaDatabase size={30} />
                </Icon>
              </ServiceLogo>
              <ServiceDescription>GeoSpatial database</ServiceDescription>
              <ServiceButton>Select</ServiceButton>
            </ServicesItem>

            <ServicesItem hoverIconColor="#e80368">
              <ServiceLogo>
                <IconBackground3 />
                <Icon>
                  <FaMapMarkedAlt size={32} />
                </Icon>
              </ServiceLogo>
              <ServiceDescription>Territorial Inteligence</ServiceDescription>
              <ServiceButton>Select</ServiceButton>
            </ServicesItem>

            <ServicesItem hoverIconColor="#ffbb2c">
              <ServiceLogo>
                <IconBackground4 />
                <Icon>
                  <FaUsersCog size={32} />
                </Icon>
              </ServiceLogo>
              <ServiceDescription>Training in Company</ServiceDescription>
              <ServiceButton>Select</ServiceButton>
            </ServicesItem>
          </ServicesContainer>
        </Section>
      </Container>
      <Footer />
    </Element>
  );
}

export default Services;
