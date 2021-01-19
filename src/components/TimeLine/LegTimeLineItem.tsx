import { useContext } from 'react'
import { TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@material-ui/lab'
import { Box, makeStyles, createStyles, Theme } from '@material-ui/core/';
import { convertTime, isRouteStop } from '../../helpers/helpers'
import { RouteContext } from '../../App'

const useStyles = makeStyles((_: Theme) =>
    createStyles({
        root: {
            alignItems: 'flex-start',
            minHeight: '50px'
        },
        missingOppositeContent: {
            '&:before': {
                flex: 0
            },
        }
    })
)

export default function LegTimeline({ stop, idx }: any) {
    const { state: { selectedLeg: { from: { stop: { name: depStop } }, to: { name: arrStop }, startTime, endTime } } } = useContext(RouteContext)
    const classes = useStyles()

    const stopTime = (stop: string) => {
        return stop === depStop
            ? convertTime(new Date(startTime))
            : stop === arrStop ? convertTime(new Date(endTime)) : null
    }

    return (
        <TimelineItem
            key={stop.id}
            classes={{ root: classes.root, missingOppositeContent: classes.missingOppositeContent }}
        >
            <TimelineSeparator>
                <TimelineDot
                    style={
                        isRouteStop(depStop, stop.name, arrStop, idx)
                            ? { backgroundColor: 'red' }
                            : { backgroundColor: 'grey' }
                    } />
                <TimelineConnector style={{ height: '1.5rem' }} />
            </TimelineSeparator>
            <TimelineContent>
                {stop.name} <Box component='span' display='inline'>{stopTime(stop.name)}</Box>
            </TimelineContent>
        </TimelineItem>
    )
}