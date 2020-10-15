import AuthButton from 'components/atoms/AuthButton';
import FeatureItem from 'components/molecules/FeatureItem';
import NumericFeature from 'components/molecules/NumericFeature';
import { NUMERIC_FEATURE_TYPE } from 'components/types/numeric_feature';
import React from 'react';
import img_1 from 'assets/img/img-1.jpg';
import img_2 from 'assets/img/img-2.jpg';
import Icons from 'components/atoms/Icons';
import { motion } from 'framer-motion';

export default function Feature() {
  return (
    <section>
      <div className="grid grid-cols-2">
        <div className="relative h-full">
          <motion.div
            initial={{ y: '-262px' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute z-10"
            style={{ top: '-0.5rem', left: '-2.7rem' }}
          >
            <Icons.Bullets
              className="text-white opacity-50"
            />
          </motion.div>
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="relative z-20"
          >
            <NumericFeature
              number={463}
              description="Request Per Second"
              variant={NUMERIC_FEATURE_TYPE.NORMAL}
              className="pt-6 pb-8"
            />
          </motion.div>
        </div>
        <div className="flex items-center justify-end pr-12">
          <AuthButton href="#" />
        </div>
        <div className="flex items-end">
          <div className="overflow-hidden h-1/2">
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <FeatureItem heading="Great Compenen" description="Firlumini state" />
            </motion.div>
          </div>
        </div>
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, delay: 0.8, ease: 'easeOut' }}
            >
              <img src={img_1} alt="Pinapple 1" className="object-cover w-full h-72" />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35, delay: 0.8 }}
          >
            <svg
              width="44"
              height="44"
              fill="currentColor"
              className="absolute text-yellow"
              style={{ top: '-10px', right: '-19px' }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="44" height="19" />
              <rect x="25" width="19" height="44" />
            </svg>
          </motion.div>
        </div>
        <div className="pl-12">
          <div className="relative z-20 w-full">
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: '-100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.85, delay: 1, ease: 'easeOut' }}
              >
                <img src={img_2} alt="Pinapple 2" className="object-cover w-full h-full" />
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35, delay: 1.12 }}
            >
              <svg
                width="25"
                height="45"
                fill="currentColor"
                className="absolute text-yellow"
                style={{ top: '-17px', left: '-11px' }}
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="25" height="20" />
                <rect width="12" height="45" />
              </svg>
            </motion.div>
          </div>
        </div>
        <div className="flex items-center justify-end">
          <div className="overflow-hidden">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <FeatureItem heading="Speciality Design" description="Firlumini state" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
