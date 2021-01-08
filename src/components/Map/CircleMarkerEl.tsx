import { Popup, CircleMarker } from "react-leaflet";
import { mapSettings } from '../../constants/mapConstants'

interface IProps {
    coords: any,
    color: any,
    popup: string
}

export default function CircleMarkerEl({ coords, color, popup }: IProps) {
    return (
        <CircleMarker center={coords} pathOptions={color} radius={mapSettings.circleMarkerRadius}>
            <Popup>{popup}</Popup>
        </CircleMarker>
    )
}

