import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  signin: {
    accessToken: null,
    userId: 0,
    name: null,
    email: null,
    statusMessage: '',
    errorMessage: null,
  }
}


export const user = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setAccessToken: (state, action) => {
      const { accessToken } = action.payload
      console.log(`Access Token: ${accessToken}`)
      state.signin.accessToken = accessToken
    },
    setUserId: (state, action) => {
      const { userId } = action.payload
      console.log(`User Id: ${userId}`)
      state.signin.userId = userId
    },
    setStatusMessage: (state, action) => {
      const { statusMessage } = action.payload
      console.log(`Status Message: ${statusMessage}`)
      state.signin.statusMessage = statusMessage
    },
    setErrorMessage: (state, action) => {
      const { errorMessage } = action.payload
      console.log(`Error Message: ${errorMessage}`)
      state.signin.errorMessage = errorMessage
    },
    setName: (state, action) => {
      const { name } = action.payload
      console.log(`Name: ${name}`)
      state.signin.name = name
    },
    setEmail: (state, action) => {
      const { email } = action.payload
      console.log(`Email: ${email}`)
      state.signin.email = email
    },
  }

})

//THUNKS

//SIGN UP THUNK
export const signup = (name, email, password) => {
  const SIGNUP_URL = 'http://localhost:8087/users'
  return (dispatch) => {
    fetch(SIGNUP_URL, {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Unable to sign up, try another email.')
        }
        return res.json()
      })
      .then((json) => {
        dispatch(user.actions.setAccessToken({ accessToken: json.accessToken }))
        dispatch(user.action.setUserId({ userId: json.user.userId }))
        dispatch(user.action.setEmail({ email: json.user.email }))
        dispatch(user.action.setName({ name: json.user.name }))
        dispatch(user.actions.setStatusMessage({ statusMessage: `Registry done for ${user.name}.` }))
      })
      .catch((err) => {
        dispatch(user.actions.setErrorMessage({ errorMessage: err }))
      })
  }
}

//SIGN IN THUNK
export const signin = (email, password) => {
  const SIGNIN_URL = 'http://localhost:8087/sessions'
  return (dispatch) => {
    fetch(SIGNIN_URL, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
        //Not Ok
        throw new Error('Unable to sign in. Please check your username and password.')
      })
      .then((json) => {
        dispatch(
          user.actions.setAccessToken({
            accessToken: json.accessToken
          })
        )
        dispatch(user.actions.setUserId({ userId: json.userId }))
        dispatch(user.actions.setName({ userId: json.name }))
        dispatch(user.actions.setEmail({ userId: json.email }))
      })

      .catch((err) => {
        dispatch(user.actions.setAccessToken({ accessToken: null }))
        dispatch(user.actions.setUserId({ userId: 0 }))
        dispatch(user.actions.setErrorMessage({ errorMessage: err }))
      })
  }
}

//SIGN OUT THUNK
export const signout = () => {
  return (dispatch) => {
    dispatch(user.actions.setErrorMessage({ errorMessage: null }))
    dispatch(user.actions.setAccessToken({ accessToken: null }))
    dispatch(user.actions.setUserId({ userId: 0 }))
  }
}