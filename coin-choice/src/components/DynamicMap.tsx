// src/components/DynamicMap.tsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useTranslation } from 'react-i18next';

interface DynamicMapProps {
  center: [number, number];
  zoom: number;
  quizzes: Array<{
    id: string;
    cityKey: string;
    latitude: number;
    longitude: number;
    isCompleted: boolean;
    onClick: () => void;
  }>;
  prefectureName: string;
}

const DynamicMap: React.FC<DynamicMapProps> = ({
  center,
  zoom,
  quizzes,
  prefectureName,
}) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  // Mapboxアクセストークン
  // const MAPBOX_ACCESS_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
  const MAPBOX_ACCESS_TOKEN =
    'pk.eyJ1IjoiaGluYXRhNyIsImEiOiJjbTM3bDY2Z3EwaTdiMmtvY3FzZTRhYjVrIn0.XRV4Wpb1ZCfdRUrM4Lh77g';

  
  // 言語ごとのMapboxスタイルURL
  const mapboxStyles: { [key: string]: string } = {
    en: 'hinata7/cm382ip9x007b01r8hmws2rrp',
    jp: 'hinata7/cm385qdut00b201pt6limfaza',
    // 他の言語を追加可能
  };

  const selectedStyle = mapboxStyles[currentLanguage] || mapboxStyles['en'];

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      style={{ height: '600px', width: '100%' }}
    >
      {/* Mapbox Tile Layer */}
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/${selectedStyle}/tiles/{z}/{x}/{y}?access_token=${MAPBOX_ACCESS_TOKEN}`}
        id={selectedStyle}
        tileSize={512}
        zoomOffset={-1}
        attribution='&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a> contributors'
      />
      {/* マーカー */}
      {quizzes.map((quiz) => (
        <Marker
          key={quiz.id}
          position={[quiz.latitude, quiz.longitude]}
          eventHandlers={{
            click: () => {
              quiz.onClick();
            },
          }}
        >
          <Popup>
            {prefectureName && <strong>{prefectureName}</strong>}
            <br />
            {quiz.isCompleted ? '🏆' : '📍'} {quiz.id}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default DynamicMap;
