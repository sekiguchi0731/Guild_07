import React from 'react';
import Pin from './Pin';

interface MapProps {
  imageSrc: string;
  pins: Array<{
    id: string;
    top: number;
    left: number;
    disabled: boolean;
    onClick: () => void;
    count?: number; // クイズ数を受け取る
    isCompleted?: boolean;
  }>;
}

const Map: React.FC<MapProps> = ({ imageSrc, pins }) => {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: 'auto', // 背景画像の比率に基づく高さ
        overflow: 'hidden', // 必要に応じて調整
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: 3 / 4,
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: '100% auto', // 画像をコンテナ全体に拡大
          backgroundPosition: 'top', // 中央に配置
          backgroundRepeat: 'no-repeat', // 繰り返しを防止
        }}
      />
      {pins.map((pin) => (
        <Pin
          key={pin.id}
          id={pin.id}
          top={pin.top}
          left={pin.left}
          disabled={pin.disabled}
          onClick={pin.onClick}
          count={pin.count} // クイズ数を渡す
          isCompleted={pin.isCompleted}
        />
      ))}
    </div>
  );
};

export default Map;
