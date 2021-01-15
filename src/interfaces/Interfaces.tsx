import { LatLngTuple } from "leaflet";
import { Dispatch, SetStateAction } from "react";

export interface ILocation  {
    coordinates: number[],
    id: string,
    label: string,
    locality: string,
    neighbourhood: string,
    postalCode: string,
    region: string
}

export interface ILocationDetails {
    coordinates?: any,
    id: string,
    label: string
}

export interface IFormData {
    origin?: ILocationDetails,
    destination?: ILocationDetails,
    // date?: Date
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
    selectedCoords: ICoordinatesObj,
    setSelectedCoords: Dispatch<SetStateAction<ICoordinatesObj>>,
    displayDrawer: boolean,
    setDisplayDrawer: Dispatch<SetStateAction<boolean>>,
    state: any,
    dispatch: any
}

export interface ICoordinates {
    coordinates: [number, number]
}

export interface ICoordinatesObj {
    lat: number,
    lng: number
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
    route: IRoutePerStop,
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
    vehicleType: number,
    wheelchairBoarding: string,
    stoptimesWithoutPatterns: IStoptimesWithoutPattern[],
    zoneId: string,
    __typename: 'Stop'
}

export interface IStoptimesWithoutPattern {
    scheduledArrival: number,
    realtimeArrival: number,
    arrivalDelay: number,
    scheduledDeparture: number,
    realtimeDeparture: number,
    departureDelay: number,
    realtime: boolean,
    realtimeState: string,
    serviceDay: number,
    headsign: string,
    trip: ITrip,
    route: IRoutePerStop
}

export interface IStopTime {
    arrivalDelay: number,
    departureDelay: number,
    realtimeArrival: number,
    realtimeDeparture: number,
    scheduledArrival: number,
    scheduledDeparture: number,
    trip: ITrip,
    headsign: string
    __typename: 'Stoptime'
}

export interface IRoutePerStop {
    shortName: string,
    longName: string,
    bikesAllowed: string,
    mode: string
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