import axios from "axios"
import { useQuery } from "react-query"
import { ICoordinatesObj, ILocation } from '../interfaces/Interfaces'

export const useCoords = (coords: ICoordinatesObj) => {
    return useQuery(['coords', coords], async (): Promise<ILocation> => {
        if (coords) {
            const { data } = await axios.get(`https://api.digitransit.fi/geocoding/v1/reverse?point.lat=${coords?.lat}&point.lon=${coords?.lng}&size=1`)

            return {
                coordinates: Object.values(coords),
                id: data.features[0].properties.id,
                label: data.features[0].properties.name,
                locality: data.features[0].properties.locality,
                neighbourhood: data.features[0].properties.neighbourhood,
                region: data.features[0].properties.region,
                postalCode: data.features[0].properties.postalcode
            }
        }
    })
}