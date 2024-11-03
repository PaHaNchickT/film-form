import type { ReactNode } from 'react';
import React from 'react';

export const ArrowIcon = ({
  fill = 'currentColor',
  filled,
  size,
  height,
  width,
  className,
}: {
  fill?: string;
  filled?: boolean;
  size?: string;
  height?: string;
  width?: string;
  className?: string;
}): ReactNode => {
  return (
    <svg
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15 16"
      fill={filled ? fill : 'black'}
      width={size || width || 15}
      height={size || height || 16}
      className={className}
    >
      <path
        d="M1 9C0.447715 9 4.82823e-08 8.55228 0 8C-4.82823e-08 7.44772 0.447715 7 1 7L1 9ZM14.7071 7.29289C15.0976 7.68342 15.0976 8.31658 14.7071 8.70711L8.34315 15.0711C7.95262 15.4616 7.31946 15.4616 6.92893 15.0711C6.53841 14.6805 6.53841 14.0474 6.92893 13.6569L12.5858 8L6.92893 2.34315C6.53841 1.95262 6.53841 1.31946 6.92893 0.928932C7.31946 0.538407 7.95262 0.538407 8.34315 0.928932L14.7071 7.29289ZM1 7L14 7L14 9L1 9L1 7Z"
        fill="#121212"
      />
    </svg>
  );
};
