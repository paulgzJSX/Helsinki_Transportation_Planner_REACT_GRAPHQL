import { Table, TableBody, TableCell, TableHead, TableRow, TableContainer, makeStyles, createStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((_: Theme) =>
    createStyles({
        container: {
            width: 660,
            margin: '0 auto'
        }
    })
)

export default function TableGeneric({ rows, maxHeight }: any) {
    const classes = useStyles()

    return (
        <TableContainer component='div' className={classes.container} style={maxHeight}>
            <Table stickyHeader style={{ minWidth: 650 }} size='small' aria-label="simple table">
                <TableHead style={{ fontSize: 12 }}>
                    <TableRow hover selected>
                        {Object.keys(rows[0]).map(title =>
                            <TableCell style={{ fontSize: 12 }}>
                                {title}
                            </TableCell>)}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row: any) =>
                        <TableRow style={{ cursor: 'pointer' }} hover>
                            {Object.values(row).map(cell =>
                                <TableCell component="th" scope="row" style={{ fontSize: 12 }}>
                                    {cell}
                                </TableCell>)}
                        </TableRow>)}
                </TableBody>
            </Table>
        </TableContainer>
    )
}