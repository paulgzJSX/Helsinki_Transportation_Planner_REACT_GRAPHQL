import { useState, useContext } from 'react'
import { SpeedDial, SpeedDialIcon, SpeedDialAction } from '@material-ui/lab'
import RoomIcon from '@material-ui/icons/Room';
import NotListedLocationIcon from '@material-ui/icons/NotListedLocation'
import { RouteContext } from '../../../App'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const actions = [
    { icon: <NotListedLocationIcon />, name: 'Select destination', id: 'destination' },
    { icon: <RoomIcon />, name: 'Select origin', id: 'origin' },
]

const useStyles = makeStyles((theme: Theme) =>
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
        speedDialWrapper: {
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

export default function LocationSelectorControls() {
    const [open, setOpen] = useState<boolean>(false)
    const { dispatch } = useContext(RouteContext)
    const classes = useStyles();

    const handleClick = (_: any, id: string) => {
        setOpen(false)
        dispatch({ type: 'ALLOW_COORDS', payload: { id, state: true } })
        dispatch({ type: 'SET_SELECTED_COORDS', payload: null })
    }

    return (
        <div className={classes.pointSelection}>
            <div className={classes.root}>
                <div className={classes.speedDialWrapper}>
                    <SpeedDial
                        ariaLabel="Coordinate Selection"
                        className={classes.speedDial}
                        icon={<SpeedDialIcon />}
                        onClose={() => setOpen(false)}
                        onOpen={() => setOpen(true)}
                        open={open}
                        direction='left'
                        FabProps={{ size: 'small' }}
                    >
                        {actions.map((action) => (
                            <SpeedDialAction
                                key={action.name}
                                icon={action.icon}
                                tooltipTitle={action.name}
                                tooltipPlacement='bottom-start'
                                onClick={e => handleClick(e, action.id)}
                            />
                        ))}
                    </SpeedDial>
                </div>
            </div>
        </div>
    )
}
