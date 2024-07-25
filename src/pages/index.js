import { createContext, useContext, useState } from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

import Head from 'next/head';
import { useTranslation } from '@/context';

const Home = () => {
  const { language } = useTranslation();
  console.log(language, "222")
  return (
    <>
      <Head>
        <title>Muhammad Anas Bakkar Portfolio</title>
        <meta name="description" content="Muhammad Anas Bakkar Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <div style={{`  background-color: #1D1E20;`}}> */}
      <div style={{ backgroundColor: language === 'en' ? '#1D1E20' : '#ffffff' }}>

        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />

      </div>
    </>
  );
};

export default Home;