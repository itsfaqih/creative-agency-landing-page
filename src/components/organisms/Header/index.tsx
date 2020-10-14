import Hero from 'components/molecules/Hero';
import Navbar from 'components/molecules/Navbar';
import React from 'react';
import menuItems from './navbar-menu';

export default function Header() {
  return (
    <header>
      <Navbar menuItems={menuItems} />
      <Hero
        heading="Explore the wooden community in London."
        description="Get an inspiration when it's better."
        callToActionLabel="Get started"
      />
    </header>
  );
}
