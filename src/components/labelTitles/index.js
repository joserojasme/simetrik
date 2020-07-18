import React from 'react'
import './styles.scss'

function LabelTitles(props) {
  const { text } = props
  return (
    <>
      <span className="title">{text}</span>
    </>
  )
}

export default LabelTitles
