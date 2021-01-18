import { useState, useEffect } from 'react'
import { TextField, BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete'
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus'
import DirectionsRailwayIcon from '@material-ui/icons/DirectionsRailway'
import SubwayIcon from '@material-ui/icons/Subway'
import TramIcon from '@material-ui/icons/Tram'
import { useRouteAutocomplete } from '../../hooks/useRouteAutocomplete'
import { useRouteAutocompleteStyles } from './useRouteAutocompleteStyles'
import { IRoute } from '../../interfaces/Interfaces'

const navActions = [
    { value: "Bus", icon: <DirectionsBusIcon /> },
    { value: "Rail", icon: <DirectionsRailwayIcon /> },
    { value: "Subway", icon: <SubwayIcon /> },
    { value: "Tram", icon: <TramIcon /> }
]

export default function RouteAutocomplete({ dispatch }: any) {
    const [term, setTerm] = useState('')
    const [options, setOptions] = useState([])
    const [mode, setMode] = useState(null)
    const classes = useRouteAutocompleteStyles()

    const [fetchRoutes, { data }] = useRouteAutocomplete(term, mode)

    useEffect(() => {
        if (mode !== null && term !== null) {
            fetchRoutes()
        }
    }, [mode])

    useEffect(() => {
        data && setOptions([...data.routes]
            .sort((a: IRoute, b: IRoute) => a.shortName.localeCompare(b.shortName))
            .map(route => route.shortName + ' ' + route.longName)
        )
    }, [data])

    const handleChange = (_: any, newValue: string) => {
        setMode(newValue)
        setTerm('')
        dispatch({ type: 'ADD_ROUTE', payload: null })
    }

    return (
        <>
            <BottomNavigation
                value={mode}
                onChange={handleChange}
                showLabels
                className={classes.root}
            >
                {navActions.map(action =>
                    <BottomNavigationAction
                        key={action.value}
                        value={action.value.toUpperCase()}
                        label={action.value}
                        icon={action.icon} />)}
            </BottomNavigation>
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
                            const selectedRoute = data?.routes.find((route: IRoute) => route.shortName + ' ' + route.longName === value)
                            dispatch({ type: 'ADD_ROUTE', payload: selectedRoute })
                        }}
                        onInputChange={(_, inputValue) => setTerm(inputValue)}
                        value={term}
                        options={options}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label='Select route'
                                size='small'
                                required
                                margin="normal"
                                variant="outlined"
                            />
                        )}
                    />
                </div>}
        </>
    )
}