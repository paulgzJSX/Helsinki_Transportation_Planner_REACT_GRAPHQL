import styled, { css } from 'styled-components'
import { RiBusFill } from 'react-icons/ri'
import { GiWalk } from 'react-icons/gi'
import { FaTrain } from 'react-icons/fa'
import { MdTram } from 'react-icons/md'
import { BsStopwatch } from 'react-icons/bs'
import { SiMetrodeparis } from 'react-icons/si'

const IconStyle = css`
    font-size: 1.6rem;
    margin-right: .3rem;
`

export const LegWrapper = styled.div<{ width: number}>`
    position: relative;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    width: ${props => props.width + '%'};
    margin-right: .2rem;
    transition: all .3s ease;

    &:hover {
        opacity: .7;
    }

    p {
        font-size: .7rem !important;
        margin: 0 !important;
    }

`

export const LegStripe = styled.div<{ mode: string }>`
    display: flex;
    align-items: center;
    margin-bottom: .3rem;
    border: ${props =>  props.mode === 'WAIT' ? '1px solid lightgrey' : null};
    border-radius: 5px;
    height: 1.8rem;
    background-color: ${props =>
        props.mode === 'BUS'
            ? '#007AC9'
            : props.mode === 'TRAM'
                ? '#00985F'
                : props.mode === 'RAIL'
                    ? '#8C4799'
                    : props.mode === 'SUBWAY'
                        ? '#FF6319'
                        : props.mode === 'WAIT'
                            ? '#fff'
                            : 'lightgrey'};
    color: ${props => 
        props.mode === 'WALK' || props.mode === 'WAIT'
            ? '#000' 
            : '#fff'};

    span {
        font-size: ${props => props.mode === 'WALK' || props.mode === 'WAIT' ? '.8rem' : '1rem'};
    }
`

export const Departure = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: nowrap;

    p {
        font-size: .7rem !important;
    }

    span {
        display: inline-block;
        background-color: #e9e3e3 !important;
        color: #7c7979;
        font-weight: 400 !important;
        padding: 0 .3rem !important;
        border-radius: 4px !important;
    }
`

export const WalkIcon = styled(GiWalk)`
    ${IconStyle}
`

export const BusIcon = styled(RiBusFill)`
    ${IconStyle}
`

export const RailIcon = styled(FaTrain)`
    ${IconStyle}
`

export const TramIcon = styled(MdTram)`
    ${IconStyle}
`

export const WaitIcon = styled(BsStopwatch)`
    ${IconStyle}
    font-size: 1.4rem !important;
    opacity: .4;
`

export const SubwayIcon = styled(SiMetrodeparis)`
    ${IconStyle}
`

export function defineIcon(mode: string) {
    switch (mode) {
        case 'WALK':
            return <WalkIcon />

        case 'BUS':
            return <BusIcon />

        case 'TRAM':
            return <TramIcon />

        case 'RAIL':
            return <RailIcon />

        case 'WAIT':
            return <WaitIcon />

        case 'SUBWAY':
            return <SubwayIcon />

        default:
            break;
    }
}