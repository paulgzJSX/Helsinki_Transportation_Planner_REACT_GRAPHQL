import { useState, useEffect, useContext } from 'react'
import { Polyline, Tooltip, Rectangle, useMap, Polygon, Marker } from "react-leaflet";
import L from 'leaflet';
import { Alert } from '@material-ui/lab'
import CircleMarkerEl from '../CircleMarkerEl'
import { setColor, defineColor } from '../../../helpers/helpers'
import { defineIcon } from '../../Itineraries/Leg/LegElements'
import { RouteContext } from '../../../context/RouteContext'
import { useLegPathsStyles } from './useLegPathStyles'


const PolygonWithText = (props: any) => {
    const icon = L.divIcon({
        className: 'rectangle-icon',
        html: `<div>${props.route}</div>`
    })

    return (
        <Marker position={props.center} icon={icon} />
    )
}


export default function LegPath({ selectedLeg }: any) {
    const [startPoints, setStartPoints] = useState<any>([60.19, 24.94])
    const [endPoints, setEndPoints] = useState<any>([60.19, 24.94])
    const [points, setPoints] = useState([])
    const [bounds, setBounds] = useState<any>([[60.19, 24.94], [60.19, 24.94]])
    const [center, setCenter] = useState<any>([60.19, 24.94])
    const [pathColor, setPathColor] = useState({})
    const { displayDrawer, setDisplayDrawer } = useContext(RouteContext)

    const classes = useLegPathsStyles()

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
            const northWestLat = points[Math.round(points.length / 2)][0] - .0016
            const northWestLon = points[Math.round(points.length / 2)][1] - .005
            const southEastLat = points[Math.round(points.length / 2)][0] + .001
            const southEastLon = points[Math.round(points.length / 2)][1] + .007
            setBounds([[northWestLat, northWestLon], [northWestLat, northWestLon]])
            setCenter(points[Math.round(points.length / 2)])
            // setBounds([points[Math.round(points.length/2)], points[Math.round(points.length/2) - 10]])
        }
    }, [selectedLeg])

    return (
        <>
            <CircleMarkerEl coords={startPoints} type='departure' color={pathColor} />
            <CircleMarkerEl coords={endPoints} type='arrival' color={pathColor} />
            <PolygonWithText
                mode={selectedLeg?.mode} route={selectedLeg?.trip?.routeShortName} coords={bounds} center={center} color={pathColor} />
            {/* <Rectangle bounds={bounds} pathOptions={pathColor} fillOpacity={1} /> */}
            <Polyline weight={4} smoothFactor={1} pathOptions={pathColor} positions={points}>
                {selectedLeg && <Tooltip>{selectedLeg?.trip?.routeShortName}</Tooltip>}
            </Polyline>
            <div className={classes.legInfo}>
                <Alert
                    style={{ backgroundColor: defineColor(selectedLeg.mode) }}
                    icon={defineIcon(selectedLeg.mode)}
                    variant="filled"
                    severity="info"
                    onClick={() => setDisplayDrawer(!displayDrawer)}
                >
                    {selectedLeg.mode} {selectedLeg.trip.routeShortName}
                </Alert>
            </div>
        </>
    )
}