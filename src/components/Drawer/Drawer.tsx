import { useContext, useCallback } from 'react'
import LegTimeline from '../TimeLine/LegTimeline'
import { Drawer } from '@material-ui/core/'
import { RouteContext } from '../../context/RouteContext'

export default function LegDrawer() {
    const { dispatch, state } = useContext(RouteContext)

    const toggleDrawer = useCallback((open: boolean) => (e: KeyboardEvent | MouseEvent) => {
        if (e.type === 'keydown' &&
            ((e as KeyboardEvent).key === 'Tab' ||
                (e as KeyboardEvent).key === 'Shift')
        ) { return }
        
        dispatch({ type: 'DISPLAY_DRAWER', payload: open })
    }, [])

    return (
        <Drawer
            anchor={'right'}
            open={state.displayDrawer}
            onClose={toggleDrawer(false)}
            transitionDuration={400}
        >
            <LegTimeline toggleDrawer={toggleDrawer} />
        </Drawer>
    )
}