import { useState, useContext } from 'react'
import { useMapEvent } from "react-leaflet";
import { RouteContext } from "../../context/RouteContext";
import Button from '@material-ui/core/Button';

export default function GetCurrentCoords({ id }: any): any {
    const [selectedCoords, setSelectedCoords] = useState(null)
    const { setCoords } = useContext(RouteContext)

    const map = useMapEvent('click', e => {
        setSelectedCoords({ lat: e.latlng.lat, lon: e.latlng.lng })
        map.setView(e.latlng, 15)
    })

    const handleClick = () => {
        setCoords({ id, coords: selectedCoords })
        setSelectedCoords(null)
    }

    return (
        <div className="confirmation-button">
            <Button
                variant="contained"
                color="primary"
                disableElevation
                focusRipple
                disabled={selectedCoords === null}
                onClick={handleClick}
            >
                Confirm {id}
            </Button>
        </div>
    )
}