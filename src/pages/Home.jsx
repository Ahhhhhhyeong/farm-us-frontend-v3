import React, { useState } from 'react';
import { chipData } from '../mock/chipData';
import Chip from '../components/badges/Chip';

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
    <div>
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
    </div>
  );
};

export default Home;
