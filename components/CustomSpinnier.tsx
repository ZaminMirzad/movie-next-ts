import React, { useContext } from 'react';
import { ThemeContext } from '@/context/themeContext';

interface Props {
  size: number;
}

export const CustomSpinnier = ({ size }: Props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`vh-100 vw-100 d-flex justify-content-center align-items-center bg-${theme}`}
    >
      <div style={{ height: `${size}px`, width: `${size}px` }}>
        <div className="loader" />
      </div>
    </div>
  );
};
