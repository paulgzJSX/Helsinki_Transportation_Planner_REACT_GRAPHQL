import { useState, useEffect } from 'react'
import AutocompleteInput from '../Generic/AutocompleteInput'
import { useStopsAutocomplete } from '../../hooks/useStopsAutocomplete'
import { IStop } from '../../interfaces/Interfaces'

type PropTypes = {
    id: string,
    dispatch: any
}

export default function StopAutocomplete({ id, dispatch }: PropTypes) {
    const [term, setTerm] = useState('')
    const [options, setOptions] = useState<string[]>([])

    const { data } = useStopsAutocomplete(term)

    useEffect(() => {
        data && setOptions(data.stops.map((stop: IStop) => stop.name))
    }, [data])

    return (
        <div style={{ width: 300 }}>
             <AutocompleteInput 
                handleChange={(_: any, value: string) => {
                    dispatch({ type: 'ADD_STOP', payload: data?.stops.find((stop: IStop) => stop.name === value) })
                }}
                handleInputChange={(_: any, inputValue: string) => setTerm(inputValue)}
                value={term}
                options={options}
                label={id}
                noOptionsText='Type to get locations'
            />
        </div>
    );
}