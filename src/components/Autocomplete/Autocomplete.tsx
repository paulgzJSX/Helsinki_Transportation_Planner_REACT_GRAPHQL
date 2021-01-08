import React, { useState, useEffect, useContext } from 'react'
import { useAutocomplete } from '../../hooks/useAutocomplete'
import { useCoords } from '../../hooks/useCoords';
import { useAutocompleteStyle } from '../../styleHooks/useStyle'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { RouteContext } from '../../context/RouteContext';



interface ILocation {
    label: string;
}

interface PropTypes {
    id: string
}

export default function InputAutocomplete({ id }: PropTypes) {
    const [term, setTerm] = useState('')
    const [doFetch, setDoFetch] = useState(false)
    const { setFormData, formData, coords } = useContext(RouteContext)
    const classes = useAutocompleteStyle();

    const { data: suggestions = [] } = useAutocomplete(doFetch, term)
    const { data: currentCoordsLocation } = useCoords(coords?.coords)

    
    useEffect(() => {
        if (currentCoordsLocation && coords?.id === id) {
            setTerm(currentCoordsLocation?.label)
            setFormData({ ...formData, [id]: currentCoordsLocation })
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
                onChange={(_, value) => setFormData({
                    ...formData,
                    [id]: suggestions.find((suggestion: ILocation) => suggestion.label === value)
                })
                }
                onInputChange={(_, inputValue) => setTerm(inputValue)}
                value={term}
                options={suggestions && suggestions.map((suggestion: ILocation) => suggestion.label)}
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