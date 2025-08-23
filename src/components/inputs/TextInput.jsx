import React from 'react';
import clsx from 'clsx';

/**
 * TextInput 컴포넌트
 * @param {string} placeholder - 입력 필드의 플레이스홀더 텍스트
 * @param {'small'|'medium'|'large'} size - 입력 필드 크기
 * @param {string} value - 입력 값
 * @param {function} onChange - 값 변경 핸들러
 * @param {boolean} disabled - 비활성화 여부
 * @returns {JSX.Element}
 */
export default function TextInput({ placeholder, size = 'medium', value, onChange, disabled = false }) {
  if (size === 'medium') {
    return (
      <input
        type='text'
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={
          'py-2 px-2 w-full self-stretch rounded-lg outline outline-1 outline-offset-[-1px] outline-Base-gray-light font-["Pretendard"] leading-snug focus:outline-Button-green '
        }
      />
    );
  } else if (size === 'large') {
    return (
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={
          'py-2 px-2 h-32 w-full self-stretch rounded-lg outline outline-1 outline-offset-[-1px] outline-Base-gray-light font-["Pretendard"] leading-snug focus:outline-Button-green '
        }></textarea>
    );
  }
}
