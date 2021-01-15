import { useState, useContext } from 'react'
import { SpeedDial, SpeedDialIcon, SpeedDialAction } from '@material-ui/lab'
import RoomIcon from '@material-ui/icons/Room';
import NotListedLocationIcon from '@material-ui/icons/NotListedLocation';
import { RouteContext } from '../../../context/RouteContext';
import { usePointSelectionStyles } from './usePointSelectionStyles'

const actions = [
    { icon: <NotListedLocationIcon />, name: 'Select destination', id: 'destination' },
    { icon: <RoomIcon />, name: 'Select origin', id: 'origin' },
]

export default function PointSelection() {
    const [open, setOpen] = useState<boolean>(false)
    const { dispatch } = useContext(RouteContext)
    const classes = usePointSelectionStyles();

    const handleClick = (_: any, id: string) => {
        setOpen(false)
        dispatch({ type: 'ALLOW_COORDS', payload: { id, state: true} })
        dispatch({ type: 'SET_SELECTED_COORDS', payload: null })
    }

    return (
        <div className={classes.pointSelection}>
            <div className={classes.root}>
                <div className={classes.exampleWrapper}>
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
