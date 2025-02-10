import React, { useEffect } from 'react';
import { MapContainer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface MapProps {
  apiKey: string;
  center: { lat: number; lng: number }; // Fix: Use 'lng' instead of 'lon'
  zoom?: number;
}

/**
 * Leaflet TileLayer for Mapy.cz
 */
const MapyCzTileLayer: React.FC<{ apiKey: string }> = ({ apiKey }) => {
  const map = useMap();

  useEffect(() => {
    const mapyLayer = L.tileLayer(
      `https://api.mapy.cz/v1/maptiles/outdoor/256/{z}/{x}/{y}?apikey=${apiKey}`,
      {
        minZoom: 0,
        maxZoom: 19,
        attribution:
          '<a href="https://api.mapy.cz/copyright" target="_blank">&copy; Seznam.cz</a>',
      },
    );
    map.addLayer(mapyLayer);
    return () => {
      map.removeLayer(mapyLayer);
    };
  }, [map, apiKey]);

  return null;
};

/**
 * Mapy.cz React Component with Leaflet
 */
export const Map: React.FC<MapProps> = ({ apiKey, center, zoom = 13 }) => {
  return (
    <MapContainer
      center={[center.lat, center.lng]}
      zoom={zoom}
      style={{ height: '400px', width: '100%' }}
    >
      <MapyCzTileLayer apiKey={apiKey} />
      <Marker position={[center.lat, center.lng]}>
        <Popup>Selected Location</Popup>
      </Marker>
    </MapContainer>
  );
};
