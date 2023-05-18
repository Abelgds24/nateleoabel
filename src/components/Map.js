import React from "react";
import './Map.css'
import {
    interaction,
    layer,
    custom,
    control,
    Interactions,
    Overlays,
    Controls,
    Map,
    Layers,
    Overlay,
    Util,
  } from "react-openlayers";
  
  

const Maps = () => {
  return (
    <div>
      <h1>Map Page</h1>
      <div  className="mapstyle">
        <footer>
      <Map view={{ center: [89.1112, 76.9325], zoom: 1 }}>
        <Layers>
          <layer.Tile />
        </Layers>
      </Map>
      </footer>

      <p>couldnt get markers to work</p>
      </div>
    </div>
  );
};


export default Maps;
