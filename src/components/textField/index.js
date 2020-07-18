import React from 'react'
import TextField from '@material-ui/core/TextField'

export default function TextInput() {
  return (
    <>
      <TextField
        required
        fullWidth
        id="username"
        name="user"
        autoComplete="off"
      />
    </>
  )
}
