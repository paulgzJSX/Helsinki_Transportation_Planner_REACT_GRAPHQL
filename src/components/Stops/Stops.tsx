import { useState } from 'react'
import StopAutocomplete from '../StopAutocomplete/StopAutocomplete'
import { CssBaseline, Container, Box, Typography, Grid, Paper } from '@material-ui/core';
import { IStopDetails } from '../../interfaces/Interfaces'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((_: Theme) =>
  createStyles({
    root: {
      padding: '.5rem 1rem',
      backgroundColor: '#dbdbdf'
    },
  }),
)

export default function SimpleContainer() {
  const [stop, setStop] = useState<IStopDetails>()
  const classes = useStyles()

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <Box p={2} display='flex' flexDirection='column' alignItems='center'>
          <StopAutocomplete id='Select stop' setStop={setStop} />
        </Box>
        {stop &&
          <>
            <Grid container direction='row' justify='space-around' alignItems='center'>
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
            </Grid>
            <Grid container direction='row' justify='center' alignItems='center'>
              <Paper>
                {stop?.routes.map(route => 
                  <Typography variant='subtitle2'>{route.mode} {route.shortName}</Typography>)}
              </Paper>
            </Grid>
          </>
        }
      </Container>
    </>
  );
}
