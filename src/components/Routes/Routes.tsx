import { useEffect, useReducer } from 'react'
import RouteAutocomplete from '../RouteAutocomplete/RouteAutocomplete'
import { CssBaseline, Container, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import { routeReducer } from '../../reducers/routeReducer'
import { defineDeparture } from '../../helpers/helpers'
import { useStopStyles } from '../Stops/useStopsStyles'
import { useStopsByPattern } from '../../hooks/useStopsByPattern'
import { IStopPattern } from '../../interfaces/Interfaces'

export default function Routes() {
  const [{ route }, dispatch] = useReducer(routeReducer, { route: null })
  const classes = useStopStyles()

  const [fetchPatterns, { data }] = useStopsByPattern(route?.patterns?.[0].code)

  useEffect(() => {
    if (route?.patterns && route?.patterns?.[0].code !== null) fetchPatterns()
  }, [route?.patterns])

  const rows = data && data.pattern.stops.map((stop: IStopPattern, idx: number) => {
    const route = stop?.stopTimesForPattern?.[0]
    const nextRoute = stop?.stopTimesForPattern?.[1]

    return {
      '#': route?.stopSequence ? route.stopSequence : idx + 1,
      'Route': stop?.name,
      'Departure': defineDeparture(route?.scheduledDeparture),
      'Next Departure': defineDeparture(nextRoute?.scheduledDeparture)
    }
  })

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <Box p={2} display='flex' flexDirection='column' alignItems='center'>
          <RouteAutocomplete dispatch={dispatch} />
        </Box>
        {data &&
          <TableContainer component='div' className={classes.routesContainer} >
            <Table stickyHeader className={classes.table} size='small' aria-label="simple table">
              <TableHead style={{ fontSize: 12 }}>
                <TableRow hover selected>
                  {Object.keys(rows[0]).map(title =>
                    <TableCell style={{ fontSize: 12 }}>{title}</TableCell>)}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row: any) =>
                  <TableRow className={classes.row} hover>
                    {Object.values(row).map((cell: any) =>
                      <TableCell component="th" scope="row" style={{ fontSize: 12 }}>
                        {cell}
                      </TableCell>)}
                  </TableRow>)}
              </TableBody>
            </Table>
          </TableContainer>}
      </Container>
    </>
  )
}
