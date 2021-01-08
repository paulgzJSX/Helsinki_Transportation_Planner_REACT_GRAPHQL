import { gql, useQuery } from '@apollo/client';

const GET_STOP_ROUTES = gql`
  query GetStopRoutes ($id: String!) {
    stop(id: $id) {
      gtfsId
      name
      lat
      lon
      patterns {
        code
        directionId
        headsign
        route {
          gtfsId
          shortName
          longName
          mode
        }
      }
    }
`;

export const useStopsAutocomplete = (id: string) => {
  return useQuery(GET_STOP_ROUTES, {
    variables: { id }
  })
}