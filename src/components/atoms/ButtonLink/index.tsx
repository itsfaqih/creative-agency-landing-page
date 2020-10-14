import React, { AnchorHTMLAttributes } from 'react';
import classNames from 'classnames';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export default function ButtonLink({ children, className, ...props }: Props) {
  const classes = classNames('flex items-center pl-10 pr-8 pt-3 pb-3 border-2 border-secondary text-secondary tracking-wide text-lg', className);

  return (
    <a {...props} className={classes}>
      {children}
    </a>
  );
}
