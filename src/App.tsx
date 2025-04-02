import { useState } from "react";
import { Map } from "@vis.gl/react-maplibre";
import "maplibre-gl/dist/maplibre-gl.css"; // See notes below

function App() {
  const [viewState, setViewState] = useState({
    longitude: -100,
    latitude: 40,
    zoom: 18,
  });

  const handleClick = (event: MapEvent) => {
    console.log(event);
    const { lng, lat } = event.lngLat;
    setViewState({
      longitude: lng,
      latitude: lat,
      zoom: 18,
    });
  };

  return (
    <Map
      viewState={viewState}
      style={{ width: "100vw", height: "100vh" }}
      mapStyle="https://api.maptiler.com/maps/hybrid/style.json?key=iG31hHzqPDdOfM8MmYsP"
      onClick={(event) => handleClick(event)}
    />
  );
}

export default App;
