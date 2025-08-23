import React from 'react';

/**
 * 버튼 컴포넌트
 * @param {string} label - 버튼에 표시될 텍스트
 * @param {function} onClick - 버튼 클릭 시 호출될 핸들러
 * @param {'small'|'medium'|'large'|'full'} size - 버튼 크기
 * @param {'fillGreen'|'fillLightGreen'|'fillGray'} color - 버튼 색상
 * @returns {JSX.Element}
 */
export default function Button({ label, onClick, size, color }) {
  const sizeClass = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-4 py-1 text-base',
    large: 'px-6 py-1 text-base',
    full: 'w-full py-2 text-base',
  };
  const colorClass = {
    fillGreen: 'bg-Button-green text-white active:bg-Button-green-dark active:text-Base-gray',
    fillLightGreen: 'bg-Button-green-light text-Base-gray ',
    fillGray: 'bg-Base-darkgray text-Base-gray-light',
  };
  return (
    <button className={`${sizeClass[size]} ${colorClass[color]} rounded`} onClick={onClick}>
      {label}
    </button>
  );
}
