const initialState = {
  results: null,
  amountTransaction: null,
  transactionHistory: null,
  pageInfo: null,
  errorMsg: ''
}

const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TRANSFER': {
      return {
        ...state,
        results: action.payload
      }
    }
    case 'DETAIL_TRANSACTION': {
      return {
        ...state,
        results: action.payload
      }
    }
    case 'AMOUNT_TRANSACTION': {
      return {
        ...state,
        amountTransaction: action.payload
      }
    }
    case 'TRANSACTION_HISTORY': {
      return {
        ...state,
        transactionHistory: action.payload,
        pageInfo: action.pageInfo
      }
    }
    case 'SET_TRANSACTION_MESSAGE': {
      return {
        ...state,
        errorMsg: action.payload
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}

export default transactionReducer
