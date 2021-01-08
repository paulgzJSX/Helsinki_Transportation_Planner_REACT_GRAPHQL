import { useState, useEffect } from 'react'
import axios from 'axios'

export interface IUseFetch {
    response: any,
    isLoading: boolean,
    error: boolean
}

export const useFetch = (isFetching: boolean, url: string) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        let mounted = true
        const abortController = new AbortController()
        const signal = abortController.signal

        if (isFetching && mounted) {
            (async () => {
                try {
                    setIsLoading(true)
                    const { data } = await axios.get(url)
                    if (!signal.aborted) {
                        setData(data)
                    }
                } catch (err) {
                    if (!signal.aborted) {
                        setData(err)
                        setError(true)
                    }
                } finally {
                    if (!signal.aborted) {
                        setIsLoading(false)
                    }
                }
            })()
        }

        return () => {
            mounted = false
            abortController.abort()
        }
    }, [url])

    return { data, isLoading, error }
}
