import { useState, useEffect } from 'react'
import { Polyline, Tooltip, Rectangle, useMap, Polygon, Marker } from "react-leaflet";
import L from 'leaflet';
import { Alert } from '@material-ui/lab'
import CircleMarkerEl from '../Map/CircleMarkerEl'
import { setColor, defineColor } from '../../helpers/helpers'
import { defineIcon } from '../Itineraries/Leg/LegElements'


const PolygonWithText = (props: any) => {
    const icon = L.divIcon({
        className: 'rectangle-icon',
        html: `<div><p>509</p></div>`
    });
  
    return(
      <Rectangle bounds={props.coords} pathOptions={props.color} fillOpacity={1}>
        <Marker position={props.center} icon={icon} />
      </Rectangle>
    );
  }


export default function LegPath({ selectedLeg }: any) {
    const [startPoints, setStartPoints] = useState<any>([60.19, 24.94])
    const [endPoints, setEndPoints] = useState<any>([60.19, 24.94])
    const [points, setPoints] = useState([])
    const [bounds, setBounds] = useState<any>([[60.19, 24.94],[60.19, 24.94]])
    const [center, setCenter] = useState<any>([60.19, 24.94])
    const [pathColor, setPathColor] = useState({})

    console.log(bounds);

    const map = useMap()

    useEffect(() => {
        map.fitBounds([startPoints, endPoints])
    }, [startPoints, endPoints])


    useEffect(() => {
        if (selectedLeg) {
            setColor(selectedLeg?.mode, setPathColor)

            const points = selectedLeg?.legGeometry.points
            setStartPoints(points[0])
            setEndPoints(points[points.length - 1])
            setPoints(points)
            const northWestLat = points[Math.round(points.length/2)][0] - .001
            const northWestLon = points[Math.round(points.length/2)][1] - .005
            const southEastLat = points[Math.round(points.length/2)][0] + .001
            const southEastLon = points[Math.round(points.length/2)][1] + .005
            setBounds([[northWestLat, northWestLon], [southEastLat, southEastLon]])
            setCenter([southEastLat, northWestLon])
            // setBounds([points[Math.round(points.length/2)], points[Math.round(points.length/2) - 10]])
        }
    }, [selectedLeg])

    return (
        <>
            <CircleMarkerEl coords={startPoints} type='departure' color={pathColor} />
            <CircleMarkerEl coords={endPoints} type='arrival' color={pathColor} />
            <PolygonWithText mode={selectedLeg?.mode} coords={bounds} center={center} color={pathColor} />
            {/* <Rectangle bounds={bounds} pathOptions={pathColor} fillOpacity={1} /> */}
            <Polyline weight={4} smoothFactor={1} pathOptions={pathColor} positions={points}>
                <Tooltip>
                    {selectedLeg?.mode} route {selectedLeg?.trip?.routeShortName} from {selectedLeg?.from?.stop?.name.toUpperCase()} to {selectedLeg?.to?.name.toUpperCase()}
                </Tooltip>
            </Polyline>
            <div className='leg-info'>
                <Alert style={{ backgroundColor: defineColor(selectedLeg.mode) }} icon={defineIcon(selectedLeg.mode)} variant="filled" severity="info">
                    {selectedLeg.mode} {selectedLeg.trip.routeShortName}
                </Alert>
            </div>
        </>
    )
}