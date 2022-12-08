import React, { useMemo } from "react";
import Image from "next/image";
import styles from "../styles/Map.module.css";
import GoogleMapReact from "google-map-react";
import { MarkerF, useLoadScript, GoogleMap } from "@react-google-maps/api";

const mapContainerStyle = {
  height: "100%",
  width: "100%",
};

const Map = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  const options = useMemo(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
    }),
    []
  );

  const center = {
    lat: 35.69414820362723,
    lng: 139.68946537113425,
  };
  const defaultCenter = useMemo(() => center, []);

  if (!isLoaded) return <p>Loading...</p>;
  if (loadError) return <p>error</p>;

  return (
    <div className={styles.figure}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={15}
        center={defaultCenter}
        options={options}
        onChange={(e) => handleChange(e)}
      >
        <MarkerF position={defaultCenter} />
      </GoogleMap>
    </div>
  );
};

export default Map;
