/* eslint react/destructuring-assignment: 0 */
import React, { Component } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Container from '@material-ui/core/Container'
import { withStyles } from '@material-ui/styles'
import PropTypes from 'prop-types'
import * as Amplify from '../../network/cognitoAWS'
import Alerts, { ERROR, ALERT_SUCCESS } from '../../components/alerts'
import LabelTitle from '../../components/labelTitles'
import SpinnerModal from '../../components/spinner'
import './styles.scss'

const initialState = {
  username: 'JOSEROJASME',
  password: 'JOSE1234'
}

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ...initialState
    }
  }

	handleSubmit = async event => {
	  event.preventDefault()
	  this.showAlert(false)
	  const response = await Amplify.signIn(
	    { ...this.state },
	    this.props.setIsLoading
	  )
	  this.validateResponse(response)
	  this.setState({ ...initialState })
	}

	validateResponse = res => {
	  const codeDefault = ERROR
	  const alertObject = {}
	  alertObject.code = codeDefault
	  alertObject.open = true
	  switch (res.code) {
	  case Amplify.errorNotAuthorizedException:
	    alertObject.message = Amplify.notAuthorizedException
	    break
	  case Amplify.errorUserNotFoundException:
	    alertObject.message = Amplify.userNotFoundException
	    break
	  case Amplify.SUCCESS:
	    alertObject.message = res.data.msn
	    alertObject.code = ALERT_SUCCESS
	    break
	  case Amplify.ERROR_GENERAL:
	    alertObject.message = res.data.msn
	    break
	  default:
	    window.location.replace('/home')
	    break
	  }
	  this.showAlert(true, alertObject)
	}

	showAlert = (type, data) => {
	  if (type) {
	    this.props.setDataAlert(data)
	  } else {
	    this.props.setDataAlert({ open: false })
	  }
	}

	handleChange = event => {
	  this.setState({ [event.target.id]: event.target.value })
	}

	render() {
	  const { username, password } = this.state

	  return (
	    <div>
	      <Container component="main" maxWidth="xs">
	        <CssBaseline />
	        <div className='paper'>
	          <Alerts />
	          <Avatar className='avatar'>
	            <LockOutlinedIcon />
	          </Avatar>
	          <LabelTitle text="Simetrik" />
	          <form onSubmit={this.handleSubmit}>
	            <TextField
	              variant="outlined"
	              margin="normal"
	              required
	              fullWidth
	              id="username"
	              label="Nombre de usuario"
	              name="user"
	              autoFocus
	              value={username}
	              onChange={this.handleChange}
	              autoComplete="off"
	            />
	            <TextField
	              variant="outlined"
	              margin="normal"
	              required
	              fullWidth
	              label="Contraseña"
	              type="password"
	              id="password"
	              value={password}
	              onChange={this.handleChange}
	              autoComplete="off"
	            />
	            <Button
	              type="submit"
	              fullWidth
	              variant="contained"
	              color="primary"
	              className='submit'>
								Iniciar Sesión
	            </Button>
	          </form>
	        </div>
	      </Container>
	      <SpinnerModal />
	    </div>
	  )
	}
}

export default Login
