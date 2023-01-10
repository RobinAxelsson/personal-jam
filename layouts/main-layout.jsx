import React from 'react';
import { Footer } from './footer';
import { Header } from './header';
import Head from 'next/head';

const MainLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Full stack developer</title>
      </Head>
      <Header />
      <div className="top-image-canvas"></div>
      <main className="site-main">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
