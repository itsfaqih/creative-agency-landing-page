import React, { ReactNode } from 'react';
import classNames from 'classnames';

interface Props {
  children: ReactNode;
  className?: string;
}

export default function FeatureHeading({ children, className }: Props) {
  const classes = classNames('text-2xl text-white', className);

  return <h3 className={classes}>{children}</h3>;
}
