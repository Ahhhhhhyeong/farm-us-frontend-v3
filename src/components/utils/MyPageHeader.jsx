import React from 'react';
import Home from '@assets/icons/home.svg';
import Setting from '@assets/icons/settings.svg';
import { Link } from 'react-router-dom';

export default function MyPageHeader() {
  return (
    <header className='w-screen h-14'>
      <div className='w-full h-full flex justify-between items-center'>
        {/* 좌측 제목 */}
        <h1 className='text-xl/8 font-semibold w-full text-Base-darkgray pl-5'>마이페이지</h1>
        {/* 우측 버튼 */}
        <div className='w-full h-full flex justify-end items-center gap-4 pr-5'>
          <Link to='/'>
            <img src={Home} alt='home' />
          </Link>
          <Link>
            <img src={Setting} alt='settings' />
          </Link>
        </div>
      </div>
    </header>
  );
}
