import { useContext } from 'react'
import { RouteContext } from '../../../context/RouteContext';
import { LegWrapper, LegStripe, defineIcon } from './LegElements'
var polyline = require('@mapbox/polyline');

const Leg = ({ width, mode, routeName, leg }) => {
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
            : <LegWrapper width={width} onClick={handleClick}>
                <LegStripe mode={mode}>
                    {defineIcon(mode)}
                    <span>{width > 5 && routeName} {mode === 'WAIT' && 'min'}</span>
                </LegStripe>
            </LegWrapper>}
        </>
    )
}

export default Leg
