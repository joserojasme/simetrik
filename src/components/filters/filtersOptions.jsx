import React from 'react'
import './styles.scss'
import TextField from '../textField'
import TextFieldDate from '../inputDate'

export default function LetterAvatars() {
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
              $<TextField />
            </li>
            <li className='itemList'>
              <span>Fecha creación desde</span>
            </li>
            <li className='itemList'>
              <TextFieldDate />
            </li>
            <li className='itemList'>
              <span>Fecha actualización desde</span>
            </li>
            <li className='itemList'>
              <TextFieldDate />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}
