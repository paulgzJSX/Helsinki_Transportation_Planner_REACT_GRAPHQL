import { useState } from 'react'
import StopAutocomplete from '../StopAutocomplete/StopAutocomplete'
import { CssBaseline, Container, Box, Typography, Grid }  from '@material-ui/core';
import { IStopDetails } from '../../interfaces/Interfaces'


export default function SimpleContainer() {
  const [stop, setStop] = useState<IStopDetails>()
  
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
