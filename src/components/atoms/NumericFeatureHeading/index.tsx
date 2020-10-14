import React from 'react';
import classNames from 'classnames';
import { NUMERIC_FEATURE_TYPE } from 'components/types/numeric_feature';

interface Props {
  value: number;
  variant: NUMERIC_FEATURE_TYPE;
}

export default function NumericFeatureHeading({ value, variant }: Props) {
  const formatted = Intl.NumberFormat('id-ID').format(value);
  const classes = classNames('font-bold text-primary leading-tight', {
    'text-5xl': variant === NUMERIC_FEATURE_TYPE.NORMAL,
    'text-6xl': variant === NUMERIC_FEATURE_TYPE.BIG,
  });

  return <h3 className={classes}>{formatted}</h3>;
}
