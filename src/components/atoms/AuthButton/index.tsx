import React, { AnchorHTMLAttributes } from 'react';
import classNames from 'classnames';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export default function AuthButton({ className, ...props }: Props) {
  const classes = classNames('relative font-bold text-secondary text-2xl', className);

  return (
    <a {...props} className={classes}>
      <svg className="absolute z-10 w-10 h-10 opacity-50 text-secondary" style={{ top: '45%', left: '-0.7rem', transform: "translateY(-50%)"}}>
        <rect width="100%" height="100%" strokeWidth="4" stroke="currentColor" fill="none" />
      </svg>
      Sign in
    </a>
  );
}
