import React from 'react';
import { Element } from 'react-scroll';

import {
  Container,
  Section,
  FooterItem,
  Subscribe,
  SubsHeader,
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
      <Footer />
    </Element>
  );
}

export default Contact;
