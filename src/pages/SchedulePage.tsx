import { Drawer, LeftPanel, RightPanel } from '../components'
import { makeStyles, createStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((_: Theme) =>
    createStyles({
        wrapper: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderRadius: '10px',
            overflow: 'hidden',
            height: '80vh',
            width: '90vw',
            margin: '0 auto'
        }
    })
)

export default function SchedulePage() {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <LeftPanel />
            <RightPanel />
            <Drawer />
        </div>
    )
}

