import { useState, useEffect } from 'react'
import AutocompleteInput from '../Generic/AutocompleteInput'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus'
import DirectionsRailwayIcon from '@material-ui/icons/DirectionsRailway'
import SubwayIcon from '@material-ui/icons/Subway'
import TramIcon from '@material-ui/icons/Tram'
import { useRouteAutocomplete } from '../../hooks/useRouteAutocomplete'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { IRoute } from '../../interfaces/Interfaces'

const navActions = [
    { value: "Bus", icon: <DirectionsBusIcon /> },
    { value: "Rail", icon: <DirectionsRailwayIcon /> },
    { value: "Subway", icon: <SubwayIcon /> },
    { value: "Tram", icon: <TramIcon /> }
]

const useStyles = makeStyles((_: Theme) =>
    createStyles({
        root: { width: 500 }
    })
)

export default function RouteAutocomplete({ dispatch }: any) {
    const [term, setTerm] = useState('')
    const [options, setOptions] = useState([])
    const [mode, setMode] = useState(null)
    const classes = useStyles()

    const [fetchRoutes, { data }] = useRouteAutocomplete(term, mode)

    useEffect(() => {
        if (mode !== null && term !== null) fetchRoutes()
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
            <BottomNavigation value={mode} onChange={handleChange} showLabels className={classes.root}>
                {navActions.map(action =>
                    <BottomNavigationAction
                        key={action.value}
                        value={action.value.toUpperCase()}
                        label={action.value}
                        icon={action.icon} />)}
            </BottomNavigation>
            {mode &&
                <div style={{ width: 400 }}>
                    <AutocompleteInput
                        handleChange={(_: any, value: string) => {
                            dispatch({
                                type: 'ADD_ROUTE',
                                payload: data?.routes.find((route: IRoute) => route.shortName + ' ' + route.longName === value)
                            })
                        }}
                        handleInputChange={(_: any, inputValue: string) => setTerm(inputValue)}
                        value={term}
                        options={options}
                        label='Select route'
                        noOptionsText='Type to get locations'
                    />
                </div>}
        </>
    )
}