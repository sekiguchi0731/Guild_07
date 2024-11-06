import React from 'react';
import Pin from './Pin.tsx';

interface MapProps {
  imageSrc: string;
  pins: Array<{
    id: string;
    top: number;
    left: number;
    disabled: boolean;
    onClick: () => void;
  }>;
}

const Map: React.FC<MapProps> = ({ imageSrc, pins }) => {
  return (
    <div style={{ position: 'relative' }}>
      <img src={imageSrc} alt='Map' style={{ width: '100%' }} />
      {pins.map((pin) => (
        <Pin
          key={pin.id}
          top={pin.top}
          left={pin.left}
          disabled={pin.disabled}
          onClick={pin.onClick}
        />
      ))}
    </div>
  );
};

export default Map;
