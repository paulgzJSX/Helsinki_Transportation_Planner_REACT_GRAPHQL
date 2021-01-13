import { useState } from 'react'
import { Paper, Tabs, Tab } from '@material-ui/core'
import { Map, Stops, TabPanel } from '../../components'
import { makeStyles } from '@material-ui/core/styles'

const tabs = [<Map />, <Stops />, 'Tab Three']

const useTabStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
})

export default function CenteredTabs() {
    const [value, setValue] = useState<number>(0)
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
            {tabs.map((tab, index) =>
                <TabPanel
                    key={index}
                    children={tab}
                    value={value}
                    index={index}
                />)}
        </>
    )
}