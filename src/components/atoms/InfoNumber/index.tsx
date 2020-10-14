import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function InfoNumber({ children }: Props) {
  return <span className="text-4xl font-bold text-white">{children}.</span>;
}
