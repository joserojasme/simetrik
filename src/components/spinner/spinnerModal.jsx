import Dialog from '@material-ui/core/Dialog'
import React from 'react'
import './styles.scss'

function SpinnerModal(props) {
  const { isLoading } = props
  return (
    <div>
      <Dialog
        open={isLoading}
        aria-labelledby='responsive-dialog-title'
      >
        <div className="loading">Cargando</div>
      </Dialog>
    </div>
  )
}

export default SpinnerModal

