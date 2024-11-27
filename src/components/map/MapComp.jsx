import React, { useState, useEffect } from 'react';
import { AdvancedMarker, APIProvider, Map, Pin } from '@vis.gl/react-google-maps';
import Skeleton from '@mui/material/Skeleton';
import { colors } from '../../general/colors';
import mapStyle from "./mapStyle.json"

const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY || "";

/*
    NOTES ABOUT USE OF THIS COMPONENT
    - This API key is attached to Nathan's credit card, please do not abuse this

    Parameters: 
    - markers: An array of markers
    - zoomLocation: An object { lat: number, lng: number } where the map will center

    Note: I will be adding tooltips to this later
*/

const MapComp = ({ markers, mainMarker, zoomLocation }) => {
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Wait for Google Maps to load
    const checkGoogleMapsLoaded = setInterval(() => {
      if (window.google && window.google.maps) {
        clearInterval(checkGoogleMapsLoaded);
        setLoading(false);
      }
    }, 100);

    return () => clearInterval(checkGoogleMapsLoaded);
  }, []);

  return (
    <>
  {!loading ? (
    <div style={{ width: '100%', height: '100%', zIndex: -5 }}>
      <APIProvider apiKey={API_KEY}>
        <Map
          defaultCenter={zoomLocation || { lat: 51.015, lng: -114.0729 }}
          defaultZoom={zoomLocation ? 14 : 11}
          gestureHandling="greedy"
          disableDefaultUI
          mapId="736dc951678c83c7"
          styles={mapStyle}
        >
          {markers.map((position, index) => (
            <AdvancedMarker
              position={position}
              title="hello"
              key={index}
              mapId="736dc951678c83c7"
            >
              <Pin background={colors.dark_background} borderColor={colors.darker_back} glyphColor={colors.darker_back}/>
            </AdvancedMarker>
          ))}
          {mainMarker ? 
            <AdvancedMarker
              position={mainMarker}
              title="hello"
              key={"main"}
              mapId="736dc951678c83c7"
            >
              <Pin background={colors.darker_back} borderColor={colors.dark_background} glyphColor={colors.dark_background} scale={1.5}/>
            </AdvancedMarker>
          :
            ""
          }
        </Map>
      </APIProvider>
    </div>
  ) : (
    <Skeleton
      sx={{ bgcolor: 'lightgray' }}
      variant="rounded"
      width="100%"
      height="100%"
    />
  )}
</>

  );
};

export default MapComp;


export const geocodeAddress = (address) => {
  return new Promise((resolve, reject) => {
    if (window.google && window.google.maps) {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address: address }, (results, status) => {
        if (status === 'OK') {
          const location = results[0].geometry.location;
          resolve({ lat: location.lat(), lng: location.lng() });
        } else {
          reject(status);
        }
      });
    } else {
      console.error("Google Maps could not loaded.");
      reject("Google Maps not loaded");
    }
  });
};
