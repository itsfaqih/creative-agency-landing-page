import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function InfoDesc({ children }: Props) {
  return <p className="text-xl leading-8 tracking-wide text-white opacity-75">{children}</p>;
}
