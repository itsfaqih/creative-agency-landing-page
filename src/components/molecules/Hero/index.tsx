import HeroDesc from 'components/atoms/HeroDesc';
import HeroHeading from 'components/atoms/HeroHeading';
import React, { ReactNode } from 'react';
import classNames from 'classnames';
import ButtonLink from 'components/atoms/ButtonLink';
import { motion } from 'framer-motion';

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
      <motion.div
        className="w-full"
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        transition={{ duration: 0.95 }}
      >
        <svg width="100%" height="2" fill="currentColor" className="text-white opacity-50">
          <rect x="2" width="100%" height="2" />
        </svg>
      </motion.div>
      <div className="mt-8 mb-6 overflow-hidden">
        <motion.div initial={{ y: '-2rem' }} animate={{ y: 0 }} transition={{ duration: 0.6 }}>
          <HeroDesc>{description}</HeroDesc>
        </motion.div>
      </div>
      <HeroHeading className="mb-6">{heading}</HeroHeading>
      <div className="overflow-hidden">
        <motion.div initial={{ y: '-4rem' }} animate={{ y: 0 }} transition={{ duration: 0.4 }}>
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
        </motion.div>
      </div>
    </div>
  );
}
