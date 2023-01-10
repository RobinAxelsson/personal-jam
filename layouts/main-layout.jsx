import React from 'react';
import { SiteFooter } from '../components/site-footer';
import { Header } from '../components/site-header';
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
      <SiteFooter />
    </>
  );
};

export default MainLayout;
