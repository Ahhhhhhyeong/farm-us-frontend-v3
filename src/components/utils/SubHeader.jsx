import React from 'react';
import chevronLeft from '@assets/icons/chevron-left.svg';
import { useNavigate } from 'react-router-dom';
const SubHeader = ({
  title,
  buttonText = '',
  onButtonClick,
  isLeftButtonVisible = true,
  isRightButtonVisible = false,
  isRightButtonActive = false,
}) => {
  const navigate = useNavigate();
  return (
    <div className='w-full h-14 bg-white flex justify-between items-center px-4 sticky top-0 z-50'>
      {/* 왼쪽 뒤로가기 버튼 */}
      <div className='w-10 h-10'>
        <button className='w-10 h-10' onClick={() => navigate(-1)}>
          <img src={chevronLeft} alt='chevron-left' className='w-6 h-6' />
        </button>
      </div>
      {/* 센터 타이틀 */}
      <div className='w-full h-full flex justify-center items-center'>
        <span className='text-Base-darkgray text-lg font-semibold'>{title}</span>
      </div>
      {/* 오른쪽 버튼(글쓰기, 미리보기에서 사용) */}
      <div className='w-10 h-10 flex justify-end items-center'>
        {isRightButtonVisible && (
          <button
            className={`font-semibold ${isRightButtonActive ? 'text-Button-green' : 'text-Button-gray'}`}
            onClick={onButtonClick}>
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default SubHeader;
