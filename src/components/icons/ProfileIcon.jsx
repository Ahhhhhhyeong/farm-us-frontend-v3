import React from 'react';
import BaseProfile from '@assets/images/baseProfile.jpg';

export default function ProfileIcon({ image, size = 'small' }) {
  const SIZE_CLASSES = {
    small: 'w-8 h-8', // 2rem = 32px
    medium: 'w-12 h-12', // 3rem = 48px
    // 필요하면 나중에 large: 'w-16 h-16' 등 추가 가능
  };

  // 유효하지 않은 size가 들어오면 small로 폴백
  const sizeClass = SIZE_CLASSES[size] || SIZE_CLASSES.small;

  return <img src={image || BaseProfile} alt='Profile' className={`rounded-full object-cover ${sizeClass}`} />;
}
