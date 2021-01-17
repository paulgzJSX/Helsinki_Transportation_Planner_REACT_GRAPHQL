import { LatLngTuple } from "leaflet";

export interface ILocation {
    coordinates: any,
    id: string,
    label: string,
    locality: string,
    neighbourhood: string,
    region: string,
    postalCode: number
}

export interface ICtx {
    state: IRouteCtx,
    dispatch: any
}

export interface IRouteCtx {
    allowCoords: {
        id: string,
        state: boolean
    },
    coords: {
        coords: ICoordinatesObj,
        id: string
    },
    destination: ILocation,
    displayDrawer: boolean,
    origin: ILocation,
    selectedCoords: ICoordinatesObj,
    selectedLeg: ILeg
}


export interface ICoordinates {
    coordinates: any
}

export interface ICoordinatesObj {
    lat: number,
    lng: number
}

export interface ISuggestion extends ICoordinates {
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

export interface ILegGeometry {
    length: number,
    points: LatLngTuple[],
    __typename: 'Geometry'
}

export interface ITo {
    lat: number,
    lon: number,
    name: string,
    __typename: 'Place'
}

export interface IFrom extends ITo {
    stop: IStop | null,
    __typename: 'Place'
}

export interface ITrip {
    gtfsId: string,
    routeShortName: string,
    stops: IStop[],
    tripHeadsign: string,
    route: IRoute,
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
    gtfsId: string,
    lat: number,
    lon: number,
    vehicleType: number,
    stoptimesWithoutPatterns: IStoptimesWithoutPattern[]
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
    route: IRoute
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

export interface IPattern {
    name: string,
    alerts: IAlert[],
    stops: IStopPattern[]
}

export interface IAlert {
    alertHeaderText: string,
    alertHeaderTextTranslations: {
        text: string
    },
    alertDescriptionText: string,
}

export interface IStopPattern {
    name: string,
    stopTimesForPattern?: IStopTimesForPattern[]
}

export interface IStopTimesForPattern {
    scheduledDeparture?: number,
    stopSequence?: number
}

export interface IRoute {
    shortName: string,
    longName: string,
    bikesAllowed: string,
    mode: string
    __typename: 'Route'
}


export interface ITabPanel {
    children?: React.ReactNode;
    index: number;
    value: number;
}