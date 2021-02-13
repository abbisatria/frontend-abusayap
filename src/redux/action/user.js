import http from '../../helper/http'

export const detailUser = (token, id) => {
  return async dispatch => {
    try {
      dispatch({
        type: 'SET_USER_MESSAGE',
        payload: ''
      })
      const response = await http(token).get(`user/${id}`)
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

export const contact = (search, limit, page, sort, order) => {
  return async dispatch => {
    try {
      dispatch({
        type: 'SET_USER_MESSAGE',
        payload: ''
      })
      const response = await http().get(`contact?search=${search !== undefined ? search : ''}&limit=${limit !== undefined ? limit : 4}&page=${page !== undefined ? page : 1}&sort=${sort !== undefined ? sort : 'id'}&order=${order !== undefined ? order : 'ASC'}`)
      dispatch({
        type: 'CONTACT',
        payload: response.data.results,
        pageInfo: response.data.pageInfo
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
