import { useState, useEffect, useContext, memo } from 'react'
import AutocompleteInput from '../Generic/AutocompleteInput';
import { useAutocomplete } from '../../hooks/useAutocomplete'
import { useCoords } from '../../hooks/useCoords';
import { RouteContext } from '../../context/RouteContext';

export default memo(function InputAutocomplete({ id }: { id: string }) {
    const [term, setTerm] = useState('')
    const [doFetch, setDoFetch] = useState(false)
    const { state: { coords }, dispatch } = useContext(RouteContext)

    const { data: suggestions = [] } = useAutocomplete(doFetch, term)
    const { data: currentCoordsLocation } = useCoords(coords?.coords)

    useEffect(() => {
        if (currentCoordsLocation && coords?.id === id) {
            setTerm(currentCoordsLocation?.label)
            dispatch({ type: 'ADD_DATA', payload: { [id]: currentCoordsLocation } })
        }
    }, [currentCoordsLocation])

    useEffect(() => {
        term.length && setDoFetch(true)
    }, [term])

    return (
        <div style={{ width: 300 }}>
            <AutocompleteInput 
                handleChange={(_: any, value: string) => {
                    dispatch({
                        type: 'ADD_DATA',
                        payload: { [id]: suggestions.find(suggestion => suggestion.label === value) }
                    })
                }}
                handleInputChange={(_: any, inputValue: string) => setTerm(inputValue)}
                value={term}
                options={suggestions && suggestions.map(suggestion => suggestion.label)}
                label={id === 'origin' ? 'Select origin' : 'Select destination'}
                noOptionsText='Type to get locations'
            />
        </div>
    )
})