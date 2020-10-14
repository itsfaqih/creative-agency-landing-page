import React, { AnchorHTMLAttributes } from 'react';
import classNames from 'classnames';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export default function NavbarLink({ children, className, ...props }: Props) {
  const classes = classNames('text-white opacity-75 text-lg tracking-wide', className);

  return (
    <a {...props} className={classes}>
      {children}
    </a>
  );
}
