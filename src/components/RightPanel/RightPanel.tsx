import { useState } from 'react'
import { TabPanel, Map, StopSchedule, RouteSchedule } from '../../components'
import { Paper, Tabs, Tab, makeStyles, createStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((_: Theme) =>
    createStyles({
        right: {
            width: '50rem',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            backgroundColor: '#fff',
            borderRadius: '10px',
            boxShadow: '4px 4px 8px 0px rgba(34, 60, 80, 0.2)'
        },
        upperRight: {
            height: '100%',
            boxShadow: '4px 4px 8px 0px rgba(34, 60, 80, 0.2)',
            overflow: 'hidden'
        }
    })
)

export default function RightPanel() {
    const [value, setValue] = useState(0)
    const classes = useStyles()

    return (
        <div className={classes.right}>
            <div className={classes.upperRight}>
                <Paper style={{ flexGrow: 1 }}>
                    <Tabs
                        value={value}
                        onChange={(_, newValue: number) => setValue(newValue)}
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                    >
                        {['Map', 'Schedule', 'Route'].map((tabTitle: string) =>
                            <Tab key={tabTitle} label={tabTitle} />)}
                    </Tabs>
                </Paper>
                {[<Map />, <StopSchedule />, <RouteSchedule />].map((tab, index) =>
                    <TabPanel
                        key={index}
                        children={tab}
                        value={value}
                        index={index}
                    />)}
            </div>
        </div>
    )
}