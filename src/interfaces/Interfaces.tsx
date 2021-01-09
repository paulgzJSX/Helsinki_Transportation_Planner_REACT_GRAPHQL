export interface ILocation {
    id: string,
    label: string
}

export interface ILocationDetails {
    coordinates?: any,
    id: string,
    label: string
}

export interface IFormData {
    origin?: ILocationDetails,
    destination?: ILocationDetails,
    date?: Date
}

export interface IRouteContextProps {
    formData: IFormData,
    setFormData?: (formData: IFormData) => void,
    displayItineraries?: boolean,
    setDisplayItineraries?: (displayItineraries: boolean) => void,
    points: [Number],
    setPoints?: (points: [Number]) => void,
    selectedLeg: any,
    setSelectedLeg: (selectedLeg: {}) => void,
    coords: {
        id: string,
        coords: {
            lat: number,
            lon: number
        }
    },
    setCoords: (coords: {}) => void,
    allowCoords: any,
    setAllowCoords: (allowCoords: any) => void,
    selectedCoords: any,
    setSelectedCoords: (selectedCoords: any) => void
}

export interface IStop {
    gtfsId: string,
    name: string,
    code: string,
    lat: number,
    lon: number,
    desc: string,
    zoneId: string
}