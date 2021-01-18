import { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useStopsAutocomplete } from '../../hooks/useStopsAutocomplete'
import { useStopsAutocompleteStyles } from './useAutocompleteStyles'
import { IStop } from '../../interfaces/Interfaces'

type PropTypes = {
    id: string,
    dispatch: any
}

export default function StopAutocomplete({ id, dispatch }: PropTypes) {
    const [term, setTerm] = useState('')
    const [options, setOptions] = useState<string[]>([])
    const classes = useStopsAutocompleteStyles();

    const { data } = useStopsAutocomplete(term)

    useEffect(() => {
        data && setOptions(data.stops.map((stop: IStop) => stop.name))
    }, [data])

    return (
        <div style={{ width: 300 }}>
            <Autocomplete
                freeSolo
                fullWidth
                selectOnFocus
                blurOnSelect
                classes={{ input: classes.input, noOptions: classes.noOptions, option: classes.option }}
                noOptionsText='Type to get locations'
                onChange={(_, value) => {
                    dispatch({ type: 'ADD_STOP', payload: data?.stops.find((stop: IStop) => stop.name === value) })
                }}
                onInputChange={(_, inputValue) => setTerm(inputValue)}
                value={term}
                options={options}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label={id}
                        size='small'
                        required
                        margin="normal"
                        variant="outlined"
                    />
                )}
            />
        </div>
    );
}