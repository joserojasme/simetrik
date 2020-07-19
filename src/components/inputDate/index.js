import React from 'react'
import TextField from '@material-ui/core/TextField'
import './styles.scss'

export default function InputDate() {
  return (
    <TextField
      id="date"
      type="date"
      defaultValue="2020-07-18"
      className="input-date"
      InputLabelProps={{
        shrink: true
      }}
    />
  )
}
