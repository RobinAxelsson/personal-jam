import React from 'react';
import { Footer } from './layout-components/footer';
import { Header } from './layout-components/header';
import Head from 'next/head';

const MainLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Full stack developer</title>
      </Head>
      <Header />
      <div className="background-image"></div>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
