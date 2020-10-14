import AuthButton from 'components/atoms/AuthButton';
import FeatureItem from 'components/molecules/FeatureItem';
import NumericFeature from 'components/molecules/NumericFeature';
import { NUMERIC_FEATURE_TYPE } from 'components/types/numeric_feature';
import React from 'react';
import img_1 from 'assets/img/img-1.jpg';
import img_2 from 'assets/img/img-2.jpg';
import Icons from 'components/atoms/Icons';

export default function Feature() {
  return (
    <section>
      <div className="grid grid-cols-2">
        <div className="relative h-full">
          <Icons.Bullets
            className="absolute z-10 text-white opacity-50"
            style={{ top: '-0.5rem', left: '-2.7rem' }}
          />
          <NumericFeature
            number={463}
            description="Request Per Second"
            variant={NUMERIC_FEATURE_TYPE.NORMAL}
            className="relative z-20 pt-6 pb-8"
          />
        </div>
        <div className="flex items-center justify-end pr-12">
          <AuthButton href="#"/>
        </div>
        <div className="flex items-end">
          <div className="h-1/2">
            <FeatureItem heading="Great Compenen" description="Firlumini state" />
          </div>
        </div>
        <div className="relative">
          <img src={img_1} alt="Dice" className="object-cover w-full h-72" />
          <svg
            width="44"
            height="44"
            fill="currentColor"
            className="absolute text-yellow"
            style={{ top: '-10', right: '-19' }}
          >
            <rect width="44" height="19" />
            <rect x="25" width="19" height="44" />
          </svg>
        </div>
        <div className="pl-12">
          <div className="relative z-20 w-full">
            <img src={img_2} alt="Lego" className="object-cover w-full h-full" />
            <svg
              width="25"
              height="45"
              fill="currentColor"
              className="absolute text-yellow"
              style={{ top: '-17', left: '-11' }}
            >
              <rect width="25" height="20" />
              <rect width="12" height="45" />
            </svg>
          </div>
        </div>
        <div className="flex items-center justify-end">
          <FeatureItem heading="Speciality Design" description="Firlumini state" />
        </div>
      </div>
    </section>
  );
}
