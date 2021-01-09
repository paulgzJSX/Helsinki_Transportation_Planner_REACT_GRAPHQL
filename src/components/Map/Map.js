import { useContext } from 'react'
import { LegPath, GetCurrentCoords } from '../../components'
import { RouteContext } from "../../context/RouteContext"
import { mapSettings } from '../../constants/mapConstants'
import PointSelection from '../Map/PointSelection'

import { MapContainer, TileLayer, useMap } from "react-leaflet"
import L from 'leaflet'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import 'leaflet/dist/leaflet.css'

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

function MoveMap() {
    const map = useMap()
    map.zoomControl.setPosition('bottomright')
    return null
}

export default function Map() {
    const { selectedLeg, allowCoords } = useContext(RouteContext)

    return (
        <div id="mapid">
            <MapContainer
                style={{ height: '100%', width: '100%' }}
                center={mapSettings.centerCoords}
                zoom={mapSettings.zoom}
                scrollWheelZoom={true}
                maxBounds={mapSettings.maxBounds}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {selectedLeg && <LegPath selectedLeg={selectedLeg} />}
                {allowCoords?.state && <GetCurrentCoords />}
                <MoveMap />
                <PointSelection />
            </MapContainer>
        </div>
    )
}
