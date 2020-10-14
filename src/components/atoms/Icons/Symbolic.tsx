import React, { SVGAttributes } from 'react';

interface Props extends SVGAttributes<HTMLOrSVGElement> {}

export default function Symbolic({ className, ...props }: Props) {
  return (
    <svg
      viewBox="0 0 43 57"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M0 0H12V12H0V0Z" />
      <path d="M31 0H43V12H31V0Z" />
      <path d="M15 15H28V26H15V15Z" />
      <path d="M21.5 0L27.9952 12H15.0048L21.5 0Z" />
      <path d="M31 35.5L43 29.0048V41.9952L31 35.5Z" />
      <path d="M12 35.5L0 41.9952V29.0048L12 35.5Z" />
      <path d="M12 21C12 24.3137 9.31371 27 6 27C2.68629 27 0 24.3137 0 21C0 17.6863 2.68629 15 6 15C9.31371 15 12 17.6863 12 21Z" />
      <path d="M43 21C43 24.3137 40.3137 27 37 27C33.6863 27 31 24.3137 31 21C31 17.6863 33.6863 15 37 15C40.3137 15 43 17.6863 43 21Z" />
      <path d="M27 36C27 39.3137 24.3137 42 21 42C17.6863 42 15 39.3137 15 36C15 32.6863 17.6863 30 21 30C24.3137 30 27 32.6863 27 36Z" />
      <path d="M27 51.5C27 54.5376 24.3137 57 21 57C17.6863 57 15 54.5376 15 51.5C15 48.4624 17.6863 46 21 46C24.3137 46 27 48.4624 27 51.5Z" />
    </svg>
  );
}
