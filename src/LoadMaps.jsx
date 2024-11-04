import { useEffect } from 'react';

function LoadGoogleMaps() {
  useEffect(() => {
    const existingScript = document.querySelector('script[src*="maps.googleapis.com"]');
    if (!existingScript) {
      const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY || "";
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&libraries=marker`;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);

      script.onload = () => {
        console.log("Google Maps script loaded successfully.");
      };

      return () => {
        // Clean up the script if necessary
        document.body.removeChild(script);
      };
    }
  }, []); // Empty dependency array to run only once

  return null;
}

export default LoadGoogleMaps;