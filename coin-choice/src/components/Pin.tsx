import React from 'react';

interface PinProps {
  id: string;
  top: number;
  left: number;
  disabled: boolean;
  onClick: () => void;
  count?: number; // クイズ数を表示するためのプロパティを追加
  isCompleted?: boolean;
  city: string;
  name: string;
}

const Pin: React.FC<PinProps> = ({ id, top, left, disabled, onClick, count, isCompleted, name }) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: `${top}%`,
        left: `${left}%`,
        cursor: disabled ? 'not-allowed' : 'pointer',
        display: 'flex',
      }}
    >
      <button
        style={{
          width: '50px',
          height: '50px',
          fontSize: '30px',
          padding: '5px',
          background: 'none', // 背景を消す
          border: 'none', // 枠を消す
          cursor: disabled ? 'not-allowed' : 'pointer',
        }}
        onClick={onClick}
      >
        {isCompleted ? '🏆' : '📍'}
      </button>
      <div className='span-container' style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        {count !== undefined && (
          <span
            style={{
              display: 'block',
              fontSize: '25px',
              color: 'black',
            }}
          >
            {count}
          </span>
        )}
        {id !== undefined && (
          <span
            style={{
              display: 'block',
              fontSize: '25px',
              color: 'black',
            }}
          >
            {name}
          </span>
        )}
      </div>
    </div>
  );
};

export default Pin;
