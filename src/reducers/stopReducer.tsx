export const stopReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'ADD_STOP':
            return { stop: action.payload }
        default:
            throw new Error()
    }
}