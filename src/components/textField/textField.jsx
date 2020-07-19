import React from 'react'
import TextField from '@material-ui/core/TextField'

export default function TextInput(props) {
  const { value, onChange } = props
  return (
    <>
      <TextField
        fullWidth
        id="balance"
        name="balance"
        autoComplete="off"
        value={value}
        onChange={onChange}
      />
    </>
  )
}
