import { useContext } from 'react'
import { LocationAutocomplete, Itinerary } from '../../components'
import { Button, CircularProgress, makeStyles, createStyles, Theme } from '@material-ui/core'
import { useItinerary } from '../../hooks/useItinerary'
import { RouteContext } from '../../App'
import { ItinerariesWrapper } from '../../styles/ItineraryElements'
import { IItinerary } from '../../interfaces/Interfaces'

const useStyles = makeStyles((_: Theme) =>
    createStyles({
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
        }
    })
)

export default function SchedulePage() {
    const { state: { origin, destination } } = useContext(RouteContext)
    const [fetchItinerary, { loading, data }] = useItinerary()
    const classes = useStyles();

    return (
        <div className={classes.left}>
            <LocationAutocomplete id='origin' />
            <LocationAutocomplete id='destination' />
            <Button
                variant="contained"
                color="primary"
                disableElevation
                style={{ marginTop: '1rem' }}
                onClick={() => origin && destination && fetchItinerary()}
            >
                Search routes
            </Button>
            {loading
                ? <CircularProgress style={{ marginTop: '7rem' }} />
                : data &&
                <ItinerariesWrapper>
                    {data?.plan.itineraries.map((itinerary: IItinerary, idx: number) =>
                        <Itinerary key={idx} itinerary={itinerary} />)}
                </ItinerariesWrapper>
            }
        </div>
    )
}