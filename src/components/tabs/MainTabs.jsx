import clsx from 'clsx';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const MainTabs = () => {
  const [activeTab, setActiveTab] = useState('commerce');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const baseStyle = "justify-start font-['Pretendard'] leading-snug";
  const isActive = `${baseStyle} text-Base-darkgray font-bold`;
  const isNotActive = `${baseStyle} text-gray-500 font-medium`;

  return (
    <div className='w-full bg-white border-b-2 border-gray-300 inline-flex justify-start items-center gap-4 px-3'>
      <div
        className={`py-3 flex justify-center items-center gap-1 ${
          activeTab === 'commerce' ? 'border-b-3 border-black' : ''
        }`}>
        <NavLink
          className={clsx({ [isActive]: activeTab === 'commerce', [isNotActive]: activeTab !== 'commerce' })}
          onClick={() => handleTabClick('commerce')}
          to='/'>
          커머스
        </NavLink>
      </div>
      <div
        className={`py-3 flex justify-center items-center gap-1 ${
          activeTab === 'community' ? 'border-b-3 border-black' : ''
        }`}>
        <NavLink
          className={clsx({ [isActive]: activeTab === 'community', [isNotActive]: activeTab !== 'community' })}
          onClick={() => handleTabClick('community')}
          to='/community'>
          커뮤니티
        </NavLink>
      </div>
    </div>
  );
};

export default MainTabs;
