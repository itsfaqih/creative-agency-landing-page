import Icons from 'components/atoms/Icons';
import NumericFeature from 'components/molecules/NumericFeature';
import Feature from 'components/organisms/Feature';
import Header from 'components/organisms/Header';
import Info from 'components/organisms/Info';
import { NUMERIC_FEATURE_TYPE } from 'components/types/numeric_feature';
import React from 'react';
import { motion } from 'framer-motion';

export default function LandingPage() {
  return (
    <main className="bg-primary">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2">
          <div className="col-span-1 pr-40">
            <Header />
          </div>
          <div className="col-span-1">
            <Feature />
          </div>
        </div>
        <div className="grid grid-cols-4">
          <div className="flex items-center col-span-3 mt-16">
            <Info />
          </div>
          <div className="relative col-span-1 xl:mr-overflow 2xl:-mr-32">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.55, delay: 1.75 }}
              className="absolute z-10"
              style={{ top: '-1.2rem', left: '-1.5rem' }}
            >
              <Icons.Intersect className="text-secondary" />
            </motion.div>
            <div className="relative z-20 overflow-hidden">
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                <NumericFeature
                  number={42388}
                  description="Our total submission succesor record"
                  variant={NUMERIC_FEATURE_TYPE.BIG}
                  className="pt-16 pb-12 pl-20 xl:pr-overflow 2xl:pr-32"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
