import React from 'react';

interface PinProps {
  top: number;
  left: number;
  disabled: boolean;
  onClick: () => void;
  count?: number; // クイズ数を表示するためのプロパティを追加
  isCompleted?: boolean;
}

const Pin: React.FC<PinProps> = ({ top, left, disabled, onClick, count, isCompleted }) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: `${top}%`,
        left: `${left}%`,
        cursor: disabled ? 'not-allowed' : 'pointer',
      }}
    >
      <button
        style={{
          width: '50px', 
          height: '50px',
          fontSize: '30px',
          padding: '5px',
        }}
        onClick={onClick}
      >
        {isCompleted ? '🏆' : '📍'}
      </button>
      {count !== undefined && (
        <span
          style={{
            marginLeft: '4px',
            fontSize: '25px',
            color: 'black',
          }}
        >
          {count}
        </span>
      )}
    </div>
  );
};

export default Pin;
