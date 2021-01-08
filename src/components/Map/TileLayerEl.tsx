import { TileLayer } from "react-leaflet";

export default function TileLayerEl() {
    return (
        <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
    )
}