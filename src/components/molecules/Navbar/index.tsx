import React, { OlHTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';
import NavbarLink from 'components/atoms/NavbarLink';
import Brand from 'components/atoms/Brand';
import { motion } from 'framer-motion';

export type navbarMenuItem = {
  label: ReactNode;
  url: string;
};

interface Props extends OlHTMLAttributes<HTMLOListElement> {
  brandUrl?: string;
  menuItems?: navbarMenuItem[];
}

export default function Navbar({ brandUrl = '', menuItems = [], className, ...props }: Props) {
  const classes = classNames('flex justify-between items-center', className);

  return (
    <nav className="pt-10 pb-16">
      <ul {...props} className={classes}>
        <li className="overflow-y-hidden">
          <motion.div initial={{ y: '-2rem' }} animate={{ y: 0 }} transition={{ duration: 0.8 }}>
            <Brand href={brandUrl} />
          </motion.div>
        </li>
        {menuItems.map((item, index) => (
          <li key={index}>
            <NavbarLink href={item.url}>{item.label}</NavbarLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
