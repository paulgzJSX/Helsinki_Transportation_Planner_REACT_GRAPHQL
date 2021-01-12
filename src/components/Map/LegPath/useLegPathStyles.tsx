import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useLegPathsStyles = makeStyles((_: Theme) => 
    createStyles({
        legInfo: {
            position: 'absolute',
            bottom: '2.4rem',
            zIndex: 3000,
            opacity: .8,
            cursor: 'pointer'
        }
    })
)