import React from "react";
import { MapContainer,  TileLayer, Marker, Popup } from "react-leaflet";
// import { Fragment } from "react";
import "leaflet/dist/leaflet.css";

class MapViewSideBar extends React.Component {

    render() {
        return (
            
            <MapContainer center={[8, -1]} zoom={6.4} style={{ marginLeft: '10px', marginBottom:'15px', width: '100vh', height: '80vh', paddingLeft:'5vh'}} scrollWheelZoom={false}>
                    <TileLayer
                        
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[51.505, -0.09]}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            
        )
    }
} 

export default MapViewSideBar;