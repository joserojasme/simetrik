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
  }
})

export default function TableConciliaciones({ data }) {
  const classes = useStyles()

  return (
    <Table className={classes.table} aria-label="customized table">
      <TableHead>
        <TableRow>
          <StyledTableCell>id</StyledTableCell>
          <StyledTableCell align="right">Balance</StyledTableCell>
          <StyledTableCell>CreateAt</StyledTableCell>
          <StyledTableCell>Description</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.length > 0 &&
          data.map(row => (
            <StyledTableRow key={row._id}>
              <StyledTableCell component="th" scope="row">
                {`${row._id.substring(row._id.length - 8, row._id.length)}...`}
              </StyledTableCell>
              <StyledTableCell align="right">{row.balance}</StyledTableCell>
              <StyledTableCell>{row.timestamp.createdAt}</StyledTableCell>
              <StyledTableCell>
                {`${row.description.substring(0, 100)}...`}
              </StyledTableCell>
            </StyledTableRow>
          ))}
      </TableBody>
    </Table>
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
