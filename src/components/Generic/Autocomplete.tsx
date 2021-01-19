import Autocomplete from '@material-ui/lab/Autocomplete'
import { TextField, makeStyles, createStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((_: Theme) => 
    createStyles({
        input: {
            fontSize: 13
        },
        noOptions: {
            fontSize: 13
        },
        option: {
            fontSize: 13
        }
    })
)

export default function AutocompleteInput(props: any) {
    const { handleChange, handleInputChange, value, options, label, noOptionsText } = props
    const classes = useStyles()

    return (
        <Autocomplete
            freeSolo
            fullWidth
            selectOnFocus
            blurOnSelect
            classes={{ input: classes.input, noOptions: classes.noOptions, option: classes.option }}
            noOptionsText={noOptionsText}
            onChange={handleChange}
            onInputChange={handleInputChange}
            value={value}
            options={options}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={label}
                    size='small'
                    required
                    margin="normal"
                    variant="outlined"
                />
            )}
        />
    )
}
