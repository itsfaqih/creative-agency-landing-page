import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

interface Props extends HTMLAttributes<HTMLParagraphElement> {}

export default function HeroDesc({ children, className, ...props }: Props) {
  const classes = classNames('text-1/2xl text-white opacity-75 tracking-wider', className);

  return <p className={classes} {...props}>{children}</p>;
}
