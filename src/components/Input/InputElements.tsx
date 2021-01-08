import styled, { css } from 'styled-components'
import { GoLocation } from 'react-icons/go'
import { BsCalendar } from 'react-icons/bs'

export const InputWrapper = styled.div`
    position: relative;

    input {
        padding: 1rem 1.5rem 1rem 2.9rem;
        border-radius: 5px;
        border: 1px solid rgb(212, 209, 209);
        outline: none;
        font-family: inherit;
        transition: background-color .6s ease-in-out;
        cursor: pointer;
        background-color: rgba(247, 242, 247, 0.747);   

        &:hover {
            background-color: #fff;
        }

        &::placeholder {
            opacity: .6;
        }

        &:focus::placeholder {
            color: transparent;
        }
    }
`

export const IconStyle = css`
    position: absolute;
    font-size: 1.5rem;
    opacity: .2;
    cursor: pointer;
    top: .9rem;
    left: 1rem;
    transition: opacity .3s ease-in-out;

    &:hover {
        opacity: .6;
    }
`

export const LocationIcon = styled(GoLocation)`
    ${IconStyle}
`

export const CalendarIcon = styled(BsCalendar)`
    ${IconStyle}
`