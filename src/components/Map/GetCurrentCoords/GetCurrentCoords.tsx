import { useState, useContext } from 'react'
import { Button, makeStyles, createStyles, Theme } from '@material-ui/core';
import { useCoords } from '../../../hooks/useCoords'
import { RouteContext } from "../../../context/RouteContext"

import { Marker, Tooltip, useMapEvent } from "react-leaflet"
import { LeafletMouseEvent } from 'leaflet';

const useStyles = makeStyles((_: Theme) => 
    createStyles({
        confirmationButton: {
            position: 'absolute',
            bottom: '4rem',
            zIndex: 400,
            left: '50%',
            transform: 'translateX(-50%)'
        }
    })
)

export default function GetCurrentCoords() {
    const [isBtnFocused, setIsBtnFocused] = useState(false)
    const { state: { allowCoords: { id }, selectedCoords }, dispatch } = useContext(RouteContext)
    const classes = useStyles()

    const { data: location } = useCoords(selectedCoords)

    const map = useMapEvent('click', (e: LeafletMouseEvent) => {
        if (!isBtnFocused) {
            dispatch({ type: 'SET_SELECTED_COORDS', payload: { lat: e.latlng.lat, lng: e.latlng.lng } })
            map.setView(e.latlng, 15)
        }
    })

    const handleClick = () => {
        dispatch({ type: 'SET_COORDS', payload: { id, coords: selectedCoords } })
        dispatch({ type: 'SET_SELECTED_COORDS', payload: null })
        setIsBtnFocused(false)
    }

    return (
        <>
            <div className={classes.confirmationButton}>
                <Button
                    variant="contained"
                    color="primary"
                    disableElevation
                    focusRipple
                    disabled={selectedCoords === null}
                    onClick={handleClick}
                    onFocus={() => setIsBtnFocused(true)}
                    onBlur={() => setIsBtnFocused(true)}
                >
                    Confirm {id}
                </Button>
            </div>
            {selectedCoords &&
                <Marker position={selectedCoords}>
                    {location &&
                        <Tooltip permanent>
                            {location.locality}, {location.neighbourhood} <br />
                            {location.postalCode}  {location.label}
                        </Tooltip>}
                </Marker>
            }
        </>
    )
}