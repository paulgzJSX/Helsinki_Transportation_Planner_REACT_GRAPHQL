import { gql, useQuery } from '@apollo/client'

const GET_STOPS_BY_PATTERN = gql`
  query GetRoutes ($id: String!) {
    pattern(id: $id) {
        name
        alerts {
          alertHeaderText
          alertHeaderTextTranslations {
            text
          }
          alertDescriptionText
        }
        stops {
          name
          stopTimesForPattern(id: $id) {
            scheduledDeparture
            stopSequence
          }
        }
      }
  }
`

export const useStopsByPattern = (id: string) => {
    return useQuery(GET_STOPS_BY_PATTERN, {
        variables: { id }
    })
}