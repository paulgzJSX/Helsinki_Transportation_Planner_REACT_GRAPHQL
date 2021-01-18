import { useEffect, useContext, memo } from 'react'
import { Alert } from '@material-ui/lab'
import CircleMarkerEl from '../CircleMarkerEl'
import { defineColor } from '../../../helpers/helpers'
import { defineIcon } from '../../Itineraries/Leg/LegElements'
import { RouteContext } from '../../../context/RouteContext'
import { ILeg } from '../../../interfaces/Interfaces'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

import { Polyline, Tooltip, useMap, Marker } from "react-leaflet"
import L from 'leaflet';

const useStyles = makeStyles((_: Theme) =>
    createStyles({
        legInfo: {
            position: 'absolute',
            bottom: '2.4rem',
            zIndex: 3000,
            opacity: .8,
            cursor: 'pointer'
        }
    })
)

const PolygonWithText = (props: any) => {
    const icon = L.divIcon({
        className: 'rectangle-icon',
        html: `<div>${props.route}</div>`
    })
    return <Marker position={props.center} icon={icon} />
}

export default memo(function LegPath(props: { selectedLeg: ILeg }) {
    const {
        selectedLeg: {
            mode,
            trip: {
                routeShortName: route
            },
            legGeometry: {
                points
            }
        }
    }: { selectedLeg: ILeg } = props
    const { state, dispatch } = useContext(RouteContext)
    const classes = useStyles()
    const map = useMap()

    const startPoint = points[0]
    const centerPoint = points[Math.round(points.length / 2)]
    const endPoint = points[points.length - 1]

    useEffect(() => {
        map.fitBounds([startPoint, endPoint])
    }, [points])

    return (
        <>
            <CircleMarkerEl coords={startPoint} type='departure' />
            <CircleMarkerEl coords={endPoint} type='arrival' />
            <PolygonWithText route={route} center={centerPoint} />
            {points &&
                <Polyline
                    weight={4}
                    smoothFactor={1}
                    pathOptions={{ color: defineColor(mode) }}
                    positions={points}
                >
                    {<Tooltip>{route}</Tooltip>}
                </Polyline>}
            <div className={classes.legInfo}>
                <Alert
                    style={{ backgroundColor: defineColor(mode) }}
                    icon={defineIcon(mode)}
                    variant="filled"
                    severity="info"
                    onClick={() => dispatch({ type: 'DISPLAY_DRAWER', payload: !state.displayDrawer })}
                >
                    {mode} {route}
                </Alert>
            </div>
        </>
    )
})