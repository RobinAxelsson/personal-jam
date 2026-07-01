import React from 'react';
import { SiteFooter } from './site-footer';
import { Header } from './site-header';
import Head from 'next/head';
import styles from './main-layout.module.scss'

const MainLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>.NET Full stack developer</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <meta property="og:image" content="CV-portrait.jpg" />
        <meta property="og:description" content="Personal page" />
        <meta property="og:url" content="https://salihaxelsson.com/" />
        <meta name="twitter:card" content="/CV-portrait.jpg" />
      </Head>
      <Header />
      <div className={styles.page}>
        <div className={styles.topImageCanvas}></div>
        <main className={styles.siteMain}>{children}</main>
        <SiteFooter />
      </div>
    </>
  );
};

export default MainLayout;
