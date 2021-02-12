import http from '../../helper/http'
import jwt from 'jwt-decode'

export const login = (email, password) => {
  return async dispatch => {
    const params = new URLSearchParams()
    params.append('email', email)
    params.append('password', password)
    try {
      dispatch({
        type: 'SET_AUTH_MESSAGE',
        payload: ''
      })
      const results = await http().post('auth/login', params)
      const token = results.data.results.token
      const user = jwt(token)
      dispatch({
        type: 'LOGIN',
        payload: token,
        user: user
      })
    } catch (err) {
      const { message } = err.response.data
      dispatch({
        type: 'SET_AUTH_MESSAGE',
        payload: message
      })
    }
  }
}

export const signUp = (username, email, password) => {
  return async dispatch => {
    const params = new URLSearchParams()
    params.append('username', username)
    params.append('email', email)
    params.append('password', password)
    try {
      dispatch({
        type: 'SET_AUTH_MESSAGE',
        payload: ''
      })
      const results = await http().post('auth/sign-up', params)
      dispatch({
        type: 'SIGN_UP',
        payload: results.data.message
      })
    } catch (err) {
      const { message } = err.response.data
      dispatch({
        type: 'SET_AUTH_MESSAGE',
        payload: message
      })
    }
  }
}

export const forgotPassword = (email) => {
  return async dispatch => {
    const params = new URLSearchParams()
    params.append('email', email)
    try {
      dispatch({
        type: 'SET_AUTH_MESSAGE',
        payload: ''
      })
      const results = await http().post('auth/forgotPassword', params)
      dispatch({
        type: 'FORGOT_PASSWORD',
        payload: results.data.message
      })
    } catch (err) {
      const { message } = err.response.data
      dispatch({
        type: 'SET_AUTH_MESSAGE',
        payload: message
      })
    }
  }
}

export const resetPassword = (token, password) => {
  return async dispatch => {
    const params = new URLSearchParams()
    params.append('password', password)
    try {
      dispatch({
        type: 'SET_AUTH_MESSAGE',
        payload: ''
      })
      const results = await http().patch(`auth/resetPassword/${token}`, params)
      dispatch({
        type: 'RESET_PASSWORD',
        payload: results.data.message
      })
    } catch (err) {
      const { message } = err.response.data
      dispatch({
        type: 'SET_AUTH_MESSAGE',
        payload: message
      })
    }
  }
}
