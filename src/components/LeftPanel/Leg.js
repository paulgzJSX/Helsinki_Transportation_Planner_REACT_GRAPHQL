import { useContext } from 'react'
import { RouteContext } from '../../App'
import { LegWrapper, LegStripe, defineIcon } from '../../styles/LegElements'
let polyline = require('@mapbox/polyline');

export default function Leg({ width, mode, routeName, leg }) {
    const { dispatch } = useContext(RouteContext)

    const handleClick = () => {
        if (leg) {
            dispatch({
                type: 'SELECT_LEG',
                payload: {
                    ...leg,
                    legGeometry: {
                        points: polyline.decode(leg.legGeometry.points)
                    }
                }
            })
        }
    }

    return (
        <>
            {(mode === 'WALK' || mode === 'WAIT') && width < 5
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
