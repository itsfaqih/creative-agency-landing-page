import Hero from 'components/molecules/Hero';
import Navbar from 'components/molecules/Navbar';
import React from 'react';
import menuItems from './navbar-menu';
import { motion, Variants } from 'framer-motion';

export default function Header() {
  const headingItemsVariants: Variants = {
    hidden: { x: '-100%' },
    visible: { x: 0 },
  };
  return (
    <header>
      <Navbar menuItems={menuItems} />
      <Hero
        heading={
          <div className="overflow-hidden">
            <motion.p
              initial="hidden"
              animate="visible"
              variants={headingItemsVariants}
              transition={{ delay: 0, duration: 0.6 }}
            >
              Explore the
            </motion.p>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={headingItemsVariants}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              wooden
            </motion.p>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={headingItemsVariants}
              transition={{ delay: 0.35, duration: 0.6 }}
            >
              community
            </motion.p>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={headingItemsVariants}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              in London.
            </motion.p>
          </div>
        }
        description="Get an inspiration when it's better."
        callToActionLabel="Get started"
      />
    </header>
  );
}
