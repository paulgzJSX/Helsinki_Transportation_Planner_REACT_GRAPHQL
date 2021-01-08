import { useContext } from 'react'
import { Map, Itinerary } from '../../components/'
import ChristmasHat from '../../images/christmas_hat.svg'
import { useItinerary } from '../../hooks/useItinerary';
import { RouteContext } from '../../context/RouteContext'
import { FormWrapper, HeroSection, ItinerariesWrapper } from './HeroElements'
import { BsHouseDoorFill } from 'react-icons/bs'
import { GiSuitcase } from 'react-icons/gi'
import { RiBusFill } from 'react-icons/ri'
import { MdTram } from 'react-icons/md'
import { FaTrain } from 'react-icons/fa'
import { IoIosBoat } from 'react-icons/io'
import { BsExclamationTriangleFill } from 'react-icons/bs'
import { RiArrowRightSLine } from 'react-icons/ri'
import { SiMetrodeparis } from 'react-icons/si'
import Input from '../Input/Input'
 
const Hero = () => {
    const { displayItineraries, setDisplayItineraries } = useContext(RouteContext)

    const [fetchItinerary, { loading, data }] = useItinerary()

    if (data) {
        console.log(data);
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        setDisplayItineraries(true)
        fetchItinerary()
    }

    return (
        <HeroSection>
            {/* <div className="journey-planner">
                <div className="left">
                    <span className='header'>Itinerary suggestions</span>
                    <div className="input">
                        <div className="input-form">
                            <Input id='origin' />
                            <IoSwapVerticalOutline className='input-icon' />
                        </div>
                        <div className="input-form">
                            <input type="text" />
                            <MdAddLocation className='input-icon' />
                        </div>
                    </div>

                    <div className="additional-settings">
                        <div className="departure">
                            <AiOutlineClockCircle className='clock' />
                            <span>Leaving now</span>
                            <RiArrowDownSLine className='arrow-down' />
                        </div>
                        <div className="settings">
                            <RiListSettingsFill className='settings-icon' />
                            <span>Settings</span>
                        </div>
                    </div>

                    <div className="add">
                        <button className='btn'><BsHouseDoorFill className='btn-icon house' /> Add home</button>
                        <button className='btn'><GiSuitcase className='btn-icon suitcase' /> Add work</button>
                        <button className='btn-plus'>+</button>
                    </div>

                    <div className="grey-line"></div>

                    <div className="stops-routes">
                        <span>Stops and routes</span>
                        <div className="transportation-types">
                            <div className="bus offset">
                                <div className="bus-icon inset">
                                    <RiBusFill className='type-icon' />
                                </div>
                            </div>

                            <div className="tram offset">
                                <div className="tram-icon inset">
                                    <MdTram className='type-icon'  />
                                </div>
                            </div>

                            <div className="subway offset">
                                <div className="subway-icon inset">
                                    <SiMetrodeparis className='type-icon' />
                                </div>
                            </div>

                            <div className="rail offset">
                                <div className="rail-icon inset">
                                    <FaTrain className='type-icon'  />
                                </div>
                            </div>

                            <div className="boat offset">
                                <div className="boat-icon inset">
                                    <IoIosBoat className='type-icon'  />
                                </div>
                            </div>
                        </div>
                    </div>

                    <input className='search-stops' type="text" placeholder='Search stops and routes near you'/>
               
                    <div className="grey-line-thin"></div>

                    <div className="services-now">
                        <div className="services-link">
                            <BsExclamationTriangleFill className='exclamation' />
                            <span>Services now</span>
                        </div>
                        <RiArrowRightSLine className='arrow-right' />
                    </div>
                </div>

                <div className="right">
                    <Map />
                </div>
            </div> */}
            <p><span>Finland</span> is within <br />your finger tips</p>
            <img src={ChristmasHat} alt="christmas-hat-icon" />
            <FormWrapper>
                <form onSubmit={handleSubmit}>
                    <Input id='origin' />
                    <Input id='destination' />
                    <Input id='date' />
                    <button type='submit' disabled={displayItineraries}>Search Routes</button>
                </form>
            </FormWrapper>
            {displayItineraries && loading
                ? 'Loading...'
                : data &&
                <ItinerariesWrapper>
                    {data?.plan.itineraries.map((itinerary: any, idx: number) =>
                        <Itinerary key={idx} itinerary={itinerary} />)}
                </ItinerariesWrapper>
            } 
           
        </HeroSection>
    )
}

export default Hero
