export const routeReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'ADD_ROUTE':
            return { route: action.payload }
        default:
            throw new Error()
    }
}