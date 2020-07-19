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
  const { conciliaciones, isLoading, fuentes, tableros, usuarios } = props
  useEffect(() => {
    const fetchConciliaciones = async () => {
      await props.setConciliaciones()
    }
    const fetchFuentes = async () => {
      await props.setFuentes()
    }
    const fetchTableros = async () => {
      await props.setTableros()
    }
    const fetchUsuarios = async () => {
      await props.setUsuarios()
    }
    fetchConciliaciones()
    fetchFuentes()
    fetchTableros()
    fetchUsuarios()
  }, [])

  return (
    <>
      <AppBarSearch />
      <FiltersOptions />
      {!isLoading &&
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
      }
      {isLoading &&
        <img src='./loading.gif' alt='loading' />
      }
    </>
  )
}

export default Home
