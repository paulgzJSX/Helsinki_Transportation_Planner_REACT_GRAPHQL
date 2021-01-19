import axios from "axios"
import { useQuery } from "react-query"
import { ICoordinatesObj, ILocation } from '../interfaces/Interfaces'

const urlLat = process.env.REACT_APP_GEO_REVERSE_LAT
const urlLon = process.env.REACT_APP_GEO_REVERSE_LON
const urlSize = process.env.REACT_APP_GEO_SIZE

export const useCoords = (coords: ICoordinatesObj) => {
    return useQuery(['coords', coords], async (): Promise<ILocation> => {
        if (coords?.lat !== undefined && coords?.lng !== undefined) {
            const { data } = await axios.get(`${urlLat}${coords?.lat}${urlLon}${coords?.lng}${urlSize}`)

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