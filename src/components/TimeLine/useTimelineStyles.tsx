import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useTimelineStyles = makeStyles((_: Theme) =>
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
        },
        redDot: {
            backgroundColor: 'red'
        },
        greyDot: {
            backgroundColor: 'grey'
        },
        textColor: {
            color: 'red'
        }
    })
)