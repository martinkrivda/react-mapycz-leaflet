import React from "react";
import { Polyline, useMap } from "react-leaflet";

interface Waypoint {
  lat: number;
  lon: number;
  speed: number; // Speed in meters per second
}

interface RoutePathProps {
  waypoints: Waypoint[];
}

/**
 * Get color based on speed (pace)
 */
const getColor = (speed: number) => {
  if (speed < 1.5) return "red"; // Walking
  if (speed < 3.5) return "orange"; // Jogging
  if (speed < 5.5) return "yellow"; // Running
  if (speed < 7.5) return "green"; // Fast running
  return "blue"; // Sprinting
};

/**
 * RoutePath Component
 */
export const RoutePath: React.FC<RoutePathProps> = ({ waypoints }) => {
  const map = useMap();
  if (waypoints.length < 2) return null;

  return (
    <>
      {waypoints.map((point, i) =>
        i > 0 ? (
          <Polyline
            key={i}
            positions={[
              [waypoints[i - 1].lat, waypoints[i - 1].lon],
              [point.lat, point.lon],
            ]}
            color={getColor(point.speed)}
            weight={5}
            opacity={0.8}
          />
        ) : null
      )}
    </>
  );
};
