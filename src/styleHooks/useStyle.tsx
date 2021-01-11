import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useAutocompleteStyle = makeStyles({
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

export const useTabStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
})

export const useSpeedDialStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            transform: 'translateZ(0px)',
            flexGrow: 1,
        },
        exampleWrapper: {
            position: 'relative',
            height: 250,
        },
        speedDial: {
            position: 'absolute',
            '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
                top: theme.spacing(2),
                right: theme.spacing(2),
            },
            '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
                top: theme.spacing(2),
                left: theme.spacing(2),
            },
        },
    }),
)

export const useTimelineStyles = makeStyles((_: Theme) =>
    createStyles({
        list: {
            width: 300,
            paddingTop: '1rem',
            overflowY: 'scroll'
        },
        missingOppositeContent: {
            '&:before': {
                flex: 0
            },
        },
        root: {
            alignItems: 'flex-start',
            minHeight: '50px'
        },
        connector: {
            height: '1.5rem'
        }
    }));