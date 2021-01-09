import { useState, createContext, useEffect } from 'react'
import { IRouteContextProps, IFormData } from '../interfaces/Interfaces'


export const RouteContext = createContext<Partial<IRouteContextProps>>({})

const RouteContextProvider: React.FC = ({ children }) => {
    const [formData, setFormData] = useState<IFormData>()
    const [displayItineraries, setDisplayItineraries] = useState<boolean>(false)
    const [selectedLeg, setSelectedLeg] = useState<any>()
    const [coords, setCoords] = useState<any>({})
    const [allowCoords, setAllowCoords] = useState(null)
    const [selectedCoords, setSelectedCoords] = useState(null)

    useEffect(() => {
        if (!formData?.origin || !formData?.destination) setSelectedLeg(null)
        formData?.origin && formData?.destination && setAllowCoords({ state: false })
    }, [formData])

    
    return (
        <RouteContext.Provider value={{
            formData, setFormData,
            displayItineraries, setDisplayItineraries,
            selectedLeg, setSelectedLeg,
            coords, setCoords,
            allowCoords, setAllowCoords,
            selectedCoords, setSelectedCoords
        }}>
            {children}
        </RouteContext.Provider>
    )
}

export default RouteContextProvider
