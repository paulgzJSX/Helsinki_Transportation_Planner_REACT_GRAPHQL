import { gql, useLazyQuery } from '@apollo/client';
import { useContext } from 'react';
import { RouteContext } from '../context/RouteContext'

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
            routeShortName
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
`;

export const useItinerary = () => {
  const { formData } = useContext(RouteContext)

    const from = formData?.origin
    const to = formData?.destination

    const fromLat = from?.coordinates[1]
    const fromLon = from?.coordinates[0]

    const toLat = to?.coordinates[1]
    const toLon = to?.coordinates[0]

  return useLazyQuery(GET_ITINERARY, {
    variables: { fromLat, fromLon, toLat, toLon }
  })
}