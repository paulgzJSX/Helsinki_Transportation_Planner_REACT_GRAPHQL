import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useAutocompleteStyles = makeStyles((_: Theme) => 
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