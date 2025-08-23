import React from 'react';
import Vector from '@assets/icons/Vector.svg';
import IconamoonSearch from '@assets/icons/iconamoon_search.svg';
import ShoppingCart from '@assets/icons/shopping-cart.svg';
import User from '@assets/icons/user.svg';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='w-screen h-14'>
      <div className='w-full h-full flex justify-between items-center'>
        <img src={Vector} alt='Vector' className='w-[8rem] h-20 pl-3' />

        <div className='w-full h-full flex justify-end items-center gap-4 pr-3'>
          <img src={IconamoonSearch} alt='Iconamoon_search' className='w-6 h-6 ' />
          <img src={ShoppingCart} alt='Shopping_cart' className='w-6 h-6 ' />
          <Link to='/mypage'>
            <img src={User} alt='User' className='w-6 h-6 ' />
          </Link>
        </div>
      </div>
    </header>
  );
}
