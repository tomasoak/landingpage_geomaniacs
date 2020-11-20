import React from 'react';
import { Element } from 'react-scroll';
import { FiGithub } from 'react-icons/fi';

import {
  Container,
  Section,
  FooterItem,
  Subscribe,
  SubsHeader,
  CodeSource,
  Footer,
} from './styles';

function Contact() {
  return (
    <Element name="contact">
      <Container>
        <Section>
          <FooterItem>
            <h1>Resources</h1>
            <a href="#Contact">
              <li>Blog</li>
            </a>
            <a href="#Contact">
              <li>Community</li>
            </a>
          </FooterItem>
          <FooterItem>
            <h1>Company</h1>
            <a href="#Contact">
              <li>About</li>
            </a>
            <a href="#Contact">
              <li>Our Mission</li>
            </a>
            <a href="#Contact">
              <li>Our Team</li>
            </a>
            <a href="#Contact">
              <li>Carrers</li>
            </a>
          </FooterItem>
          <FooterItem>
            <h1>Contact Us</h1>
            <a href="#Contact">
              <li>Sales</li>
            </a>
            <a href="#Contact">
              <li>Support</li>
            </a>
          </FooterItem>
          <FooterItem>
            <SubsHeader>
              Stay up to date with all
              <strong> GEO Maniacs® </strong>
              news by subscribing to our newsletter.
            </SubsHeader>
            <Subscribe>
              <input type="e-mail" placeholder="Email Address" />
              <button type="submit">Subscribe</button>
            </Subscribe>
          </FooterItem>
        </Section>
      </Container>
      <CodeSource>
        <p>Open Code on </p>
        <a href="https://github.com/tomasoak/landingpage_geomaniacs">
          <FiGithub size={30} />
        </a>
      </CodeSource>
      <Footer />
    </Element>
  );
}

export default Contact;
