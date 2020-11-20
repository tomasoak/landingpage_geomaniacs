import React from 'react';
import { Element } from 'react-scroll';
import { FiLinkedin, FiGithub } from 'react-icons/fi';

import TomasCarvalho from '../../assets/tomas_carvalho.jpg';

import {
  Container,
  Section,
  Header,
  HeaderTitle,
  HeaderUnderline,
  HeaderDescription,
  Member,
  MemberInfo,
  MemberSocialMedia,
} from './styles';

function Team() {
  return (
    <Element name="team">
      <Container>
        <Section>
          <Header>
            <HeaderTitle>Team</HeaderTitle>
            <HeaderUnderline />
          </Header>
          <HeaderDescription>
            Team that developed this web site.
          </HeaderDescription>
          <Member>
            <img src={TomasCarvalho} alt="Tomás Carvalho" />
          </Member>
          <MemberInfo>
            <p>Tomás Carvalho</p>
            <p>Geospatial Analyst | Full Stack Developer</p>
          </MemberInfo>
          <MemberSocialMedia>
            <a href="https://github.com/tomasoak">
              <FiGithub size={26} />
            </a>
            <a href="https://www.linkedin.com/in/tomas-carvalho/">
              <FiLinkedin size={26} />
            </a>
          </MemberSocialMedia>
        </Section>
      </Container>
    </Element>
  );
}

export default Team;
