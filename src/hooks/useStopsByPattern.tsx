import { gql, useLazyQuery } from '@apollo/client'

const GET_STOPS_BY_PATTERN = gql`
  query GetStopsByPattern ($id: String!) {
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
    return useLazyQuery(GET_STOPS_BY_PATTERN, {
        variables: { id }
    })
}