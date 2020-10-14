import React, { SVGAttributes } from 'react';

interface Props extends SVGAttributes<HTMLOrSVGElement> {}

export default function Intersect({ className, ...props }: Props) {
  return (
    <svg
      width="149"
      height="148"
      viewBox="0 0 149 148"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 46.1202V41.3612L41.7353 0H46.5374L0 46.1202ZM0 65.8154V61.0563L61.6086 0H66.4107L0 65.8154ZM0 84.0348V79.2758L79.9929 0H84.795L0 84.0348ZM0 103.851V99.0922L99.9886 0H104.791L0 103.851ZM0 122.788V118.029L119.097 0H123.899L0 122.788ZM0 140.69V135.931L137.16 0H141.963L0 140.69ZM12.7052 148H7.90312L149 8.16798V12.927L12.7052 148ZM32.7775 148H27.9755L149 28.0604V32.8194L32.7775 148ZM28.3745 0L0 28.1202V23.3612L23.5725 0H28.3745Z"
      />
    </svg>
  );
}
