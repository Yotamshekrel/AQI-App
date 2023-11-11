import { useState, useEffect } from "react";
import axios from "axios";

export function useLocation() {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    const getUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;

            const apiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;

            axios
              .get(apiUrl)
              .then((response) => {
                const data = response.data;
                setUserLocation(data);
              })
              .catch((error) => {
                console.log("API error:", error);
              });
          },
          (error) => {
            console.error("Error getting user location:", error);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    };

    getUserLocation(); // Call the function to get the user location
  }, []);

  return userLocation;
}
