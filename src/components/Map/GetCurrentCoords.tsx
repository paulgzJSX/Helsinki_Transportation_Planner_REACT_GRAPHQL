import { useState, useContext } from 'react'
import { useMapEvent } from "react-leaflet";
import { RouteContext } from "../../context/RouteContext";
import Button from '@material-ui/core/Button';
import { Marker, Tooltip } from "react-leaflet"
import { useCoords } from '../../hooks/useCoords'


export default function GetCurrentCoords({ id, selectedCoords, setSelectedCoords }: any): any {
    const [isButtonFocused, setIsButtonFocused] = useState(false)
    const { setCoords } = useContext(RouteContext)

    const { data: location } = useCoords(selectedCoords)

    console.log(location);


    const map = useMapEvent('click', e => {
        if (!isButtonFocused) {
            setSelectedCoords({ lat: e.latlng.lat, lon: e.latlng.lng })
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
            <div className="confirmation-button">
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