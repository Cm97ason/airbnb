import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";
import { LocationMarkerIcon } from "@heroicons/react/solid";

function Map({ searchResults }) {
    const [selectedLocation, setSelectedLocation] = useState({});

    const [viewport, setViewport] = useState({
        width: "100%",
        height: "100%",
        zoom: 11,
    });

    return (
        <ReactMapGL
            mapStyle='mapbox://styles/coreylmason/cleqdtw6w009k01p53xym0elw'
            mapboxAccessToken={process.env.mapbox_key}
        >
        </ReactMapGL>
    );
}

export default Map;