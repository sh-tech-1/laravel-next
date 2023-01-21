import { Divider } from '@mui/material';
import Head from 'next/head';
import { useEffect } from 'react';

import { HomeClients } from '../components/home/home-clients';
import { HomeDesigners } from '../components/home/home-designers';
import { HomeDevelopers } from '../components/home/home-developers';
import { HomeFeatures } from '../components/home/home-features';
import { HomeHero } from '../components/home/home-hero';
import { HomeTestimonials } from '../components/home/home-testimonials';
import { MainLayout } from '../components/main-layout';
import { gtm } from '../lib/gtm';

import type { NextPage } from 'next';

const Home: NextPage = () => {
  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  return (
    <>
      <Head>
        <title>
          Material Kit Pro
        </title>
      </Head>
      <main>
        <HomeHero />
        <Divider />
        <HomeDevelopers />
        <Divider />
        <HomeDesigners />
        <HomeTestimonials />
        <HomeFeatures />
        <Divider />
        <HomeClients />
      </main>
    </>
  );
};

Home.getLayout = (page) => (
  <MainLayout>
    {page}
  </MainLayout>
);

export default Home;
