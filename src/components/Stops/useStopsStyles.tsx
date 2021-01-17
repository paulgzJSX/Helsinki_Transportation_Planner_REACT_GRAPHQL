import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStopStyles = makeStyles((_: Theme) =>
    createStyles({
        root: {
            padding: '.5rem 1rem',
            backgroundColor: '#dbdbdf'
        },
        buttonMargin: {
            marginRight: '.5rem'
        },
        table: {
            minWidth: 650
        },
        container: {
            overflowY: 'scroll',
            maxHeight: 350,
            margin: '0 auto'
        },
        routesContainer: {
            maxHeight: 300,
            width: 660,
            margin: '0 auto'
        },
        row: {
            cursor: 'pointer'
        }
    }),
)