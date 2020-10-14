import HeroDesc from 'components/atoms/HeroDesc';
import HeroHeading from 'components/atoms/HeroHeading';
import React, { ReactNode } from 'react';
import classNames from 'classnames';
import ButtonLink from 'components/atoms/ButtonLink';

interface Props {
  heading: ReactNode;
  description: ReactNode;
  callToActionLabel: ReactNode;
  className?: string;
}

export default function Hero({ heading, description, callToActionLabel, className }: Props) {
  const classes = classNames('flex flex-col items-start', className);

  return (
    <div className={classes}>
      <svg width="100%" height="2" fill="currentColor" className="text-white opacity-50">
        <rect x="2" width="100%" height="2" />
      </svg>
      <HeroDesc className="mt-8 mb-6">{description}</HeroDesc>
      <HeroHeading className="mb-6">{heading}</HeroHeading>
      <ButtonLink href="#">
        {callToActionLabel}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-10 ml-10 text-secondary"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </ButtonLink>
    </div>
  );
}
