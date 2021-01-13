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
        stoptimesForPatterns {
          stoptimes {
            scheduledArrival
            realtimeArrival
            arrivalDelay
            scheduledDeparture
            realtimeDeparture
            departureDelay
            trip {
              routeShortName
            }
          }
        }
        routes {
          shortName
          longName
          bikesAllowed
          mode
        }
      }
    }
`;

export const useStopsAutocomplete = (name: string) => {
    return useQuery(GET_STOPS, {
        variables: { name }
    })
}