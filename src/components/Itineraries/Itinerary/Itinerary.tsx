import Leg from '../Leg/Leg'
import { convertDuration, convertTime, getMinutes, defineWidth } from '../../../helpers/helpers'
import { DepArrTime, DepartureRow, Duration, ItineraryWrapper, LegsRow, TimeRow } from './ItineraryElements'
import { IItinerary, ILeg } from '../../../interfaces/Interfaces'

export default function Itinerary({ itinerary: { legs, duration } }: { itinerary: IItinerary }) {
    return (
        <ItineraryWrapper>
            <TimeRow>
                <DepArrTime>
                    <span>{convertTime(new Date(legs[0].startTime))}</span>
                    <span> - </span>
                    <span>{convertTime(new Date(legs[legs.length - 1].endTime))}</span>
                </DepArrTime>
                <Duration>
                    <span>{convertDuration(duration) + ' min'}</span>
                </Duration>
            </TimeRow>

            <LegsRow>
                {legs.map((leg: ILeg, idx: number) =>
                    idx !== 0 && leg.startTime !== legs[idx - 1].endTime
                        ? <>
                            <Leg
                                width={defineWidth(legs[idx - 1].endTime, leg.startTime, duration)}
                                mode='WAIT'
                                routeName={getMinutes(legs[idx - 1].endTime, leg.startTime)}
                                leg={leg}
                            />
                            <Leg
                                width={defineWidth(leg.startTime, leg.endTime, duration)}
                                mode={leg.mode}
                                routeName={leg.mode === 'WALK' ? getMinutes(leg.startTime, leg.endTime) : leg.trip.routeShortName}
                                leg={leg}
                            />
                        </>
                        : <Leg
                            width={defineWidth(leg.startTime, leg.endTime, duration)}
                            mode={leg.mode}
                            routeName={leg.mode === 'WALK' ? getMinutes(leg.startTime, leg.endTime) : leg.trip.routeShortName}
                            leg={leg}
                        />
                )}
            </LegsRow>
            <DepartureRow>
                <p>Leaves at 16:25 from Lorem</p>
            </DepartureRow>
        </ItineraryWrapper>
    )
}

