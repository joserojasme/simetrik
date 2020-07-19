import { makeStyles, withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '../dialog'

const useStyles = makeStyles({
  table: {
    minWidth: 700,
    maxHeight: 400
  },
  span: {
    fontFamily: 'Quicksand'
  }
})

export default function TableTableros({ data }) {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [itemDetalle, setItemDetalle] = useState({})

  const handleClickOpen = value => {
    setItemDetalle(value)
    setOpen(true)
  }

  return (
    <>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Acción</StyledTableCell>
            <StyledTableCell>id</StyledTableCell>
            <StyledTableCell>dashboardName</StyledTableCell>
            <StyledTableCell>CreateAt</StyledTableCell>
            <StyledTableCell>Description</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.length > 0 &&
            data.map(row => (
              <StyledTableRow key={row._id}>
                <StyledTableCell>
                  <Button
                    variant="contained"
                    onClick={() => handleClickOpen(row)}
                    color="secondary">
                    Ver
                  </Button>
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {`${row._id.substring(
                    row._id.length - 8,
                    row._id.length
                  )}...`}
                </StyledTableCell>
                <StyledTableCell>{row.dashboardName}</StyledTableCell>
                <StyledTableCell>{row.timestamp.createdAt}</StyledTableCell>
                <StyledTableCell>
                  {`${row.description.substring(0, 100)}...`}
                </StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
      {data.length === 0 && (
        <div className={classes.span}>No hay resultados</div>
      )}
      {open && (
        <Dialog open={open} onClick={() => setOpen(false)} data={itemDetalle} />
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
