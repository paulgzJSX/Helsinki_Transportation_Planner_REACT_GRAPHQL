import { useState, useEffect } from 'react'
import { Autocomplete }  from '../../../components'
import { useStopsAutocomplete } from '../../../hooks/useStopsAutocomplete'
import { IStop } from '../../../interfaces/Interfaces'

export default function StopAutocomplete({ id, dispatch }: { id: string, dispatch: any }) {
    const [term, setTerm] = useState('')
    const [options, setOptions] = useState<string[]>([])

    const { data } = useStopsAutocomplete(term)

    useEffect(() => {
        data && setOptions(data.stops.map((stop: IStop) => stop.name))
    }, [data])

    const handleChange = (_: any, value: string) => {
        dispatch({ 
            type: 'ADD_STOP', 
            payload: data?.stops.find((stop: IStop) => stop.name === value) 
        })
    }

    return (
        <div style={{ width: 300 }}>
             <Autocomplete
                handleChange={handleChange}
                handleInputChange={(_: any, inputValue: string) => setTerm(inputValue)}
                value={term}
                options={options}
                label={id}
                noOptionsText='Type to get locations'
            />
        </div>
    );
}