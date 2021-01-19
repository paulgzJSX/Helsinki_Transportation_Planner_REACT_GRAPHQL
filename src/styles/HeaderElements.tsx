import styled, { keyframes } from 'styled-components'
import { NavLink } from 'react-router-dom'
import { IoSnowSharp } from 'react-icons/io5'

const rotateSnowFlake = keyframes`
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
`

export const HeaderWrapper = styled.header`
    height: 80px;
    max-width: 89rem;
    padding-left: 8rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;   
`

export const LogoWrapper = styled(NavLink)`
    color: rgb(194, 193, 211);
    display: flex;
    align-items: center;
    cursor: pointer;

    h3 {
        display: block;
        position: relative;
        padding: 0 .5rem;  
        
        &:after {
            content: '';
            position: absolute;
            top: 1.8rem;
            left: 0;
            width: 100%;
            height: 1px;
            background-color: #fff;
            transform: scale(0);
            transition: all .4s ease-in-out;  
        }

        &:hover::after {
            transform: scale(1);
        }
    }
`

export const SnowFlakeIcon = styled(IoSnowSharp)`
    font-size: 1.5rem;
    animation: ${rotateSnowFlake} 5s infinite linear;
`

export const NavMenu = styled.nav`
    ul {
        display: flex;
        align-items: center;

        li {
            position: relative;
            padding: 0 1rem;

            a {
                color: #fff;
                font-size: .8rem;

                &:after {
                    content: '';
                    position: absolute;
                    top: 1.3rem;
                    left: 0;
                    width: 100%;
                    height: 1px;
                    background-color: #fff;
                    transform: scale(0);
                    transition: all .4s ease-in-out;    
                }

                &:hover::after {
                    transform: scale(1);
                }
            }
        }
    }
`