import FeatureDesc from 'components/atoms/FeatureDesc';
import FeatureHeading from 'components/atoms/FeatureHeading';
import Icons from 'components/atoms/Icons';
import React from 'react';

interface Props {
  heading: string;
  description: string;
}

export default function FeatureItem({ heading, description }: Props) {
  return (
    <div className="relative flex flex-col">
      <Icons.Grape className="mb-3 text-secondary"/>
      <FeatureHeading className="mb-1">{heading}</FeatureHeading>
      <FeatureDesc>{description}</FeatureDesc>
    </div>
  );
}
