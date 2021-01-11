import { useContext } from 'react'
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@material-ui/lab'
import { Typography } from '@material-ui/core/';
import { RouteContext } from '../../context/RouteContext'
import { useTimelineStyles } from '../../styleHooks/useStyle'


export default function LegTimeline({ toggleDrawer }: any) {
    const classes = useTimelineStyles();
    const { selectedLeg } = useContext(RouteContext)

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
                {selectedLeg?.trip?.stops.map((stop: any) => (
                    <TimelineItem
                        key={stop.id}
                        classes={{ root: classes.root, missingOppositeContent: classes.missingOppositeContent }}
                    >
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector className={classes.connector} />
                        </TimelineSeparator>
                        <TimelineContent>{stop.name}</TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        </div>
    )
}
