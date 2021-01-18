export const initialState = {
    origin: '',
    destination: '',
    selectedLeg: {},
    coords: {
        id: '',
        coords: {}
    },
    allowCoords: {
        id: '',
        state: false
    },
    selectedCoords: {},
    displayDrawer: false
}

export const formReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'ADD_DATA':
            const prop = String(Object.keys(action.payload))
            return {
                ...state,
                [prop]: action.payload[prop]
            }
        case 'SELECT_LEG':
            return {
                ...state,
                selectedLeg: action.payload
            }
        case 'SET_COORDS':
            return {
                ...state,
                coords: action.payload
            }
        case 'ALLOW_COORDS':
            return {
                ...state,
                allowCoords: action.payload
            }
        case 'SET_SELECTED_COORDS':
            return {
                ...state,
                selectedCoords: action.payload
            }
        case 'DISPLAY_DRAWER':
            return {
                ...state,
                displayDrawer: action.payload
            }
        default:
            throw new Error()
    }
}