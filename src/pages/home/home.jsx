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
  const { conciliaciones, fuentes, tableros, usuarios, isLoadingConciliaciones, isLoadingFuentes, isLoadingTableros, isLoadingUsuarios } = props
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
            {!isLoadingConciliaciones && <Conciliaciones data={conciliaciones} />}
            {isLoadingConciliaciones && <img src='./loading.gif' alt='loading' />}
          </Grid>
          <Grid className='container_table' item xs={6} sm={3}>
            {!isLoadingFuentes && <Fuentes data={fuentes} />}
            {isLoadingFuentes && <img src='./loading.gif' alt='loading' />}
          </Grid>
          <Grid className='container_table' item xs={6} sm={3}>
            {!isLoadingTableros && <Tableros data={tableros} />}
            {isLoadingTableros && <img src='./loading.gif' alt='loading' />}
          </Grid>
          <Grid className='container_table' item xs={6} sm={3}>
            {!isLoadingUsuarios && <Usuarios data={usuarios} />}
            {isLoadingUsuarios && <img src='./loading.gif' alt='loading' />}
          </Grid>
        </Grid>
      </div>

    </>
  )
}

export default Home
