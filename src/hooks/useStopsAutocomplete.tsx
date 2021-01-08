import { gql, useQuery } from '@apollo/client';

const GET_STOPS = gql`
  query GetStops ($name: String!) {
    stops(name: $name) {
          gtfsId
          name
          code
          lat
          lon
          desc
          zoneId
        }
      }
`;

export const useStopsAutocomplete = (name: string) => {
    console.log(name);
    
    return useQuery(GET_STOPS, {
        variables: { name }
    })
}