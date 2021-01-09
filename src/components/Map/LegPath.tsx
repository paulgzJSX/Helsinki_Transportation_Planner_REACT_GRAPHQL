import { useState, useEffect } from 'react'
import { Polyline, Tooltip, useMap } from "react-leaflet";
import { Alert } from '@material-ui/lab'
import CircleMarkerEl from '../Map/CircleMarkerEl'
import { setColor, defineColor } from '../../helpers/helpers'
import { defineIcon } from '../Itineraries/Leg/LegElements'


export default function LegPath({ selectedLeg }: any) {
    const [startPoints, setStartPoints] = useState<any>([60.19, 24.94])
    const [endPoints, setEndPoints] = useState<any>([60.19, 24.94])
    const [points, setPoints] = useState([])
    const [pathColor, setPathColor] = useState({})

    const map = useMap()

    useEffect(() => {
        map.fitBounds([startPoints, endPoints])
    }, [startPoints, endPoints])


    useEffect(() => {
        setColor(selectedLeg?.mode, setPathColor)

        if (selectedLeg) {
            const points = selectedLeg?.legGeometry.points
            setStartPoints(points[0])
            setEndPoints(points[points.length - 1])
            setPoints(points)
        }
    }, [selectedLeg])

    return (
        <>
            <CircleMarkerEl coords={startPoints} type='departure' color={pathColor} />
            <CircleMarkerEl coords={endPoints} type='arrival' color={pathColor} />
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