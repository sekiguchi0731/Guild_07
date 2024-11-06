import React from 'react';

interface PinProps {
  top: number;
  left: number;
  disabled: boolean;
  onClick: () => void;
}

const Pin: React.FC<PinProps> = ({ top, left, disabled, onClick }) => {
  return (
    <button
      style={{
        position: 'absolute',
        top: `${top}%`,
        left: `${left}%`,
        cursor: disabled ? 'not-allowed' : 'pointer',
      }}
      disabled={disabled}
      onClick={onClick}
    >
      📍
    </button>
  );
};

export default Pin;
