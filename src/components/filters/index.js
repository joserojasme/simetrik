import FiltersOptions from './filtersOptions'
import { fetchConciliaciones } from '../../store/actions/actionsConciliaciones'
import { fetchFuentes } from '../../store/actions/actionsFuentes'
import { fetchTableros } from '../../store/actions/actionsTableros'
import { fetchUsuarios } from '../../store/actions/actionsUsuarios'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  setConciliaciones: (texto, balance, fecha) =>
    dispatch(fetchConciliaciones(texto, balance, fecha)),
  setFuentes: (texto, fecha) => dispatch(fetchFuentes(texto, fecha)),
  setTableros: (texto, fecha) => dispatch(fetchTableros(texto, fecha)),
  setUsuarios: (texto, fecha) => dispatch(fetchUsuarios(texto, fecha))
})

export default connect(mapStateToProps, mapDispatchToProps)(FiltersOptions)
