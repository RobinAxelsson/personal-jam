import React from 'react';
import { SiteFooter } from './site-footer';
import { Header } from './site-header';
import Head from 'next/head';

const MainLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Full stack developer</title>
      </Head>
      <Header />
      <div className="top-image-canvas"></div>
      <main>{children}</main>
      <SiteFooter />
    </>
  );
};

export default MainLayout;
