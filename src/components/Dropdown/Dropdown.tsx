import React, { useContext } from 'react'
import { RouteContext } from '../../context/RouteContext'
import { ILocation } from '../../interfaces/Interfaces'
import { DropdownWrapper } from '../Dropdown/DropdownElements'
import { enGB } from 'date-fns/locale'
import { Calendar } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'

const Dropdown: React.FC<PropType> = React.forwardRef(({ populateInputAndFetch, id, displayDropdown, suggestions }, ref: any) => {
    const { formData, setFormData } = useContext(RouteContext)

    const grabInputData = (data: any) => {
        populateInputAndFetch(data, false)
        if (id !== 'date') {
            data = suggestions.find(suggestion => suggestion.label === data)
        }
        setFormData && setFormData({ ...formData, [id]: data })
    }

    return (
        <DropdownWrapper display={displayDropdown} ref={ref} height={id === 'date' ? '20rem' : '10rem'}>
            {id !== 'date'
                ? (
                    <ul>
                        {suggestions && suggestions.map((suggestion: ILocation) =>
                            <li
                                key={suggestion.id}
                                onClick={(e: any) => grabInputData(e.target.innerText)}>
                                {suggestion.label}
                            </li>)}
                    </ul>)
                : (
                    <Calendar
                        minimumDate={new Date()}
                        onDayClick={(date: any) => grabInputData(date.toDateString())}
                        locale={enGB}
                    />)}
        </DropdownWrapper>
    )
})

export default Dropdown


type PropType = {
    ref: any,
    suggestions: Array<ILocation>,
    displayDropdown: boolean,
    id: string,
    populateInputAndFetch: (e: any, isToFetch: boolean) => void
}
