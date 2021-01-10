import { useState } from 'react'
import { Paper, Tabs, Tab } from '@material-ui/core'
import { Map, Stops, TabPanel } from '../../components'
import { useTabStyles } from '../../styleHooks/useStyle'
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';


export default function CenteredTabs() {
    const [value, setValue] = useState(0)
    const classes = useTabStyles()

    return (
        <>
            <Paper className={classes.root}>
                <Tabs
                    value={value}
                    onChange={(_, newValue) => setValue(newValue)}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab label="Map" />
                    <Tab label="Schedule" />
                    <Tab label="Route" />
                </Tabs>
            </Paper>
            <TabPanel value={value} index={0}>
                <Map />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Stops />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Timeline>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>Eat</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>Code</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                        </TimelineSeparator>
                        <TimelineContent>Sleep</TimelineContent>
                    </TimelineItem>
                </Timeline>
            </TabPanel>
        </>
    )
}