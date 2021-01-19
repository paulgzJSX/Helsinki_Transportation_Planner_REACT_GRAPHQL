import { gql, useQuery } from '@apollo/client';

const GET_STOPS = gql`
  query GetStops ($name: String!) {
    stops(name: $name) {
      gtfsId
      name
      code
      desc
      lat
      lon
      wheelchairBoarding
      vehicleType
      zoneId
      stoptimesWithoutPatterns(numberOfDepartures: 20) {
        scheduledArrival
        realtimeArrival
        arrivalDelay
        scheduledDeparture
        realtimeDeparture
        departureDelay
        realtime
        realtimeState
        serviceDay
        headsign
        trip {
        routeShortName
        stops {
          name
        }
        route {
          id
          longName
          mode
        }
      } 
    }
    }
  }
`
export const useStopsAutocomplete = (name: string) => {
  return useQuery(GET_STOPS, {
    variables: { name }
  })
}