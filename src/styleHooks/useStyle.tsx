import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useSpeedDialStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            transform: 'translateZ(0px)',
            flexGrow: 1,
        },
        pointSelection: {
            position: 'absolute',
            right: '1rem',
            top: '-.5rem',
            zIndex: 400
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

export const useCurrentCoordsStyles = makeStyles((_: Theme) => 
    createStyles({
        confirmationButton: {
            position: 'absolute',
            bottom: '4rem',
            zIndex: 400,
            left: '50%',
            transform: 'translateX(-50%)'
        }
    })
)

export const useLegPathsStyles = makeStyles((_: Theme) => 
    createStyles({
        legInfo: {
            position: 'absolute',
            bottom: '2.4rem',
            zIndex: 3000,
            opacity: .8,
            cursor: 'pointer'
        }
    })
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
        },
        redDot: {
            backgroundColor: 'red'
        },
        greyDot: {
            backgroundColor: 'grey'
        },
        textColor: {
            color: 'red'
        }
    }));