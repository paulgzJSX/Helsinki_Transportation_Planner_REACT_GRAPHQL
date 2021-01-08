import { convertDuration, convertTime, getMinutes, defineWidth } from '../../helpers/helpers'
import { InfoWrapper } from '../Info/InfoElements'

const Info: React.FC<PropType> = ({ leg }) => {
    return (
        <InfoWrapper>
            {leg.mode !== 'WAIT' && <p>ROUTE: {convertTime(leg.startTime)} {leg.from.name} - {convertTime(leg.endTime)} {leg.to.name}</p>}
        </InfoWrapper>
    )
}

export default Info

type PropType = {
    leg: any
}