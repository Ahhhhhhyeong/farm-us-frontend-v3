import React from 'react';
import Plus from '@assets/icons/Plus.svg';

export default function OptionButton({ label, onClick, size }) {
  const sizeClass = {
    small: 'px-2 py-1 text-sm',
    large: 'px-4 py-2 text-base',
    full: 'w-full py-2 text-base',
  };
  return (
    <button
      className={`${sizeClass[size]} bg-Base-gray-light text-Base-darkgray rounded flex items-center justify-center`}>
      <img src={Plus} alt='plus icon' className='inline mr-2' />
      {label}
    </button>
  );
}
