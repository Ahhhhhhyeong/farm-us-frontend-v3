import React, { useState } from 'react';
import clsx from 'clsx';
/**
 * Dropdown component for selecting an option.
 * @param {Array<string|{label: string, value: any}>} options
 * @returns {JSX.Element} The rendered dropdown component.
 */
export default function Dropdown({ options = [], placeholder = '상품 카테고리를 선택해 주세요' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  // 선택된 값 표시용 함수
  const getLabel = (option) => {
    if (!option) return null;
    return typeof option === 'string' ? option : option.label;
  };

  return (
    <div className='w-80 relative'>
      {/* 선택 영역 */}
      <div
        className='flex justify-between items-center h-12 px-3 bg-white rounded-lg border border-gray-300 cursor-pointer'
        onClick={() => setIsOpen(!isOpen)}>
        <span className={`text-base ${selected ? 'text-Base-darkgray' : 'text-Base-gray'}`}>
          {getLabel(selected) || placeholder}
        </span>
        {/* 화살표 아이콘 (SVG) */}
        <svg
          className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' />
        </svg>
      </div>

      {/* 옵션 목록 */}
      {isOpen && (
        <div className='absolute mt-1 w-full bg-white rounded-lg border border-gray-300 shadow-lg z-10'>
          {options.map((option, idx) => {
            const label = typeof option === 'string' ? option : option.label;
            const value = typeof option === 'string' ? null : option.value;
            return (
              <div
                key={idx}
                onClick={() => handleSelect(option)}
                className='flex flex-col px-3 py-2 hover:bg-gray-100 cursor-pointer flex justify-between'>
                <span className={clsx(typeof option === 'string' ? 'text-Base-darkgray' : 'text-Base-gray')}>
                  {label}
                </span>
                {value !== null && <span className='text-Base-darkgray'>{value} 원</span>}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
