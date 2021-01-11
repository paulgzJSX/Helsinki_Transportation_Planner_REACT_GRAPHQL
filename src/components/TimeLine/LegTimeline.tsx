import { useContext } from 'react'
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@material-ui/lab'
import { Typography, Box } from '@material-ui/core/';
import { convertTime } from '../../helpers/helpers'
import { RouteContext } from '../../context/RouteContext'
import { useTimelineStyles } from '../../styleHooks/useStyle'


export default function LegTimeline({ toggleDrawer }: any) {
    const classes = useTimelineStyles();
    const { selectedLeg } = useContext(RouteContext)

    const depStop = selectedLeg?.from?.stop?.name
    const arrStop = selectedLeg?.to?.name

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

    const stopTime = (stop: string) => {
        return stop === depStop
            ? convertTime(selectedLeg.startTime)
            : stop === arrStop ? convertTime(selectedLeg.endTime) : null
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
                    {selectedLeg?.mode} {selectedLeg?.trip?.routeShortName}
                </Typography>
                {selectedLeg?.trip?.stops.map((stop: any, idx: number) => (
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
