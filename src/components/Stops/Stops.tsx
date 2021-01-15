import { useState, useReducer } from 'react'
import StopAutocomplete from '../StopAutocomplete/StopAutocomplete'
import { CssBaseline, Container, Box, Typography, Grid, Paper, Button } from '@material-ui/core';
import { defineIcon } from '../Itineraries/Leg/LegElements'
import { IStoptimesWithoutPattern, IStopDetails, IStopTime } from '../../interfaces/Interfaces'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { BsBoxArrowInDown } from 'react-icons/bs';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { convertSeconds } from '../../helpers/helpers'

const stopReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'ADD_STOP':
        return { stop: action.payload }
    default:
      throw new Error()
  }  
}

const useStyles = makeStyles((_: Theme) =>
  createStyles({
    root: {
      padding: '.5rem 1rem',
      backgroundColor: '#dbdbdf'
    },
    buttonMargin: {
      marginRight: '.5rem'
    },
    table: {
      minWidth: 650
    },
    container: {
      overflowY: 'scroll',
      maxHeight: 350
    },
    row: {
      cursor: 'pointer'
    }
  }),
)

export default function SimpleContainer() {
  const [stop, setStop] = useState<IStopDetails>()
  const [state, dispatch] = useReducer(stopReducer, { stop: null })
  const classes = useStyles()

  // stop?.stoptimesWithoutPatterns.map(pattern =>
  // pattern.stoptimes.flat().forEach(el => bar = [...bar, el] ));

  // console.log(bar.sort((a: any, b: any) => a.scheduledArrival - b.scheduledArrival));

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <Box p={2} display='flex' flexDirection='column' alignItems='center'>
          <StopAutocomplete id='Select stop or station' setStop={setStop} dispatch={dispatch} />
        </Box>
        {stop &&
          <>
            {/* <Grid container direction='row' justify='space-around' alignItems='center'>
              <Paper className={classes.root}>
                <Typography variant='subtitle2'>Location: {stop?.desc}</Typography>
              </Paper>
              <Paper className={classes.root}>
                <Typography variant='subtitle2'>Zone: {stop?.zoneId}</Typography>
              </Paper>
              <Paper className={classes.root}>
                <Typography variant='subtitle2'>Latitude: {stop?.lat}</Typography>
              </Paper>
              <Paper className={classes.root}>
                <Typography variant='subtitle2'>Longitude: {stop?.lon}</Typography>
              </Paper>
            </Grid> */}
            <Box component='div' display='flex' alignItems='center' justifyContent='flex-start'>
              {/* {stop?.routes.map(route =>
                <Button variant='contained' color='primary' className={classes.buttonMargin}>
                  {defineIcon(route.mode)} {route.shortName}
                </Button>)} */}
            </Box>
            <TableContainer component='div' className={classes.container} >
              <Table stickyHeader className={classes.table} size='small' aria-label="simple table">
                <TableHead style={{ fontSize: 12 }}>
                  <TableRow hover selected>
                    <TableCell style={{ fontSize: 12 }}>Route</TableCell>
                    <TableCell align="right" style={{ fontSize: 12 }}>From/ Via/ To</TableCell>
                    <TableCell align="right" style={{ fontSize: 12, }}>Departure</TableCell>
                    {/* <TableCell align="right" style={{ fontSize: 12 }}>Towards</TableCell> */}
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
                          {/* <TableCell align="right" style={{ fontSize: 12 }}>{stoptime.headsign}</TableCell> */}
                        </TableRow>
                      ))}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        }
      </Container>
    </>
  );
}
