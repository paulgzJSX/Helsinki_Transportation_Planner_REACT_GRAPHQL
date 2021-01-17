import { useContext } from 'react'
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@material-ui/lab'
import { Typography, Box } from '@material-ui/core/';
import { convertTime } from '../../helpers/helpers'
import { RouteContext } from '../../context/RouteContext'
import { useTimelineStyles } from '../TimeLine/useTimelineStyles'

let tripStartIdx: number;

const defineStopColor = (depStop: string, currStop: string, arrStop: string, idx: number) => {
    if (currStop === depStop) {
        tripStartIdx = idx
        return true
    } else if (idx >= tripStartIdx && currStop !== arrStop) {
        return true
    } else if (currStop === arrStop) {
        tripStartIdx = undefined
        return true
    }
    if (!tripStartIdx) {
        return false
    }
}

export default function LegTimeline({ toggleDrawer }: any) {
    const { state: { selectedLeg: { from: { stop: { name: depStop } }, to: { name: arrStop }, startTime, endTime, mode, trip } } } = useContext(RouteContext)
    const classes = useTimelineStyles()

    const stopTime = (stop: string) => {
        return stop === depStop
            ? convertTime(new Date(startTime))
            : stop === arrStop ? convertTime(new Date(endTime)) : null
    }

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
                {trip?.stops.map((stop: any, idx: number) => (
                    <TimelineItem
                        key={stop.id}
                        classes={{ root: classes.root, missingOppositeContent: classes.missingOppositeContent }}
                    >
                        <TimelineSeparator>
                            <TimelineDot
                                className={
                                    defineStopColor(depStop, stop.name, arrStop, idx)
                                        ? classes.redDot
                                        : classes.greyDot
                                } />
                            <TimelineConnector className={classes.connector} />
                        </TimelineSeparator>
                        <TimelineContent>
                            {stop.name} <Box component='span' display='inline'>{stopTime(stop.name)}</Box>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        </div>
    )
}
