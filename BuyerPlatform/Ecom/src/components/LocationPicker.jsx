import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import axios from "axios";
import "leaflet/dist/leaflet.css";

function LocationPicker() {
  const [position, setPosition] = useState(null);
  const [address, setAddress] = useState("");

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          const { latitude, longitude } = pos.coords;
          setPosition([latitude, longitude]);
  
          // Fetch address using OpenStreetMap (Nominatim API)
          try {
            const response = await axios.get(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
            );
            setAddress(response.data.display_name);
          } catch (error) {
            console.error("Error fetching address:", error);
            setAddress("Address not found");
          }
        },
        (error) => {
          console.error("Geolocation error:", error);
          if (error.code === 1) setAddress("Location permission denied ❌");
          else if (error.code === 2) setAddress("Location unavailable ❌");
          else if (error.code === 3) setAddress("Location request timed out ⏳");
        }
      );
    } else {
      setAddress("Geolocation not supported on this browser ❌");
    }
  }, []);
  

  return (
    <div className="p-5 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-700">Select Your Location</h2>
      {position ? (
        <>
          <MapContainer center={position} zoom={13} style={{ height: "300px", width: "100%" }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={position}>
              <Popup>{address || "Fetching address..."}</Popup>
            </Marker>
          </MapContainer>
          <p className="mt-3 text-gray-700">📍 {address || "Detecting location..."}</p>
        </>
      ) : (
        <p>Loading your location...</p>
      )}
    </div>
  );
}

export default LocationPicker;
