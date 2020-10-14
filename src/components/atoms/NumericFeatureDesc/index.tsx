import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { NUMERIC_FEATURE_TYPE } from 'components/types/numeric_feature';

interface Props {
  children: ReactNode;
  variant: NUMERIC_FEATURE_TYPE;
}

export default function NumericFeatureDesc({ children, variant }: Props) {
  const classes = classNames('text-primary', {
    'text-lg': variant === NUMERIC_FEATURE_TYPE.NORMAL,
    'text-1/2xl tracking-wide': variant === NUMERIC_FEATURE_TYPE.BIG,
  });

  return <p className={classes}>{children}</p>;
}
