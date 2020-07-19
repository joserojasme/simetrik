import React from 'react'
import Home from './home'
import { connect } from 'react-redux'
import { fetchConciliaciones } from '../../store/actions/actionsConciliaciones'
import { fetchFuentes } from '../../store/actions/actionsFuentes'
import { fetchTableros } from '../../store/actions/actionsTableros'
import { fetchUsuarios } from '../../store/actions/actionsUsuarios'
import { withAuthenticator } from 'aws-amplify-react'
import Login from '../login'

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  setConciliaciones: item => dispatch(fetchConciliaciones(item)),
  setFuentes: item => dispatch(fetchFuentes(item)),
  setTableros: item => dispatch(fetchTableros(item)),
  setUsuarios: item => dispatch(fetchUsuarios(item))
})

export default withAuthenticator(
  connect(mapStateToProps, mapDispatchToProps)(Home),
  false,
  [<Login />]
)
