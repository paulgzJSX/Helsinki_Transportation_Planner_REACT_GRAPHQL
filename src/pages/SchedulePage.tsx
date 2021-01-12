import { useContext } from 'react'
import { InputAutocomplete, Tab, Drawer, Itinerary } from '../components'
import Button from '@material-ui/core/Button';
import { useItinerary } from '../hooks/useItinerary'
import { RouteContext } from '../context/RouteContext'
import { ItinerariesWrapper } from '../components/Itineraries/Itinerary/ItineraryElements'
import { useSchedulePageStyles } from './useSchedulePageStyles'
import { IItinerary } from '../interfaces/Interfaces'


export default function SchedulePage() {
    const { formData } = useContext(RouteContext)
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
                        onClick={() => formData?.origin && formData?.destination && fetchItinerary()}
                    >
                        Search routes
                    </Button>
                    {loading
                        ? 'Loading...'
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

