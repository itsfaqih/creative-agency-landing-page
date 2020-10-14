import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

interface Props extends HTMLAttributes<HTMLHeadingElement> {}

export default function HeroHeading({ children, className, ...props }: Props) {
  const classes = classNames('font-semibold text-6xl text-white leading-tight', className);

  return (
    <h1 className={classes} {...props}>
      {children}
    </h1>
  );
}
