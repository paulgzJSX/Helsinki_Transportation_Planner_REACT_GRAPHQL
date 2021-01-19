import styled from 'styled-components'

export const ItineraryWrapper = styled.div`
    margin-bottom: .5rem;
    cursor: pointer;

`

export const TimeRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: .3rem;  
    
    span {
        font-size: .9rem;
    }
`

export const DepArrTime = styled.div`
`

export const Duration = styled.div`
`

export const LegsRow = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    cursor: pointer;
`

export const DepartureRow = styled.div`
    p {
        margin: 0 !important;
        font-size: .7rem !important;
    }
`

export const ItinerariesWrapper = styled.div`
    width: 100%;
    margin: 3rem auto;
    height: 20rem;
    background-color: #fff;
    border-radius: 10px;
    padding: 1rem 2rem;
    font-family: inherit;  
    box-shadow: 1px 2px 11px -2px rgba(34, 60, 80, 0.2);

    p {
        font-size: 1.2rem;
        margin: .5rem 0 1rem;
    }
`