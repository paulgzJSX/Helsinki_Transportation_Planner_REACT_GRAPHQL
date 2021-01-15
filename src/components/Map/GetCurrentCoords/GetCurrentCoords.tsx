import { useState, useContext } from 'react'
import Button from '@material-ui/core/Button';
import { Marker, Tooltip, useMapEvent } from "react-leaflet"
import { useCoords } from '../../../hooks/useCoords'
import { RouteContext } from "../../../context/RouteContext"
import { useCurrentCoordsStyles } from './useCurrentCoordsStyles'
import { LeafletMouseEvent } from 'leaflet';


export default function GetCurrentCoords() {
    const [isButtonFocused, setIsButtonFocused] = useState(false)
    const { state, dispatch} = useContext(RouteContext)

    const classes = useCurrentCoordsStyles()

    const { data: location } = useCoords(state.selectedCoords)

    const map = useMapEvent('click', (e: LeafletMouseEvent) => {
        if (!isButtonFocused) {
            dispatch({ type: 'SET_SELECTED_COORDS', payload: { lat: e.latlng.lat, lng: e.latlng.lng } })
            map.setView(e.latlng, 15)
        }
    })

    const handleClick = () => {
        dispatch({ type: 'SET_COORDS', payload: { id: state.allowCoords.id, coords: state.selectedCoords } })
        dispatch({ type: 'SET_SELECTED_COORDS', payload: null })
        setIsButtonFocused(false)
    }

    return (
        <>
            <div className={classes.confirmationButton}>
                <Button
                    variant="contained"
                    color="primary"
                    disableElevation
                    focusRipple
                    disabled={state.selectedCoords === null}
                    onClick={handleClick}
                    onFocus={() => setIsButtonFocused(true)}
                    onBlur={() => setIsButtonFocused(true)}
                >
                    Confirm {state.allowCoords.id}
                </Button>
            </div>
            {state.selectedCoords &&
                <Marker position={state.selectedCoords}>
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