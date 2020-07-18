import React from 'react'
import TextField from '@material-ui/core/TextField'

export default function InputDate() {
  return (
    <TextField
      id="date"
      type="date"
      defaultValue="2020-07-18"
      className={{
        width: 200
      }}
      InputLabelProps={{
        shrink: true
      }}
    />
  )
}
