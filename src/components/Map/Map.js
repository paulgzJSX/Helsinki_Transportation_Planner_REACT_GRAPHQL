import { useState, useContext, useEffect } from 'react'
import { TileLayerEl, LegPath, GetCurrentCoords } from '../../components'
import { RouteContext } from "../../context/RouteContext"
import { mapSettings } from '../../constants/mapConstants'
import PointSelection from '../Map/PointSelection'
import LegInfo from '../Map/LegInfo'

import { MapContainer } from "react-leaflet"
import L from 'leaflet'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import 'leaflet/dist/leaflet.css'

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;


export default function Map() {
    const [allowCoords, setAllowCoords] = useState()
    const [selectedCoords, setSelectedCoords] = useState(null)
    const { selectedLeg, formData } = useContext(RouteContext)

    useEffect(() => {
        formData?.origin && formData?.destination && setAllowCoords({ state: false })
    }, [formData])

    return (
        <div id="mapid">
            <MapContainer
                style={{ height: '100%', width: '100%' }}
                center={mapSettings.centerCoords}
                zoom={mapSettings.zoom}
                scrollWheelZoom={true}
                maxBounds={mapSettings.maxBounds}
            >
                <TileLayerEl />
                {selectedLeg && <LegPath selectedLeg={selectedLeg} />}
                {allowCoords?.state &&
                    <GetCurrentCoords
                        id={allowCoords?.id}
                        setSelectedCoords={setSelectedCoords}
                        selectedCoords={selectedCoords} />}
                <PointSelection 
                    setAllowCoords={setAllowCoords}
                    setSelectedCoords={setSelectedCoords} />
                {selectedLeg && <LegInfo selectedLeg={selectedLeg} />}
            </MapContainer>
        </div>
    )
}
