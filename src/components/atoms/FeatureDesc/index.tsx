import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function FeatureDesc({ children }: Props) {
  return <p className="text-xs font-semibold tracking-wide text-gray-400">{children}</p>;
}
