import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

export const useRouteAutocompleteStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: 500
        },
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
        },
        formControl: {
            margin: theme.spacing(1),
            fontSize: 13
        },
        select: {
            width: 150,
            fontSize: 13
        },
    })
)