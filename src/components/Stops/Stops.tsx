import { useReducer } from 'react'
import StopAutocomplete from '../StopAutocomplete/StopAutocomplete'
import { CssBaseline, Container, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import { stopReducer } from '../../reducers/stopReducer'
import { convertSeconds } from '../../helpers/helpers'
import { IStoptimesWithoutPattern } from '../../interfaces/Interfaces'
import { useStopStyles } from '../Stops/useStopsStyles'


export default function SimpleContainer() {
  const [state, dispatch] = useReducer(stopReducer, { stop: null })
  const classes = useStopStyles()

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <Box p={2} display='flex' flexDirection='column' alignItems='center'>
          <StopAutocomplete id='Select stop or station' dispatch={dispatch} />
        </Box>
        {state.stop &&
          <TableContainer component='div' className={classes.container} >
            <Table stickyHeader className={classes.table} size='small' aria-label="simple table">
              <TableHead style={{ fontSize: 12 }}>
                <TableRow hover selected>
                  <TableCell style={{ fontSize: 12 }}>Route</TableCell>
                  <TableCell align="right" style={{ fontSize: 12 }}>From/ Via/ To</TableCell>
                  <TableCell align="right" style={{ fontSize: 12, }}>Departure</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {state.stop.stoptimesWithoutPatterns
                  .map((stoptime: IStoptimesWithoutPattern) => (
                    <TableRow className={classes.row} hover>
                      <TableCell component="th" scope="row" style={{ fontSize: 12 }}>
                        {stoptime.trip.route.mode} {stoptime.trip.routeShortName}
                      </TableCell>
                      <TableCell align="right" style={{ fontSize: 12 }}>{stoptime.trip.route.longName}</TableCell>
                      <TableCell align="right" style={{ fontSize: 12 }}>{convertSeconds(stoptime.scheduledDeparture)}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>}
      </Container>
    </>
  )
}
