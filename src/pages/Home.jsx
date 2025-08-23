// 메인 페이지 (커머스탭 페이지)
import React, { useState } from 'react';
import { chipData } from '../mock/chipData';
import Chip from '@components/badges/Chip';
import Dropdown from '@components/inputs/Dropdown';

const Home = () => {
  const [chips, setChips] = useState(chipData);

  const toggleChip = (index) => {
    console.log('Chip clicked:', index);
    // 전부 false로 바꾸고 클릭한거만 true로
    const updatedChips = chips.map((chip, i) => {
      if (i === index) {
        return { ...chip, isSelected: true };
      }
      return { ...chip, isSelected: false };
    });
    setChips(updatedChips);
  };

  return (
    <div className='flex flex-col gap-2'>
      {/* 커머스 목록 chips(mock데이터 사용) */}
      <div className='flex w-full flex-nowrap gap-1.5 overflow-x-auto whitespace-nowrap'>
        {' '}
        {chips &&
          chips.map((chip, value) => (
            <Chip
              key={value}
              label={chip.label}
              color={'green'}
              isSelected={chip.isSelected}
              onClick={() => toggleChip(value)}
            />
          ))}
      </div>
      {/* 컴포넌트 확인 중 */}
      <div className='flex flex-col gap-2'>
        <Dropdown options={['옵션 1', '옵션 2', '옵션 3']} />
        <Dropdown
          options={[
            { label: '옵션 1', value: 1 },
            { label: '옵션 2', value: 2 },
            { label: '옵션 3', value: 3 },
          ]}
        />
      </div>
    </div>
  );
};

export default Home;
