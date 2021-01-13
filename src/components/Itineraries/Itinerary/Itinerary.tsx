import Leg from '../Leg/Leg'
import { convertDuration, convertTime, getMinutes, defineWidth } from '../../../helpers/helpers'
import { DepArrTime, DepartureRow, Duration, ItineraryWrapper, LegsRow, TimeRow } from './ItineraryElements'
import { IItinerary, ILeg } from '../../../interfaces/Interfaces'

type PropTypes = {
    itinerary: IItinerary
}

const Itinerary = ({ itinerary }: PropTypes) => {  
    return (
        <ItineraryWrapper>
            <TimeRow>
                <DepArrTime>
                    <span>{convertTime(new Date(itinerary.legs[0].startTime))}</span>
                    <span> - </span>
                    <span>{convertTime(new Date(itinerary.legs[itinerary.legs.length - 1].endTime))}</span>
                </DepArrTime>
                <Duration>
                    <span>{convertDuration(itinerary.duration) + ' min'}</span>
                </Duration>
            </TimeRow>

            <LegsRow>
                {itinerary.legs.map((leg: ILeg, idx: number) =>
                    idx !== 0 && leg.startTime !== itinerary.legs[idx - 1].endTime
                        ? <>
                            <Leg
                                width={defineWidth(itinerary.legs[idx - 1].endTime, leg.startTime, itinerary.duration)}
                                mode='WAIT'
                                routeName={getMinutes(itinerary.legs[idx - 1].endTime, leg.startTime)}
                                leg={leg}
                            />
                            <Leg
                                width={defineWidth(leg.startTime, leg.endTime, itinerary.duration)}
                                mode={leg.mode}
                                routeName={leg.mode === 'WALK' ? getMinutes(leg.startTime, leg.endTime) : leg.trip.routeShortName}
                                leg={leg}
                            />
                        </>
                        : <Leg
                            width={defineWidth(leg.startTime, leg.endTime, itinerary.duration)}
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

export default Itinerary

