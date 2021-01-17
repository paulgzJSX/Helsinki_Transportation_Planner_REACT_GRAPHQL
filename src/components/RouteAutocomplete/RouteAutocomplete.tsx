import { useState, useEffect } from 'react'
import { TextField, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useRouteAutocomplete } from '../../hooks/useRouteAutocomplete'
import { IRoute } from '../../interfaces/Interfaces'
import { useRouteAutocompleteStyles } from './useRouteAutocompleteStyles'

const menuItems = ['Bus', 'Rail', 'Subway', 'Tram']

export default function RouteAutocomplete({ dispatch }: any) {
    const [term, setTerm] = useState('')
    const [options, setOptions] = useState([])
    const [mode, setMode] = useState('');
    const classes = useRouteAutocompleteStyles();

    const { data } = useRouteAutocomplete(term.length && term, mode)

    useEffect(() => {
        data && setOptions([...data.routes]
            .sort((a: IRoute, b: IRoute) => a.shortName.localeCompare(b.shortName))
            .map(route => route.shortName + ' ' + route.longName)
        )
    }, [data])

    return (
        <>
            <FormControl className={classes.formControl}>
                <InputLabel id="type-label">Type</InputLabel>
                <Select
                    labelId="type-label"
                    id="type-label"
                    value={mode}
                    onChange={e => setMode(e.target.value as string)}
                    className={classes.select}
                >
                    {menuItems.map(item =>
                        <MenuItem key={item} value={item.toUpperCase()}>{item}</MenuItem>)}
                </Select>
            </FormControl>
            {mode &&
                <div style={{ width: 400 }}>
                    <Autocomplete
                        freeSolo
                        fullWidth
                        selectOnFocus
                        blurOnSelect
                        classes={{ input: classes.input, noOptions: classes.noOptions, option: classes.option }}
                        noOptionsText='Type to get locations'
                        onChange={(_, value) => {
                            console.log(value);   
                            dispatch({ type: 'ADD_ROUTE', payload: data?.routes.find((route: IRoute) => route.shortName === value) })
                        }}
                        onInputChange={(_, inputValue) => setTerm(inputValue)}
                        value={term}
                        options={options}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label='Select'
                                size='small'
                                required
                                margin="normal"
                                variant="outlined"
                            />
                        )}
                    />
                </div>
            }
        </>
    );
}