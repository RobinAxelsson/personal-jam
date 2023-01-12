import React from 'react';
import { SiteFooter } from './site-footer';
import { Header } from './site-header';
import Head from 'next/head';

const MainLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>.NET Full stack developer</title>
        <meta property="og:image" content="/images/profile.jpg" />
        <meta property="og:description" content="Personal page" />
        <meta property="og:url" content="https://salihaxelsson.com/" />
        <meta name="twitter:card" content="/images/profile.jpg" />
      </Head>
      <Header />
      <div className="top-image-canvas"></div>
      <main>{children}</main>
      <SiteFooter />
    </>
  );
};

export default MainLayout;
