import React from 'react'
import Home from './home'
import { connect } from 'react-redux'
import {
  fetchMovies,
  fetchMoviesDetail,
  fetchSuggestMovies,
  fetchFavoritesMovies
} from '../../store/actions'
import { withAuthenticator } from 'aws-amplify-react'
import Login from '../login'

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  setMovies: fetchMovies(dispatch),
  setMovie: fetchMoviesDetail(dispatch),
  setSuggestMovies: fetchSuggestMovies(dispatch),
  setFavoritesMovies: fetchFavoritesMovies(dispatch)
})

export default withAuthenticator(
  connect(mapStateToProps, mapDispatchToProps)(Home),
  false,
  [<Login />]
)
