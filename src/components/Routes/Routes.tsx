import { useReducer } from 'react'
import RouteAutocomplete from '../RouteAutocomplete/RouteAutocomplete'
import { CssBaseline, Container, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import { routeReducer } from '../../reducers/routeReducer'
import { convertSeconds } from '../../helpers/helpers'
import { IStop, IStoptimesWithoutPattern } from '../../interfaces/Interfaces'
import { useStopStyles } from '../Stops/useStopsStyles'


export default function SimpleContainer() {
  const [state, dispatch] = useReducer(routeReducer, { route: null })
  const classes = useStopStyles()

  console.log(state);
  

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <Box p={2} display='flex' flexDirection='column' alignItems='center'>
          <RouteAutocomplete dispatch={dispatch} />
        </Box>
        {/* {state.route &&
          <TableContainer component='div' className={classes.container} >
            <Table stickyHeader className={classes.table} size='small' aria-label="simple table">
              <TableHead style={{ fontSize: 12 }}>
                <TableRow hover selected>
                  <TableCell style={{ fontSize: 12 }}>Route</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {state.route.stops
                  .map((stop: IStop) => (
                    <TableRow className={classes.row} hover>
                      <TableCell component="th" scope="row" style={{ fontSize: 12 }}>
                        {stop.name}
                      </TableCell>
                    
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>} */}
      </Container>
    </>
  )
}
