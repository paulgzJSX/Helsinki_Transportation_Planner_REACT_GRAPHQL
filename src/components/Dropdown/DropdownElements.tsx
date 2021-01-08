import styled from 'styled-components'

export const DropdownWrapper = styled.div<{ display: boolean, height: string }>`
    position: absolute;
    padding: .5rem 1rem;
    font-family: inherit;
    font-size: .8rem;
    top: 4rem;
    left: 0;
    border-radius: 5px;
    background-color: rgba(247, 242, 247, 0.747); 
    width: 20rem;
    height: ${props => props.height};
    opacity: 0;
    transform: translateY(-5%);
    overflow: hidden;
    overflow-y: scroll;
    transition: all .4s ease;
    opacity: ${props => props.display && '1'};
    transform: ${props => props.display && 'translateY(0)'};

    &::-webkit-scrollbar {
        width: .4rem;
    }

    &::-webkit-scrollbar-track {
        height: .2rem;
        border-radius: 5px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: grey;
        border-radius: 5px;
    }

    li {
        cursor: pointer;
        transition: all .3s ease-in-out;

        &:hover {
            background-color: #a2a4aa;
        }
    }
`