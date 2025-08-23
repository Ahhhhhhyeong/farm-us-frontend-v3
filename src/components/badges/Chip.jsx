import React from 'react';
import clsx from 'clsx';

export default function Chip({ label, color = 'green', isSelected = false, onClick }) {
  const colorClasses = {
    green: 'bg-Button-green-light text-Button-green outline outline-1 outline-offset-[-1px] outline-Button-green',
    gray: 'bg-Button-gray text-white',
  };
  const baseClasses = 'text-Button-gray outline outline-1 outline-offset-[-1px] outline-Button-gray-light';

  return (
    <button
      onClick={onClick}
      className={clsx(
        'px-3 py-1.5 rounded-full inline-flex justify-center items-center',
        isSelected ? colorClasses[color] : baseClasses
      )}>
      <span className='justify-start text-sm font-medium leading-snug'>{label}</span>
    </button>
  );
}
