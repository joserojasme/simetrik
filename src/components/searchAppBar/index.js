import AppBarSearch from './appBarSearch'
import { fetchConciliaciones } from '../../store/actions/actionsConciliaciones'
import { fetchFuentes } from '../../store/actions/actionsFuentes'
import { fetchTableros } from '../../store/actions/actionsTableros'
import { fetchUsuarios } from '../../store/actions/actionsUsuarios'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  setConciliaciones: item => dispatch(fetchConciliaciones(item)),
  setFuentes: item => dispatch(fetchFuentes(item)),
  setTableros: item => dispatch(fetchTableros(item)),
  setUsuarios: item => dispatch(fetchUsuarios(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(AppBarSearch)
