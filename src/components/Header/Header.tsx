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
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/schedule'>Schedule</NavLink></li>
                    <li><a href="#">Planning</a></li>
                    <li><a href="#">Disruptions</a></li>
                    <li><a href="#">Points of Interest</a></li>
                    <li><a href="#">Contact HSL</a></li>
                </ul>
            </NavMenu>
        </HeaderWrapper>
    )
}

export default Header
