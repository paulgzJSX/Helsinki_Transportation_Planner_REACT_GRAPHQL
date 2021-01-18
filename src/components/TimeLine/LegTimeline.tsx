import { useContext } from 'react'
import LegTimeLineItem from './LegTimeLineItem'
import { Typography, makeStyles, createStyles, Theme } from '@material-ui/core/'
import { Timeline } from '@material-ui/lab'
import { RouteContext } from '../../context/RouteContext'

const useStyles = makeStyles((_: Theme) =>
    createStyles({
        list: {
            width: 300,
            paddingTop: '1rem',
            overflowY: 'scroll'
        }
    })
)

export default function LegTimeline({ toggleDrawer }: any) {
    const { state: { selectedLeg: { mode, trip } } } = useContext(RouteContext)
    const classes = useStyles()

    return (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <Timeline align='left'>
                <Typography variant="h6" gutterBottom>
                    {mode} {trip?.routeShortName}
                </Typography>
                {trip?.stops.map((stop: any, idx: number) =>
                    <LegTimeLineItem key={stop.id} stop={stop} idx={idx} />)}
            </Timeline>
        </div>
    )
}
