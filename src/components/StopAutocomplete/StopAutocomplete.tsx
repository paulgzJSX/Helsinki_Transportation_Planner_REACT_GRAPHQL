import React, { useState, useEffect, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useAutocomplete } from '../../hooks/useAutocomplete'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { RouteContext } from '../../context/RouteContext';
import { useStopsAutocomplete } from '../../hooks/useStopsAutocomplete'
import { IStop } from '../../interfaces/Interfaces'

const useAutocompleteStyle = makeStyles({
    input: {
        fontSize: 13
    },
    noOptions: {
        fontSize: 13
    },
    option: {
        fontSize: 13
    },
    tag: {
        fontSize: 13
    }
})

interface ILocation {
    label: string;
}

interface PropTypes {
    id: string,
    setStop: (value: IStop) => void
}

export default function StopAutocomplete({ id, setStop }: PropTypes) {
    const [term, setTerm] = useState('')
    const [options, setOptions] = useState([])
    const classes = useAutocompleteStyle();

    const { data } = useStopsAutocomplete(term)

    useEffect(() => {
        data && setOptions(data.stops.map((stop: any) => stop.name))
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
                onChange={(_, value) => setStop(data?.stops.find((stop: any) => stop.name === value))}
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