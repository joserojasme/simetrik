import React from 'react'
import Home from './home'
import { connect } from 'react-redux'
import {
  fetchConciliaciones,
  fetchFuentes,
  fetchTableros,
  fetchUsuarios
} from '../../store/actions'
import { withAuthenticator } from 'aws-amplify-react'
import Login from '../login'

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  setConciliaciones: fetchConciliaciones(dispatch),
  setFuentes: fetchFuentes(dispatch),
  setTableros: fetchTableros(dispatch),
  setUsuarios: fetchUsuarios(dispatch)
})

export default withAuthenticator(
  connect(mapStateToProps, mapDispatchToProps)(Home),
  false,
  [<Login />]
)
