import { Map } from "@vis.gl/react-maplibre";
import "maplibre-gl/dist/maplibre-gl.css"; // See notes below

function App() {
  return (
    <Map
      initialViewState={{
        longitude: 10,
        latitude: 60,
        zoom: 4.5,
      }}
      style={{ width: "100vw", height: "100vh" }}
      mapStyle="https://demotiles.maplibre.org/style.json"
    />
  );
}

export default App;
