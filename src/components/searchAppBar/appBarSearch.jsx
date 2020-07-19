import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import InputBase from '@material-ui/core/InputBase'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import AccountCircle from '@material-ui/icons/AccountCircle'
import SearchIcon from '@material-ui/icons/Search'
import React, { useState } from 'react'
import * as Amplify from '../../network/cognitoAWS'
import { useStyles } from './styles'
import Button from '@material-ui/core/Button'

function AppBarSearch(props) {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null)
  const [titleSearch, setTitleSearch] = useState('')
  const isMenuOpen = Boolean(anchorEl)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const handleChange = (event) => {
    setTitleSearch(event.target.value)
    if (event.target.value.length === 0) {
      handleClick()
    }
  }

  const handleClick = async () => {
    props.setConciliaciones(titleSearch)
    props.setFuentes(titleSearch)
    props.setTableros(titleSearch)
    props.setUsuarios(titleSearch)
  }

  const onKeyPress = event => {
    if (event.key === 'Enter') {
      props.setConciliaciones(titleSearch)
      props.setFuentes(titleSearch)
      props.setTableros(titleSearch)
      props.setUsuarios(titleSearch)
    }
  }

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  const menuId = 'primary-search-account-menu'
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
    >
      <MenuItem onClick={() => Amplify.signOut()}>Cerrar sesión</MenuItem>
    </Menu>
  )

  const mobileMenuId = 'primary-search-account-menu-mobile'
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
    >
      <MenuItem onClick={() => Amplify.signOut()}>
        <p>Cerrar sesión</p>
      </MenuItem>
    </Menu>
  )

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Simetrik
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              {titleSearch.length === 0 &&
                <SearchIcon />
              }
            </div>
            <InputBase
              placeholder="Buscar..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              value={titleSearch}
              inputProps={{ 'aria-label': 'search' }}
              onKeyPress={onKeyPress}
              onChange={handleChange}
              autoFocus
            />
            {titleSearch.length > 0 &&
              <Button onClick={handleClick} variant="contained" color="secondary">Buscar</Button>
            }
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  )
}

export default AppBarSearch
