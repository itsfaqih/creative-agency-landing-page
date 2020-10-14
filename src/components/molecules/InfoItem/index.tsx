import InfoDesc from 'components/atoms/InfoDesc';
import InfoNumber from 'components/atoms/InfoNumber';
import React from 'react';

export interface Props {
  number: number | string;
  description: string;
}

export default function InfoItem({ number, description }: Props) {
  return (
    <div>
      <svg width="3.8rem" height="1" fill="currentColor" className="mb-5 text-white opacity-50">
        <rect width="100%" height="1" />
      </svg>
      <InfoNumber>{number}</InfoNumber>
      <InfoDesc>{description}</InfoDesc>
    </div>
  );
}
