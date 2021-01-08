import { useState } from 'react'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';


export default function DateTimePicker() {
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date())

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                margin="dense"
                clearLabel
                disableToolbar
                disablePast
                label='Leaving now?'
                id="date-picker-dialog"
                variant='inline'
                inputVariant='outlined'
                format="MM/dd/yyyy"
                value={selectedDate}
                onChange={(date: Date | null) => setSelectedDate(date)}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
            />
        </MuiPickersUtilsProvider>
    );
}