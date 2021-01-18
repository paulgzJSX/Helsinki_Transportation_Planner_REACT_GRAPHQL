export function convertDuration(duration: number): number {
    return Math.floor(duration / 60)
}

export function convertSeconds(seconds: number): string {
    let date = new Date(null)
    date.setSeconds(seconds)
    return date.toISOString().substr(11, 5)
}

export function defineDeparture(time: number) {
    return time ? convertSeconds(time) : 'no data'
  }

export function convertTime(timestamp: Date): string {
    const date = new Date(timestamp)
    const hours = ('0' + date.getHours()).substr(-2)
    const minutes = ('0' + date.getMinutes()).substr(-2)

    return hours + ':' + minutes
}

export function getMinutes(startTimestamp: number, endTimestamp: number): number {
    const startDate = new Date(startTimestamp)
    const endDate = new Date(endTimestamp)

    const diff = endDate.getTime() - startDate.getTime()
    return Math.round(diff / 60000)
}

export function defineWidth(startTime: number, endTime: number, duration: number): number {
    return Math.round((getMinutes(startTime, endTime) * 100) / convertDuration(duration))
}

export function defineColor(mode: string): string {
    return mode === 'BUS'
        ? '#007AC9'
        : mode === 'TRAM'
            ? '#00985F'
            : mode === 'RAIL'
                ? '#8C4799'
                : mode === 'SUBWAY'
                    ? '#FF6319'
                    : mode === 'WAIT'
                        ? '#fff'
                        : 'lightgrey'
}