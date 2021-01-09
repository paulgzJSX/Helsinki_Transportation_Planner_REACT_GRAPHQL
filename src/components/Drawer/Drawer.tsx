import React, { useContext } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { RouteContext } from '../../context/RouteContext'

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});


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
            className={clsx(classes.list)}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
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
            </List>
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