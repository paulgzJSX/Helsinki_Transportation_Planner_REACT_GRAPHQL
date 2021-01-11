import { useContext } from 'react'
import LegTimeline from '../TimeLine/LegTimeline'
import { Drawer } from '@material-ui/core/'
import { RouteContext } from '../../context/RouteContext'


export default function LegDrawer() {
    const { displayDrawer, setDisplayDrawer } = useContext(RouteContext)

    const toggleDrawer = (open: boolean) => (e: React.KeyboardEvent | React.MouseEvent) => {
        if (e.type === 'keydown' &&
            ((e as React.KeyboardEvent).key === 'Tab' ||
                (e as React.KeyboardEvent).key === 'Shift')
        ) { return }
        
        setDisplayDrawer(open);
    }

    return (
        <Drawer
            anchor={'right'}
            open={displayDrawer}
            onClose={toggleDrawer(false)}
            transitionDuration={400}
        >
            <LegTimeline toggleDrawer={toggleDrawer} />
        </Drawer>
    )
}