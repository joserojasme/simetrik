import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import MuiDialogActions from '@material-ui/core/DialogActions'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import React from 'react'

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent)

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions)

function DialogDetail(props) {
  const { data, open, onClick } = props
  return (
    <div>
      <Dialog onClose={() => onClick()} aria-labelledby="customized-dialog-title" open={open}>
        <MuiDialogTitle id="customized-dialog-title" onClose={() => onClick()}>
          {data._id}
        </MuiDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>{`Description: ${data.description}`}</Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => onClick()} color="primary">
            CERRAR
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default DialogDetail
