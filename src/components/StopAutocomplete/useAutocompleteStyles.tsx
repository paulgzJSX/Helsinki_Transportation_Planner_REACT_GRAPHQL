import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

export const useStopsAutocompleteStyles = makeStyles((theme: Theme) =>
    createStyles({
        input: {
            fontSize: 13
        },
        noOptions: {
            fontSize: 13
        },
        option: {
            fontSize: 13
        },
        tag: {
            fontSize: 13
        }
    })
)