import React from 'react';

import Header from '../../components/Header';
import Banner from '../../components/Banner';
import About from '../../components/About';
import Services from '../../components/Services';
import Techonologies from '../../components/Technologies';
import Client from '../../components/Client';
import Team from '../../components/Team';
import Contact from '../../components/Contact';

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Services />
      <Techonologies />
      <Client />
      <Team />
      <Contact />
    </>
  );
};

export default Home;
