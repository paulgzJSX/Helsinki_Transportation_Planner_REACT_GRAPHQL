import { useState } from 'react'
import { SpeedDial, SpeedDialIcon, SpeedDialAction } from '@material-ui/lab'
import RoomIcon from '@material-ui/icons/Room';
import NotListedLocationIcon from '@material-ui/icons/NotListedLocation';
import { useSpeedDialStyles } from '../../styleHooks/useStyle'


const actions = [
    { icon: <NotListedLocationIcon />, name: 'Select destination', id: 'destination' },
    { icon: <RoomIcon />, name: 'Select origin', id: 'origin' },
]

export default function PointSelection({ setAllowCoords }: any) {
    const [open, setOpen] = useState(false)
    const classes = useSpeedDialStyles();

    const handleClick = (_: any, id: string): void => {
        setOpen(false)
        setAllowCoords({ id, state: true })
    }

    return (
        <div className='point-selection'>
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
                                onClick={(e) => handleClick(e, action.id)}
                            />
                        ))}
                    </SpeedDial>
                </div>
            </div>
        </div>
    )
}
