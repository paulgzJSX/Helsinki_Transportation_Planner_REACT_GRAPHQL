export function convertDuration(duration: number) {
    let num = duration
    let minutes = num / 60
    let rminutes = Math.floor(minutes)
    // let minutes = (hours - rhours) * 60
    // let rminutes = Math.round(minutes)
    return rminutes
}

export function convertTime(timestamp: Date) {
    const date = new Date(timestamp)
    const hours = ('0' + date.getHours()).substr(-2)
    const minutes = ('0' + date.getMinutes()).substr(-2)

    return hours + ':' + minutes
}

export function getMinutes(startTimestamp: Date, endTimestamp: Date) {
    const startDate = new Date(startTimestamp)
    const endDate = new Date(endTimestamp)

    const diff = endDate.getTime() - startDate.getTime()
    return Math.round(diff / 60000)
}

export function defineWidth(startTime: Date, endTime: Date, duration: number) {
    return Math.round((getMinutes(startTime, endTime) * 100) / convertDuration(duration))
}


export function setColor(mode: string, fn: ({}) => void) {
    switch (mode) {
        case 'BUS':
            fn({ color: '#007AC9' })
            break;

        case 'TRAM':
            fn({ color: '#00985F' })
            break;

        case 'RAIL':
            fn({ color: '#8C4799' })
            break;

        case 'SUBWAY':
            fn({ color: '#FF6319' })
            break;

        default:
            break;
    }
}

