import React from 'react'
import TextField from '@material-ui/core/TextField'
import './styles.scss'

export default function InputDate(props) {
  const { value, onChange, name } = props
  return (
    <TextField
      id={name}
      name={name}
      type="date"
      className="input-date"
      InputLabelProps={{
        shrink: true
      }}
      value={value}
      onChange={onChange}
    />
  )
}
