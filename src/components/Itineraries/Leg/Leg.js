import { useContext, useState } from 'react'
import { RouteContext } from '../../../context/RouteContext';
import { convertDuration, convertTime, getMinutes, defineWidth } from '../../../helpers/helpers'
import { LegWrapper, LegStripe, Departure, defineIcon } from './LegElements'
var polyline = require('@mapbox/polyline');

const Leg = ({ width, mode, routeName, leg}) => {
    const [displayInfo, setDisplayInfo] = useState(false)

    const { setSelectedLeg } = useContext(RouteContext)

    const handleClick = () => {
        if (leg) {
            setSelectedLeg({
                ...leg,
                legGeometry: {
                    points: polyline.decode(leg.legGeometry.points)
                }
            })
        }
    }

    return (
        <> {mode === 'WALK' || mode === 'WAIT' && width < 5
            ? null
            : <LegWrapper width={width} onClick={handleClick} onMouseEnter={() => setDisplayInfo(true)} onMouseLeave={() => setDisplayInfo(false)}>
                <LegStripe mode={mode}>
                    {defineIcon(mode)}
                    <span>{width > 5 && routeName} {mode === 'WAIT' && 'min'}</span>
                </LegStripe>
                {/* <Departure>
                    {mode !== 'WAIT' && mode !== 'WALK' && <p><span>{convertTime(leg.startTime)}</span> {leg.from.name}</p>}
                </Departure> */}
                {/* {displayInfo && <Info leg={leg} />} */}
            </LegWrapper>}
        </>
    )
}

export default Leg
