import { useEffect } from 'react'

export const useClickOutside = (callback: Function, inputRef: any, dropdownRef: any) => {
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const handleClickOutside = (e: any) => {
        if (!inputRef.current?.contains(e.target) && !dropdownRef.current?.contains(e.target)) {
            callback(false)
        }
    }
}