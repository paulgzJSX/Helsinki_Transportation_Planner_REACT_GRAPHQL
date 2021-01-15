import { useContext } from 'react'
import { InputAutocomplete, Tab, Drawer, Itinerary } from '../components'
import { Button, CircularProgress } from '@material-ui/core';
import { useItinerary } from '../hooks/useItinerary'
import { RouteContext } from '../context/RouteContext'
import { ItinerariesWrapper } from '../components/Itineraries/Itinerary/ItineraryElements'
import { useSchedulePageStyles } from './useSchedulePageStyles'
import { IItinerary } from '../interfaces/Interfaces'


export default function SchedulePage() {
    const { state: { origin, destination } } = useContext(RouteContext)
    const [fetchItinerary, { loading, data }] = useItinerary()
    const classes = useSchedulePageStyles();

    return (
        <div>
            <div className={classes.mapWrapper}>
                <div className={classes.left}>
                    <InputAutocomplete id='origin' />
                    <InputAutocomplete id='destination' />
                    <Button
                        variant="contained"
                        color="primary"
                        disableElevation
                        className={classes.button}
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
                <div className={classes.right}>
                    <div className={classes.upperRight}>
                        <Tab />
                    </div>
                </div>
                <Drawer />
            </div>
        </div>
    )
}

