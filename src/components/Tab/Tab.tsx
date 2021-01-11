import { useState } from 'react'
import { Paper, Tabs, Tab } from '@material-ui/core'
import { Map, Stops, TabPanel } from '../../components'
import { useTabStyles } from '../../styleHooks/useStyle'


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
               Tab Three
            </TabPanel>
        </>
    )
}