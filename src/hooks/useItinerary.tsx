import { gql, useLazyQuery } from '@apollo/client'
import { useContext } from 'react'
import { RouteContext } from '../App'

const GET_ITINERARY = gql`
  query GetItinerary ($fromLat: Float!, $fromLon: Float!, $toLat: Float!, $toLon: Float!) {
    plan(
      from: {lat: $fromLat, lon: $fromLon}
      to: {lat: $toLat, lon: $toLon}
      numItineraries: 3
    ) {
      itineraries{
        walkDistance,
        duration,
        legs {
          mode
          startTime
          endTime
          from {
            lat
            lon
            name
            stop {
              code
              name
            }
          },
          to {
            lat
            lon
            name
          },
          trip {
            tripHeadsign
            routeShortName,
            gtfsId,
            stops {
              id
              name
              code
              desc
              zoneId
              wheelchairBoarding
              vehicleMode
              routes {
                shortName
              }
            }
          },
          agency {
            gtfsId
            name
          },
          distance
          legGeometry {
            length
            points
          }
        }
      }
    }
  }
`
export const useItinerary = () => {
  const { state } = useContext(RouteContext)

  let fromLat, fromLon, toLat, toLon

  if (state.origin && state.destination) {
    const from = state?.origin
    const to = state?.destination

    fromLat = from?.coordinates[1]
    fromLon = from?.coordinates[0]

    toLat = to?.coordinates[1]
    toLon = to?.coordinates[0]
  }

  return useLazyQuery(GET_ITINERARY, {
    variables: { fromLat, fromLon, toLat, toLon }
  })
}