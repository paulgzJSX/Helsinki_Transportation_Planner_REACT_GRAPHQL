import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const usePointSelectionStyles = makeStyles((theme: Theme) =>
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