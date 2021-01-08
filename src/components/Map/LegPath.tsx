import { useState, useEffect } from 'react'
import { Polyline, Tooltip } from "react-leaflet";
import CircleMarkerEl from '../Map/CircleMarkerEl'
import { setColor } from '../../helpers/helpers'


export default function LegPath({ selectedLeg }: any) {
    const [startPoints, setStartPoints] = useState([60.19, 24.94])
    const [endPoints, setEndPoints] = useState([60.19, 24.94])
    const [points, setPoints] = useState([])
    const [pathColor, setPathColor] = useState({})

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
            <CircleMarkerEl coords={startPoints} color={pathColor} popup={selectedLeg?.from?.stop?.name} />
            <CircleMarkerEl coords={endPoints} color={pathColor} popup={selectedLeg?.to?.name} />
            <Polyline weight={3} smoothFactor={1} pathOptions={pathColor} positions={points}>
                <Tooltip>
                    {selectedLeg?.mode} route {selectedLeg?.trip?.routeShortName} from {selectedLeg?.from?.stop?.name.toUpperCase()} to {selectedLeg?.to?.name.toUpperCase()}
                </Tooltip>
            </Polyline>

        </>
    )
}