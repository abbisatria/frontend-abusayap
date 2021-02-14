const initialState = {
  results: null,
  pageInfo: null,
  errorMsg: ''
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DETAIL_USER': {
      return {
        ...state,
        results: action.payload
      }
    }
    case 'CONTACT': {
      return {
        ...state,
        results: action.payload,
        pageInfo: action.pageInfo
      }
    }
    case 'EDIT_USER_INFO': {
      return {
        ...state,
        results: action.payload
      }
    }
    case 'SET_USER_MESSAGE': {
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

export default userReducer
