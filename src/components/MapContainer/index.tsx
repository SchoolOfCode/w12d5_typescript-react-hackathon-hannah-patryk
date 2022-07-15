import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

type CenterCoord = {
  centerObj: { lat: number; lng: number };
};

const MapContainer = (props: CenterCoord) => {
  const mapStyles = {
    height: "50vh",
    width: "100%",
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCq1BTjZJxU0dswylRAweCJsEgv0Qud0A0">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={props.centerObj}
      />
    </LoadScript>
  );
};
export default MapContainer;
