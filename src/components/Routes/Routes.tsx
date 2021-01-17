import { useReducer } from 'react'
import RouteAutocomplete from '../RouteAutocomplete/RouteAutocomplete'
import { CssBaseline, Container, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import { routeReducer } from '../../reducers/routeReducer'
import { convertSeconds } from '../../helpers/helpers'
import { useStopStyles } from '../Stops/useStopsStyles'
import { useStopsByPattern } from '../../hooks/useStopsByPattern'
import { IPattern, IAlert, IStopPattern, IStopTimesForPattern } from '../../interfaces/Interfaces'

const headerTitles = ['#', 'Route', 'Departure', 'Next Departure']

export default function SimpleContainer() {
  const [state, dispatch] = useReducer(routeReducer, { route: null })
  const classes = useStopStyles()

  const { data } = useStopsByPattern(state?.route?.patterns?.[0].code)

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
                  {headerTitles.map(title =>
                    <TableCell style={{ fontSize: 12 }} key={title}>{title}</TableCell>)}
                </TableRow>
              </TableHead>
              <TableBody>
                {data.pattern.stops.map((stop: IStopPattern, idx: number) => (
                  <TableRow className={classes.row} hover>
                    <TableCell component="th" scope="row" style={{ fontSize: 12 }}>
                      {stop?.stopTimesForPattern?.[0]?.stopSequence
                        ? stop?.stopTimesForPattern?.[0]?.stopSequence
                        : idx + 1}
                    </TableCell>
                    <TableCell component="th" scope="row" style={{ fontSize: 12 }}>
                      {stop?.name as string}
                    </TableCell>
                    <TableCell component="th" scope="row" style={{ fontSize: 12 }}>
                      {stop?.stopTimesForPattern?.[1]?.scheduledDeparture
                        ? convertSeconds(stop?.stopTimesForPattern?.[0].scheduledDeparture)
                        : 'no data'}
                    </TableCell>
                    <TableCell component="th" scope="row" style={{ fontSize: 12 }}>
                      {stop?.stopTimesForPattern?.[1]?.scheduledDeparture
                        ? convertSeconds(stop?.stopTimesForPattern?.[1]?.scheduledDeparture)
                        : 'no data'}
                    </TableCell>
                  </TableRow>))}
              </TableBody>
            </Table>
          </TableContainer>}
      </Container>
    </>
  )
}
