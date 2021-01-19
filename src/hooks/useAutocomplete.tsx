import axios from "axios"
import { useQuery } from "react-query"
import { ISuggestion } from '../interfaces/Interfaces'

const urlTxt = process.env.REACT_APP_GEO_AUTOCOMPLETE_1
const urlBndry = process.env.REACT_APP_GEO_AUTOCOMPLETE_2

export const useAutocomplete = (doFetch: boolean, term: string) => {
    return useQuery(['autocomplete', doFetch, term], async (): Promise<ISuggestion[]> => {
        if (doFetch && term.length) {
            const { data } = await axios.get(`${urlTxt}${term}${urlBndry}`)

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