import Icons from 'components/atoms/Icons';
import NumericFeature from 'components/molecules/NumericFeature';
import Feature from 'components/organisms/Feature';
import Header from 'components/organisms/Header';
import Info from 'components/organisms/Info';
import { NUMERIC_FEATURE_TYPE } from 'components/types/numeric_feature';
import React from 'react';

export default function LandingPage() {
  return (
    <main className="bg-primary">
      <div className="grid grid-cols-2 px-24">
        <div className="col-span-1 pr-48">
          <Header />
        </div>
        <div className="col-span-1">
          <Feature />
        </div>
      </div>
      <div className="grid grid-cols-4 px-24">
        <div className="flex items-center col-span-3 mt-16">
          <Info />
        </div>
        <div className="relative col-span-1 -mr-24">
          <Icons.Intersect className="absolute z-10 text-secondary" style={{top: '-1.2rem', left: '-1.5rem'}} />
          <NumericFeature
            number={42388}
            description="Our total submission succesor record"
            variant={NUMERIC_FEATURE_TYPE.BIG}
            className="relative z-20 pt-16 pb-12 pl-20 pr-16"
          />
        </div>
      </div>
    </main>
  );
}
