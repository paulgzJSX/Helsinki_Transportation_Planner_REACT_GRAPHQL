import { useState } from 'react'
import { Paper, Tabs, Tab } from '@material-ui/core'
import { Map, Stops, Routes, TabPanel } from '../../components'
import { makeStyles } from '@material-ui/core/styles'

const tabs = [<Map />, <Stops />, <Routes />]
const tabTitles = ['Map', 'Schedule', 'Route']

const useTabStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
})

export default function TabHeader() {
    const [value, setValue] = useState(0)
    const classes = useTabStyles()

    return (
        <>
            <Paper className={classes.root}>
                <Tabs
                    value={value}
                    onChange={(_, newValue: number) => setValue(newValue)}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    {tabTitles.map((tabTitle: string) =>
                        <Tab key={tabTitle} label={tabTitle} />)}
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