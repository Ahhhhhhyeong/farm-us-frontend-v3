import React from 'react';
import SubHeader from '@components/utils/SubHeader';

const SimpleLayout = ({
  children,
  title = '타이틀',
  buttonText = '버튼',
  onButtonClick,
  isRightButtonVisible = false,
  isRightButtonActive = false,
}) => {
  return (
    <div className='min-h-screen bg-white'>
      <SubHeader
        title={title}
        buttonText={buttonText}
        onButtonClick={onButtonClick}
        isRightButtonVisible={isRightButtonVisible}
        isRightButtonActive={isRightButtonActive}
      />
      <div className='container mx-auto px-4 py-6'>{children}</div>
    </div>
  );
};

export default SimpleLayout;
