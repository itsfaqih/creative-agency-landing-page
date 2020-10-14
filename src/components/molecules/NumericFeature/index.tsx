import NumericFeatureDesc from 'components/atoms/NumericFeatureDesc';
import NumericFeatureHeading from 'components/atoms/NumericFeatureHeading';
import { NUMERIC_FEATURE_TYPE } from 'components/types/numeric_feature';
import React from 'react';
import classNames from 'classnames';
import Icons from 'components/atoms/Icons';

interface Props {
  number: number;
  description: string;
  variant: NUMERIC_FEATURE_TYPE;
  className?: string;
}

export default function NumericFeature({ number, description, variant, className }: Props) {
  const classes = classNames(
    'flex flex-col items-center justify-center bg-light-orange',
    className
  );

  const iconClass = classNames('text-secondary', {
    'w-8 mr-5': variant === NUMERIC_FEATURE_TYPE.NORMAL,
    'w-10 mr-8': variant === NUMERIC_FEATURE_TYPE.BIG,
  });

  const valueClass = classNames('flex items-center justify-start', {
    'mb-3': variant === NUMERIC_FEATURE_TYPE.BIG,
  });

  return (
    <div className={classes}>
      <div>
        <div className={valueClass}>
          <Icons.Symbolic className={iconClass} />
          <NumericFeatureHeading value={number} variant={variant} />
        </div>
        <NumericFeatureDesc variant={variant}>{description}</NumericFeatureDesc>
      </div>
    </div>
  );
}
