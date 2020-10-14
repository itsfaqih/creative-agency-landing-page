import React from 'react';
import InfoItem from 'components/molecules/InfoItem';
import infoItems from './info-items';

export default function Info() {
  return (
    <section>
      <div className="flex flex-wrap items-center">
        {infoItems.map((item, index) => (
          <div key={index} className="w-1/3 pr-14">
            <InfoItem number={item.number} description={item.description} />
          </div>
        ))}
      </div>
    </section>
  );
}
