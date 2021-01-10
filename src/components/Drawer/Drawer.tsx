import React, { useContext } from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
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
            paddingTop: '1rem'
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
    const { displayDrawer, setDisplayDrawer } = useContext(RouteContext)

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
                    h6. Heading
                </Typography>
                <TimelineItem classes={{ root: classes.root, missingOppositeContent: classes.missingOppositeContent }}>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector className={classes.connector} />
                    </TimelineSeparator>
                    <TimelineContent>Eat</TimelineContent>
                </TimelineItem>
                <TimelineItem classes={{ root: classes.root, missingOppositeContent: classes.missingOppositeContent }}>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector className={classes.connector} />
                    </TimelineSeparator>
                    <TimelineContent>Code</TimelineContent>
                </TimelineItem>
                <TimelineItem classes={{ root: classes.root, missingOppositeContent: classes.missingOppositeContent }}>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector className={classes.connector} />
                    </TimelineSeparator>
                    <TimelineContent>Sleep</TimelineContent>
                </TimelineItem>
            </Timeline>
            {/* <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List> */}
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