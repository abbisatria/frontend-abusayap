import http from '../../helper/http'

export const transfer = (token, idReceiver, amount, notes, status, dateTransaction, pin) => {
  return async dispatch => {
    const params = new URLSearchParams()
    params.append('idReceiver', idReceiver)
    params.append('amount', amount)
    params.append('notes', notes)
    params.append('status', status)
    params.append('dateTransaction', dateTransaction)
    params.append('pin', pin)
    try {
      dispatch({
        type: 'SET_TRANSACTION_MESSAGE',
        payload: ''
      })
      const results = await http(token).post('transaction/', params)
      dispatch({
        type: 'TRANSFER',
        payload: results.data.results
      })
    } catch (err) {
      const { message } = err.response.data
      dispatch({
        type: 'SET_TRANSACTION_MESSAGE',
        payload: message
      })
    }
  }
}

export const detailTransaction = (id) => {
  return async dispatch => {
    try {
      dispatch({
        type: 'SET_TRANSACTION_MESSAGE',
        payload: ''
      })
      const response = await http().get(`transaction/${id}`)
      dispatch({
        type: 'DETAIL_TRANSACTION',
        payload: response.data.results
      })
    } catch (err) {
      const { message } = err.response.data
      dispatch({
        type: 'SET_TRANSACTION_MESSAGE',
        payload: message
      })
    }
  }
}

export const amountTransaction = (idUser) => {
  return async dispatch => {
    try {
      dispatch({
        type: 'SET_TRANSACTION_MESSAGE',
        payload: ''
      })
      const response = await http().get(`transaction/amountTransaction/${idUser}`)
      dispatch({
        type: 'AMOUNT_TRANSACTION',
        payload: response.data.results
      })
    } catch (err) {
      const { message } = err.response.data
      dispatch({
        type: 'SET_TRANSACTION_MESSAGE',
        payload: message
      })
    }
  }
}

export const transactionHistory = (search, limit, page, sort, order) => {
  return async dispatch => {
    try {
      dispatch({
        type: 'SET_TRANSACTION_MESSAGE',
        payload: ''
      })
      const response = await http().get(`transaction/historytransaction/history?search=${search !== undefined ? search : ''}&limit=${limit !== undefined ? limit : 4}&page=${page !== undefined ? page : 1}&sort=${sort !== undefined ? sort : 'id'}&order=${order !== undefined ? order : 'ASC'}`)
      dispatch({
        type: 'TRANSACTION_HISTORY',
        payload: response.data.results,
        pageInfo: response.data.pageInfo
      })
    } catch (err) {
      const { message } = err.response.data
      dispatch({
        type: 'SET_TRANSACTION_MESSAGE',
        payload: message
      })
    }
  }
}