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
    setSelectedCoords: (selectedCoords: any) => void,
    displayDrawer: boolean,
    setDisplayDrawer: (displayDrawer: boolean) => void
}

export interface ISuggestion {
    coordinates: [number, number],
    id: string
    label: string;
}

export interface IStopDetails {
    code: string,
    desc: string,
    gtfsId: string,
    lat: number,
    lon: number,
    name: string,  
    zoneId: string,
    __typename: 'Stop'
}

export interface IItinerary {
    duration: number,
    legs: ILeg[],
    walkDistance: number,
    __typename: 'Itinerary'
}

export interface ILeg {
    agency: IAgency | null,
    distance: number,
    endTime: number,
    from: IFrom,
    legGeometry: ILegGeometry,
    mode: string,
    startTime: number,
    to: ITo,
    trip: ITrip | null,
    stops: IStop[],
    __typename: 'Leg'
}

export interface IAgency {
    gtfsId: string,
    name: string,
    __typename: 'Agency'
}

export interface IFrom {
    lat: number,
    lon: number,
    name: string,
    stop: IStop | null,
    __typename: 'Place'
}

export interface ILegGeometry {
    length: number,
    points: string,
    __typename: 'Geometry',
}

export interface ITo {
    lat: number,
    lon: number,
    name: string,
    __typename: 'Place'
}

export interface ITrip {
    gtfsId: string,
    routeShortName: string,
    stops: IStop[],
    tripHeadsign: string,
    __typename: 'Trip'
}

export interface IStop {
    code: string,
    desc?: string,
    id?: string,
    name: string,
    routes?: IRoute[],
    vehicleMode?: string,
    wheelchairBoarding?: string,
    zoneId: string
    __typename: 'Stop'
}

export interface IRoute {
    shortName: string,
    __typename: 'Route'
}

export interface ITabPanel {
    children?: React.ReactNode;
    index: number;
    value: number;
}