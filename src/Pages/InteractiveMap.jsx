import { MapContainer, TileLayer } from "react-leaflet";

export default function Map() {
return (
    <div className="h-screen">
    <MapContainer style={{ height: '100%', width: '100%' }} center={[52.5200, 13.4050]} zoom={13}>
    <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    />
    </MapContainer>
    </div>
);
}
