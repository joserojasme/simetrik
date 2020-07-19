import { makeStyles, withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import React from 'react'

const useStyles = makeStyles({
  table: {
    minWidth: 700,
    maxHeight: 440
  },
  span: {
    fontFamily: 'Quicksand'
  }
})

export default function TableUsuarios({ data }) {
  const classes = useStyles()

  return (
    <>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>id</StyledTableCell>
            <StyledTableCell>FirstName</StyledTableCell>
            <StyledTableCell>LastName</StyledTableCell>
            <StyledTableCell>Gender</StyledTableCell>
            <StyledTableCell>Phone</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.length > 0 &&
            data.map(row => (
              <StyledTableRow key={row._id}>
                <StyledTableCell component="th" scope="row">
                  {`${row._id.substring(
                    row._id.length - 8,
                    row._id.length
                  )}...`}
                </StyledTableCell>
                <StyledTableCell>{row.name.firstName}</StyledTableCell>
                <StyledTableCell>{row.name.lastName}</StyledTableCell>
                <StyledTableCell>{row.gender}</StyledTableCell>
                <StyledTableCell>{row.phone}</StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
      {data.length === 0 && (
        <div className={classes.span}>No hay resultados</div>
      )}
    </>
  )
}

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell)

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default
    }
  }
}))(TableRow)

/* eslint no-underscore-dangle: 0 */
