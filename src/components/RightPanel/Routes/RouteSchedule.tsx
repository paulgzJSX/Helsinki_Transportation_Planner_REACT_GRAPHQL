import { useEffect, useReducer } from 'react'
import { RouteAutocomplete, Table } from '../../../components'
import { CssBaseline, Container, Box } from '@material-ui/core'
import { routeReducer } from '../../../reducers/routeReducer'
import { defineDeparture } from '../../../helpers/helpers'
import { useStopsByPattern } from '../../../hooks/useStopsByPattern'
import { IStopPattern } from '../../../interfaces/Interfaces'

export default function RouteSchedule() {
  const [{ route }, dispatch] = useReducer(routeReducer, { route: null })

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
            <Table rows={rows} maxHeight={{ maxHeight: 300 }} />}
      </Container>
    </>
  )
}
