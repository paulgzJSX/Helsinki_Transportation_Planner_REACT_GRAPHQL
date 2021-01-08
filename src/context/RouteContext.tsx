import { useState, createContext } from 'react'
import { IRouteContextProps, IFormData } from '../interfaces/Interfaces'


export const RouteContext = createContext<Partial<IRouteContextProps>>({})

const RouteContextProvider: React.FC = ({ children }) => {
    const [formData, setFormData] = useState<IFormData>()
    const [displayItineraries, setDisplayItineraries] = useState<boolean>(false)
    const [selectedLeg, setSelectedLeg] = useState<any>()
    const [coords, setCoords] = useState<any>({})
    
    return (
        <RouteContext.Provider value={{
            formData, setFormData,
            displayItineraries, setDisplayItineraries,
            selectedLeg, setSelectedLeg,
            coords, setCoords
        }}>
            {children}
        </RouteContext.Provider>
    )
}

export default RouteContextProvider
