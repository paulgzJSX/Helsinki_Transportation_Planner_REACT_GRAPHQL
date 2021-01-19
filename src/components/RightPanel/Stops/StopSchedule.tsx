import { useReducer } from 'react'
import { StopAutocomplete, Table } from '../../../components'
import { CssBaseline, Container, Box } from '@material-ui/core'
import { stopReducer } from '../../../reducers/stopReducer'
import { convertSeconds } from '../../../helpers/helpers'
import { IStoptimesWithoutPattern } from '../../../interfaces/Interfaces'

export default function StopSchedule() {
  const [state, dispatch] = useReducer(stopReducer, { stop: null })

  const rows = state?.stop?.stoptimesWithoutPatterns.map((stoptime: IStoptimesWithoutPattern) => {
    return {
      'Route': stoptime.trip.route.mode + ' ' + stoptime.trip.routeShortName,
      'From/ Via/ To': stoptime.trip.route.longName,
      'Departure': convertSeconds(stoptime.scheduledDeparture)
    }
  })

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <Box p={2} display='flex' flexDirection='column' alignItems='center'>
          <StopAutocomplete id='Select stop or station' dispatch={dispatch} />
        </Box>
        {state.stop &&
          <Table rows={rows} maxHeight={{ maxHeight: 350 }} />}
      </Container>
    </>
  )
}
