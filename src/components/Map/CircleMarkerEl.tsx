import { useContext } from "react";
import { convertTime } from '../../helpers/helpers'
import { CircleMarker, Tooltip } from "react-leaflet";
import { RouteContext } from "../../context/RouteContext";

interface IProps {
    coords: any,
    type: string,
    color: any
}

export default function CircleMarkerEl({ coords, type, color }: IProps) {
    const { selectedLeg } = useContext(RouteContext)

    const stop = type === 'departure' ? selectedLeg?.from?.stop?.name : selectedLeg?.to?.name
    const prefix = type === 'departure' ? 'dep' : 'arr'
    const time = type === 'departure'
        ? convertTime(new Date(selectedLeg.startTime))
        : convertTime(new Date(selectedLeg.endTime))
    

    return (
        <CircleMarker center={coords} pathOptions={color} radius={3}>
            <Tooltip permanent>
                {stop} {prefix} {time}
            </Tooltip>
        </CircleMarker>
    )
}

