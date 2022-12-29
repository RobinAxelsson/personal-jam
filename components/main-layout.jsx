import React from 'react';
import { Footer } from './footer';
import { Header } from './header';

const MainLayout = ({ children }) => {
  return (
    <main>
      <Header />
      <main>{children}</main>
      <Footer />
    </main>
  );
};

export default MainLayout;
