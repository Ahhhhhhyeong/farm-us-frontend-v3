import React from 'react';

export default function Button({ label, onClick, size, color }) {
  const sizeClass = {
    small: 'px-2 py-1 text-sm',
    large: 'px-4 py-2 text-base',
    full: 'w-full py-2 text-base',
  };
  const colorClass = {
    fillGreen: 'bg-Button-green text-Base-gray',
    fillLightGreen: 'bg-Button-green-light text-Base-gray ',
    fillGray: 'bg-Base-darkgray text-Base-gray-light',
  };
  return (
    <button className={`${sizeClass[size]} ${colorClass[color]} rounded`} onClick={onClick}>
      {label}
    </button>
  );
}
