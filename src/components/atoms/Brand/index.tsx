import React, { AnchorHTMLAttributes } from 'react';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export default function Brand({ ...props }: Props) {
  return <a {...props} className="text-xl font-semibold text-white">Brand</a>;
}
