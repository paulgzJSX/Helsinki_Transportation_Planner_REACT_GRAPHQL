import axios from "axios"
import { useQuery } from "react-query"

export const useCoords = (coords: any) => {
    return useQuery(['coords', coords], async () => {
        if (coords) {
            const { data } = await axios.get(`https://api.digitransit.fi/geocoding/v1/reverse?point.lat=${coords?.lat}&point.lon=${coords?.lon}&size=1`)

            return {
                coordinates: Object.values(coords),
                id: data.features[0].properties.id,
                label: data.features[0].properties.name
            }
        }
    })
}