import Grid from '@material-ui/core/Grid'
import React, { useEffect } from 'react'
import FiltersOptions from '../../components/filters'
import AppBarSearch from '../../components/searchAppBar'
import Conciliaciones from '../../components/tableConciliaciones'
import Fuentes from '../../components/tableFuentes'
import Tableros from '../../components/tableTableros'
import Usuarios from '../../components/tableUsuarios'
import './styles.scss'

function Home(props) {
  const { conciliaciones, fuentes, tableros, usuarios } = props
  useEffect(() => {
    props.setConciliaciones()
    props.setFuentes()
    props.setTableros()
    props.setUsuarios()
  }, [])

  return (
    <>
      <AppBarSearch />
      <FiltersOptions />
      <div className='root'>
        <Grid container spacing={2}>
          <Grid item xs={6} sm={3}>
            <div className='paper_table'>
              Conciliaciones
            </div>
          </Grid>
          <Grid item xs={6} sm={3}>
            <div className='paper_table'>
              Fuentes
            </div>
          </Grid>
          <Grid item xs={6} sm={3}>
            <div className='paper_table'>
              Tableros
            </div>
          </Grid>
          <Grid item xs={6} sm={3}>
            <div className='paper_table'>
              Usuarios
            </div>
          </Grid>
          <Grid className='container_table' item xs={6} sm={3}>
            <Conciliaciones data={conciliaciones} />
          </Grid>
          <Grid className='container_table' item xs={6} sm={3}>
            <Fuentes data={fuentes} />
          </Grid>
          <Grid className='container_table' item xs={6} sm={3}>
            <Tableros data={tableros} />
          </Grid>
          <Grid className='container_table' item xs={6} sm={3}>
            <Usuarios data={usuarios} />
          </Grid>
        </Grid>
      </div>

    </>
  )
}

export default Home
