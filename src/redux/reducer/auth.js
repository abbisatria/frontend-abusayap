const initialState = {
  token: null,
  user: null,
  message: '',
  errorMsg: ''
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN': {
      return {
        ...state,
        token: action.payload,
        user: action.user
      }
    }
    case 'SIGN_UP': {
      return {
        ...state,
        message: action.payload
      }
    }
    case 'FORGOT_PASSWORD': {
      return {
        ...state,
        message: action.payload
      }
    }
    case 'RESET_PASSWORD': {
      return {
        ...state,
        message: action.payload
      }
    }
    case 'UPDATE_USER': {
      return {
        ...state,
        user: {
          id: action.payload.id !== undefined ? action.payload.id : state.user.id,
          email: action.payload.email !== undefined ? action.payload.email : state.user.email,
          role: action.payload.role !== undefined ? action.payload.role : state.user.role,
          firstname: action.payload.firstname !== undefined ? action.payload.firstname : state.user.firstname,
          lastname: action.payload.lastname !== undefined ? action.payload.lastname : state.user.lastname,
          phoneNumber: action.payload.phoneNumber !== undefined ? action.payload.phoneNumber : state.user.phoneNumber,
          picture: action.payload.picture !== undefined ? action.payload.picture : state.user.picture
        },
        message: action.message
      }
    }
    case 'LOGOUT': {
      return {
        ...state,
        token: null,
        user: null,
        message: '',
        errorMsg: ''
      }
    }
    case 'SET_AUTH_MESSAGE': {
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

export default authReducer
