import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useCurrentCoordsStyles = makeStyles((_: Theme) => 
    createStyles({
        confirmationButton: {
            position: 'absolute',
            bottom: '4rem',
            zIndex: 400,
            left: '50%',
            transform: 'translateX(-50%)'
        }
    })
)