// src/components/DynamicMap.tsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

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
  prefectureName: string; // HomePageでは空文字
}

const DynamicMap: React.FC<DynamicMapProps> = ({
  center,
  zoom,
  quizzes,
  prefectureName,
}) => {
  return (
    <MapContainer
      center={center}
      zoom={zoom}
      style={{ height: '600px', width: '100%' }}
    >
      {/* OpenStreetMap Tile Layer */}
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {/* Markers */}
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
