import Button from '@material-ui/core/Button'
import React, { useState } from 'react'
import TextFieldDate from '../inputDate'
import TextField from '../textField'
import './styles.scss'

export default function FilterOptions(props) {
  const [balanceValue, setBalanceValue] = useState('')
  const [fechaCreacionDesde, setFechaCreacionDesde] = useState('2020-01-01')

  const handeChange = (value) => {
    setBalanceValue(value.target.value.replace(/[^0-9.-]+/g, ''))
    if (balanceValue.length === 0) setFechaCreacionDesde('2020-01-01')
  }

  const handleClickSearch = () => {
    if (balanceValue.length > 0) {
      props.setConciliaciones('', balanceValue)
    } else {
      props.setConciliaciones('', '', fechaCreacionDesde)
      props.setFuentes('', fechaCreacionDesde)
      props.setTableros('', fechaCreacionDesde)
      props.setUsuarios('', fechaCreacionDesde)
    }
  }

  const handleChangeFecha = (value) => {
    setFechaCreacionDesde(value.target.value)
  }

  return (
    <div className='container'>
      <ul className='list'>
        <li>
          <ul className='insideList'>
            <li className='itemList'>
              <span><b>Filtros adicionales</b></span>
            </li>
            <li className='itemList'>
              <span>Valor balance desde</span>
            </li>
            <li className='itemList'>
              $<TextField onChange={handeChange} value={balanceValue} />
            </li>
            {balanceValue.length === 0 &&
              <>
                <li className='itemList'>
                  <span>Fecha creación desde</span>
                </li>
                <li className='itemList'>
                  <TextFieldDate name='fechaCreacionDesde' value={fechaCreacionDesde} onChange={handleChangeFecha} />
                </li>
              </>
            }
            <li>
              <Button onClick={handleClickSearch} variant="contained" color="secondary">Buscar</Button>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}
