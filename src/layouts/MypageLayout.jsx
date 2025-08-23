import React from 'react';
import MyPageHeader from '../components/utils/MyPageHeader';

export default function MypageLayout({ children }) {
  return (
    <div>
      <MyPageHeader />
      <div className='w-full h-full p-3'>{children}</div>
    </div>
  );
}
