import { useContext, useCallback } from 'react'
import { LegTimeline } from '../../components'
import { Drawer } from '@material-ui/core/'
import { RouteContext } from '../../App'

export default function LegDrawer() {
    const { dispatch, state: { displayDrawer } } = useContext(RouteContext)

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
            open={displayDrawer}
            onClose={toggleDrawer(false)}
            transitionDuration={400}
        >
            <LegTimeline toggleDrawer={toggleDrawer} />
        </Drawer>
    )
}