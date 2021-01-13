import { LatLngTuple } from "leaflet";
import { Dispatch, SetStateAction } from "react";

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

export interface IRouteContext {
    formData: IFormData,
    setFormData: Dispatch<SetStateAction<IFormData>>,
    displayItineraries?: boolean,
    setDisplayItineraries: Dispatch<SetStateAction<boolean>>,
    selectedLeg: ILeg,
    setSelectedLeg: Dispatch<SetStateAction<ILeg>>,
    coords: {
        id: string,
        coords: ICoordinatesObj
    },
    setCoords: (coords: {}) => void,
    allowCoords: {
        id?: string,
        state: boolean
    },
    setAllowCoords: Dispatch<SetStateAction<any>>,
    selectedCoords: any,
    setSelectedCoords: Dispatch<SetStateAction<any>>,
    displayDrawer: boolean,
    setDisplayDrawer: Dispatch<SetStateAction<boolean>>
}

export interface ICoordinates {
    coordinates: [number, number]
}

export interface ICoordinatesObj {
    lat: number,
    lon: number
}

export interface ISuggestion {
    coordinates: ICoordinates,
    id: string
    label: string;
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
    points: LatLngTuple[],
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

export interface IRoute {
    shortName: string,
    __typename: 'Route'
}

export interface ITabPanel {
    children?: React.ReactNode;
    index: number;
    value: number;
}