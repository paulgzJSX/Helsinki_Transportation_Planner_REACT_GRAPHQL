import { useEffect, useState, useRef, useContext } from 'react'
import { useAutocomplete } from '../../hooks/useAutocomplete'
import { useClickOutside } from '../../hooks/useClickOutside'
import { InputWrapper, LocationIcon, CalendarIcon } from './InputElements'
import { RouteContext } from '../../context/RouteContext'
import Dropdown from '../Dropdown/Dropdown'


const Input: React.FC<PropsType> = ({ id }) => {
    const [term, setTerm] = useState('')
    const [displayDropdown, setDisplayDropdown] = useState(false)
    const [doFetch, setDoFetch] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null)
    const dropdownRef = useRef<HTMLDivElement>(null)
    const { setDisplayItineraries } = useContext(RouteContext)

    const { data: suggestions } = useAutocomplete(doFetch, term)

    useClickOutside(setDisplayDropdown, inputRef, dropdownRef)

    useEffect(() => {
        term.length && doFetch ? setDisplayDropdown(true) : setDisplayDropdown(false)
    }, [term])

    const populateInputAndFetch = (term: string, isToFetch: boolean) => {
        setTerm(term)
        setDisplayItineraries(false)
        setDoFetch(isToFetch)
    }

    return (
        <InputWrapper>
            {id === 'date' ? <CalendarIcon /> : <LocationIcon />}
            <input
                ref={inputRef}
                type="text"
                autoComplete='off'
                placeholder={id === 'date' ? 'Leaving now' : id === 'origin' ? 'Enter origin' : 'Enter destination'}
                id={id}
                value={term}
                onChange={() => inputRef.current && populateInputAndFetch(inputRef.current.value, true)}
                onFocus={() => inputRef.current && inputRef.current.select()}
                onClick={() => id === 'date' && setDisplayDropdown(true)}
            />
            <Dropdown
                ref={dropdownRef}
                suggestions={suggestions}
                displayDropdown={displayDropdown}
                populateInputAndFetch={populateInputAndFetch}
                id={id}
            />
        </InputWrapper>
    )
}

export default Input


type PropsType = { id: string }
