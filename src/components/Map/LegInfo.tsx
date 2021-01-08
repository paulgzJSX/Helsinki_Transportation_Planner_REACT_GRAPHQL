import { Alert, AlertTitle } from '@material-ui/lab'
import { convertTime } from '../../helpers/helpers'
import { defineIcon } from '../Itineraries/Leg/LegElements'


export default function LegInfo({ selectedLeg }: any) {

    const alertColor = selectedLeg.mode === 'BUS'
        ? '#007AC9'
        : selectedLeg.mode === 'TRAM'
            ? '#00985F'
            : selectedLeg.mode === 'RAIL'
                ? '#8C4799'
                : selectedLeg.mode === 'SUBWAY'
                    ? '#FF6319'
                    : selectedLeg.mode === 'WAIT'
                        ? '#fff'
                        : 'lightgrey';

    return (
        <div className='leg-info'>
            <Alert style={{ backgroundColor: alertColor }} icon={defineIcon(selectedLeg.mode)} variant="filled" severity="info">
                <AlertTitle>{selectedLeg.mode} {selectedLeg.trip.routeShortName} - Scheduled {convertTime(new Date(selectedLeg.startTime))} - {convertTime(new Date(selectedLeg.endTime))}</AlertTitle>
                Board at <strong>{selectedLeg.from.stop.name.toUpperCase()}</strong>, get off at <strong>{selectedLeg.to.name.toUpperCase()}</strong>
            </Alert>
        </div>
    );
}