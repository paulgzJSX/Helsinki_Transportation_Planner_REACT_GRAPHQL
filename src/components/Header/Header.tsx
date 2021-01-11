import { NavLink } from 'react-router-dom'
import { HeaderWrapper, LogoWrapper, SnowFlakeIcon, NavMenu } from './HeaderElements'

const Header = () => {
    return (
        <HeaderWrapper>
            <LogoWrapper to='/'>
                <SnowFlakeIcon />
                <h3>RideHelsinki</h3>
            </LogoWrapper>
            <NavMenu>
                <ul>
                    <li><NavLink to='/'>Schedule</NavLink></li>
                </ul>
            </NavMenu>
        </HeaderWrapper>
    )
}

export default Header
