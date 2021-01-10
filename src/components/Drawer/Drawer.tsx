import React, { useContext } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { RouteContext } from '../../context/RouteContext'
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        list: {
            width: 300,
            paddingTop: '1rem',
            overflowY: 'scroll'
        },
        missingOppositeContent: {
            '&:before': {
                flex: 0
            },
        },
        root: {
            alignItems: 'flex-start',
            minHeight: '50px'
        },
        connector: {
            height: '1.5rem'
        }
    }));


export default function TemporaryDrawer() {
    const classes = useStyles();
    const { displayDrawer, setDisplayDrawer, selectedLeg } = useContext(RouteContext)

    const toggleDrawer = (open: boolean) => (e: React.KeyboardEvent | React.MouseEvent) => {
        if (
            e.type === 'keydown' &&
            ((e as React.KeyboardEvent).key === 'Tab' ||
                (e as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        setDisplayDrawer(open);
    };

    const list = () => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <Timeline align='left'>
                <Typography variant="h6" gutterBottom>
                    {selectedLeg?.trip?.routeShortName}
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
    );

    return (
        <Drawer
            anchor={'right'}
            open={displayDrawer}
            onClose={toggleDrawer(false)}
            transitionDuration={400}
        >
            {list()}
        </Drawer>
    );
}