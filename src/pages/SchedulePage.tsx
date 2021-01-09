import { useContext } from 'react';
import InputAutocomplete from '../components/Autocomplete/Autocomplete'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Itinerary } from '../components'
import { useItinerary } from '../hooks/useItinerary'
import { ItinerariesWrapper } from '../components/Hero/HeroElements'
import { RouteContext } from '../context/RouteContext';
import Tab from '../components/Tab/Tab'
import Drawer from '../components/Drawer/Drawer'

const useButtonStyle = makeStyles({
    root: { marginTop: '1rem' }
})

export default function SchedulePage() {
    const classes = useButtonStyle();
    const { formData, displayDrawer } = useContext(RouteContext)
    const [fetchItinerary, { loading, data }] = useItinerary()

    return (
        <div>
            <div className="map-wrapper">
                <div className="left">
                    <InputAutocomplete id='origin' />
                    <InputAutocomplete id='destination' />
                    <Button
                        variant="contained"
                        color="primary"
                        disableElevation
                        classes={{ root: classes.root }}
                        onClick={() => formData?.origin && formData?.destination && fetchItinerary()}
                    >
                        Search routes
                    </Button>
                    {loading
                        ? 'Loading...'
                        : data &&
                        <ItinerariesWrapper>
                            {data?.plan.itineraries.map((itinerary: any, idx: number) =>
                                <Itinerary key={idx} itinerary={itinerary} />)}
                        </ItinerariesWrapper>
                    }
                </div>
                <div className="right">
                    <div className="upper-right">
                        <Tab />
                    </div>
                    {/* <Map /> */}
                </div>
                {displayDrawer && <Drawer />}
            </div>
        </div>
    )
}

