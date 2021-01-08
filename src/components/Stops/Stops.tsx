import { useState } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import StopAutocomplete from '../StopAutocomplete/StopAutocomplete'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { IStop } from '../../interfaces/Interfaces'
import Grid, { GridSpacing } from '@material-ui/core/Grid';


export default function SimpleContainer() {
  const [stop, setStop] = useState<IStop>()

  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box p={2} display='flex' flexDirection='column' alignItems='center'>
          <StopAutocomplete id='Select stop' setStop={setStop} />
        </Box>
        {stop &&
          <Grid container direction='row' justify='space-between' alignItems='center'>
            <Typography variant='subtitle2'>GTFS ID: {stop?.gtfsId}</Typography>
            <Typography variant='subtitle2'>Stop Location: {stop?.desc}</Typography>
            <Typography variant='subtitle2'>Zone: {stop?.zoneId}</Typography>
            <Typography variant='subtitle2'>Latitude: {stop?.lat}</Typography>
            <Typography variant='subtitle2'>Longitude: {stop?.lon}</Typography>
          </Grid>
        }
      </Container>
    </>
  );
}
