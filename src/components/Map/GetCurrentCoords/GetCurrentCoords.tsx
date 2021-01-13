import { useState, useContext } from 'react'
import Button from '@material-ui/core/Button';
import { Marker, Tooltip, useMapEvent } from "react-leaflet"
import { useCoords } from '../../../hooks/useCoords'
import { RouteContext } from "../../../context/RouteContext"
import { useCurrentCoordsStyles } from './useCurrentCoordsStyles'
import { LeafletMouseEvent } from 'leaflet';


export default function GetCurrentCoords() {
    const [isButtonFocused, setIsButtonFocused] = useState(false)
    const { setCoords, allowCoords: { id }, selectedCoords, setSelectedCoords } = useContext(RouteContext)
    const classes = useCurrentCoordsStyles()

    const { data: location } = useCoords(selectedCoords)

    const map = useMapEvent('click', (e: LeafletMouseEvent) => {
        if (!isButtonFocused) {
            setSelectedCoords({ lat: e.latlng.lat, lng: e.latlng.lng })
            map.setView(e.latlng, 15)
        }
    })

    const handleClick = () => {
        setCoords({ id, coords: selectedCoords })
        setSelectedCoords(null)
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
                    disabled={selectedCoords === null}
                    onClick={handleClick}
                    onFocus={() => setIsButtonFocused(true)}
                    onBlur={() => setIsButtonFocused(true)}
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