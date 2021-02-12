import http from '../../helper/http'

export const detailUser = (id) => {
  return async dispatch => {
    try {
      dispatch({
        type: 'SET_USER_MESSAGE',
        payload: ''
      })
      const response = await http().get(`user/${id}`)
      dispatch({
        type: 'DETAIL_USER',
        payload: response.data.results
      })
    } catch (err) {
      const { message } = err.response.data
      dispatch({
        type: 'SET_USER_MESSAGE',
        payload: message
      })
    }
  }
}

export const contact = () => {
  return async dispatch => {
    try {
      dispatch({
        type: 'SET_USER_MESSAGE',
        payload: ''
      })
      const response = await http().get('contact')
      dispatch({
        type: 'CONTACT',
        payload: response.data.results
      })
    } catch (err) {
      const { message } = err.response.data
      dispatch({
        type: 'SET_USER_MESSAGE',
        payload: message
      })
    }
  }
}
