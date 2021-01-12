import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useSchedulePageStyles = makeStyles((_: Theme) =>
    createStyles({
        button: {
            marginTop: '1rem'
        },
        mapWrapper: {
            display: 'flex',
            alignItems: 'center',
            justifyContext: 'space-between',
            borderRadius: '10px',
            overflow: 'hidden',
            height: '80vh',
            width: '90vw',
            margin: '0 auto'
        },
        left: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '35rem',
            height: '100%',
            padding: '2rem 2.5rem .5rem',
            backgroundColor: '#fff',
            borderRadius: '10px',
            boxShadow: '4px 4px 8px 0px rgba(34, 60, 80, 0.2)',
            position: 'relative'
        },
        right: {
            width: '50rem',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            backgroundColor:'#fff',
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