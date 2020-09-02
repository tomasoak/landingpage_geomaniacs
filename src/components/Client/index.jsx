import React from 'react';
import { Element } from 'react-scroll';
import Slider from 'react-slick';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

import client1 from '../../assets/nasa_logo.png';
import client2 from '../../assets/esa_logo.png';
import client3 from '../../assets/esri_logo.png';
import client4 from '../../assets/osgeo_logo.png';
import client5 from '../../assets/gdal_logo.png';
import client6 from '../../assets/digitalGlobe_logo.png';

import billie from '../../assets/billieHoliday.png';
import chet from '../../assets/chetBaker.png';
import miles from '../../assets/milesDavis.jpg';
import herbie from '../../assets/herbieHancock.jpg';
import ella from '../../assets/ellaFitzgerald.jpg';
import john from '../../assets/johnColtrane_old.jpg';

import {
  Container,
  Section,
  Logo,
  ClientLogo,
  Header,
  HeaderTitle,
  HeaderUnderline,
  HeaderDescription,
  TestimonialItem,
  QuoteLeftIcon,
  QuoteRightIcon,
} from './styles';

function Testemonials() {
  return (
    <Element name="clients">
      <Container>
        <Section>
          <Logo>
            <ClientLogo>
              <a href="https://www.nasa.gov/">
                <img src={client1} alt="NasaLogo" />
              </a>
            </ClientLogo>
            <ClientLogo>
              <a href="http://www.esa.int/">
                <img src={client2} alt="ESALogo" />
              </a>
            </ClientLogo>
            <ClientLogo>
              <a href="https://www.esri.com/en-us/home">
                <img src={client3} alt="EsriLogo" />
              </a>
            </ClientLogo>
            <ClientLogo>
              <a href="https://www.osgeo.org/">
                <img src={client4} alt="OsGeoLogo" />
              </a>
            </ClientLogo>
            <ClientLogo>
              <a href="https://gdal.org/">
                <img src={client5} alt="GDALLogo" />
              </a>
            </ClientLogo>
            <ClientLogo>
              <a href="https://www.digitalglobe.com/">
                <img src={client6} alt="DigitalGlobeLogo" />
              </a>
            </ClientLogo>
          </Logo>
          <Header>
            <HeaderTitle>Testemonials</HeaderTitle>
            <HeaderUnderline />
          </Header>
          <HeaderDescription>
            These clients and high-level technicians really enjoy our work and
            services.
          </HeaderDescription>
          <Slider
            arrows={false}
            dots
            autoplay
            infinite
            speed={500}
            slidesToShow={3}
            slidesToScroll={3}
          >
            <TestimonialItem>
              <p>
                <QuoteLeftIcon>
                  <FaQuoteLeft color="#8458F0" size={18} />
                </QuoteLeftIcon>
                Don't play what's there; play what's not there. Knowledge is
                freedom and ignorance is slavery
                <QuoteRightIcon>
                  <FaQuoteRight color="#8458F0" size={18} />
                </QuoteRightIcon>
              </p>
              <img src={miles} alt="Miles Davis" />
              <h3>Miles Davis</h3>
              <h4>Astronaut</h4>
            </TestimonialItem>
            <TestimonialItem>
              <p>
                <QuoteLeftIcon>
                  <FaQuoteLeft color="#8458F0" size={18} />
                </QuoteLeftIcon>
                Life is not about finding your limitations; it's about finding
                your infinity. Don’t be afraid to expand yourself, to step out
                of your comfort zone. That’s where the joy and the adventure
                lie.
                <QuoteRightIcon>
                  <FaQuoteRight color="#8458F0" size={18} />
                </QuoteRightIcon>
              </p>
              <img src={herbie} alt="Herbie Hancock" />
              <h3>Herbie Hancock</h3>
              <h4>Ceo &amp; Founder</h4>
            </TestimonialItem>
            <TestimonialItem>
              <p>
                <QuoteLeftIcon>
                  <FaQuoteLeft color="#8458F0" size={18} />
                </QuoteLeftIcon>
                You can't copy anybody and end with anything. If you copy, it
                means you're working without any real feeling. No two people on
                earth are alike, and it's got to be that way in music or it
                isn't music.
                <QuoteRightIcon>
                  <FaQuoteRight color="#8458F0" size={18} />
                </QuoteRightIcon>
              </p>
              <img src={billie} alt="Billie Holiday" />
              <h3>Billie Holiday</h3>
              <h4>Astrophysicist</h4>
            </TestimonialItem>
            <TestimonialItem>
              <p>
                <QuoteLeftIcon>
                  <FaQuoteLeft color="#8458F0" size={18} />
                </QuoteLeftIcon>
                My music is the spiritual expression of what I am — my faith, my
                knowledge, my being...When you begin to see the possibilities of
                music, you desire to do something really good for people, to
                help humanity free itself from its hangups...I want to speak to
                their souls.
                <QuoteRightIcon>
                  <FaQuoteRight color="#8458F0" size={18} />
                </QuoteRightIcon>
              </p>
              <img src={john} alt="John Coltrane" />
              <h3>John Coltrane</h3>
              <h4>Astronaut</h4>
            </TestimonialItem>
            <TestimonialItem>
              <p>
                <QuoteLeftIcon>
                  <FaQuoteLeft color="#8458F0" size={18} />
                </QuoteLeftIcon>
                Just don’t give up trying to do what you really want to do.
                Where there is love and inspiration, I don’t think you can go
                wrong.
                <QuoteRightIcon>
                  <FaQuoteRight color="#8458F0" size={18} />
                </QuoteRightIcon>
              </p>
              <img src={ella} alt="Ella Fitzgerald" />
              <h3>Ella Fitzgerald</h3>
              <h4>Ceo &amp; Founder</h4>
            </TestimonialItem>
            <TestimonialItem>
              <p>
                <QuoteLeftIcon>
                  <FaQuoteLeft color="#8458F0" size={18} />
                </QuoteLeftIcon>
                I'm definitely a romantic, I don't think life is really worth
                all the pain and effort and struggling if you don't have
                somebody that you love very much.
                <QuoteRightIcon>
                  <FaQuoteRight color="#8458F0" size={18} />
                </QuoteRightIcon>
              </p>
              <img src={chet} alt="Chet Baker" />
              <h3>Chet Baker</h3>
              <h4>Astrophysicist</h4>
            </TestimonialItem>
          </Slider>
        </Section>
      </Container>
    </Element>
  );
}

export default Testemonials;
