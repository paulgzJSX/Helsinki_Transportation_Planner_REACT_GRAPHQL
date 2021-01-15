import { useState, useEffect, useContext } from 'react'
import { useAutocomplete } from '../../hooks/useAutocomplete'
import { useCoords } from '../../hooks/useCoords';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { RouteContext } from '../../context/RouteContext';
import { useAutocompleteStyles } from './useAutocompleteStyles'


type PropTypes = {
    id: string
}

export default function InputAutocomplete({ id }: PropTypes) {
    const [term, setTerm] = useState('')
    const [doFetch, setDoFetch] = useState(false)
    const { dispatch, state } = useContext(RouteContext)
    const classes = useAutocompleteStyles();

    const { data: suggestions = [] } = useAutocomplete(doFetch, term)
    const { data: currentCoordsLocation } = useCoords(state.coords?.coords)

    useEffect(() => {
        if (currentCoordsLocation && state.coords?.id === id) {
            setTerm(currentCoordsLocation?.label)
            dispatch({ type: 'ADD_DATA', payload: { [id]: currentCoordsLocation } })
        }
    }, [currentCoordsLocation])

    useEffect(() => {
        term.length && setDoFetch(true)
    }, [term])

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
                    dispatch({
                        type: 'ADD_DATA',
                        payload: { [id]: suggestions.find(suggestion => suggestion.label === value) }
                    })
                }}
                onInputChange={(_, inputValue) => setTerm(inputValue)}
                value={term}
                options={suggestions && suggestions.map(suggestion => suggestion.label)}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label={id === 'origin' ? 'Select origin' : 'Select destination'}
                        size='small'
                        required
                        margin="normal"
                        variant="outlined"
                    />
                )}
            />
        </div>
    )
}