import axios from "axios"
import { useQuery } from "react-query"
import { ISuggestion } from '../interfaces/Interfaces'

export const useAutocomplete = (doFetch: boolean, term: string) => {
    return useQuery(['autocomplete', doFetch, term], async () => {
        if (doFetch && term.length) {
            const { data } = await axios.get(`https://api.digitransit.fi/geocoding/v1/autocomplete?text=${term}&boundary.rect.minlat=59.9&boundary.rect.maxlat=60.45&boundary.rect.minlon=24.3&boundary.rect.maxlon=25.5`)

            return data.features.map((feature: { properties: ISuggestion, geometry: ISuggestion }) => {
                return {
                    coordinates: feature.geometry.coordinates,
                    id: feature.properties.id,
                    label: feature.properties.label
                }
            })
        }
    })
}