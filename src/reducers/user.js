import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  signin: {
    accessToken: null,
    userId: 0,
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
    // setIsSignedIn: (state, action) => {
    //   const { isSignedIn } = action.payload;
    //   state.login.isSignedIn = isSignedIn;
    //   localStorage.setItem("isSignedIn", JSON.stringify(isSignedIn));
    // },
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
          throw new Error("Unable to sign up, try another email.")
        }
        return res.json()
      })
      .then((json) => {
        dispatch(user.actions.setAccessToken({
          accessToken: json.accessToken
        }))
        dispatch(user.actions.setStatusMessage({ statusMessage: `Registry done for ${user.name}.` }))
        dispatch(user.action.setUserId({ userId: json._id }))
        // dispatch(user.action.setEmail({ email: json.email }))
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
        //if the status code starts with a 2 then we show the json
        if (res.ok) {
          return res.json()
        }
        //Not Ok
        throw "Unable to sign in. Please check your username and password."
      })
      .then((json) => {
        dispatch(
          user.actions.setAccessToken({
            accessToken: json.accessToken
          })
        )
        dispatch(
          user.actions.setUserId({
            userId: json.userId
          })
        )
      })
      .catch((err) => {
        // dispatch(user.actions.signout())
        dispatch(user.actions.setErrorMessage({ errorMessage: err }))
      })
  }
}

// SECRET THUNK
// export const getPreviousCakeOrders = () => {
//   const USERS_URL = 'http://localhost:8087/users'
//   return (dispatch, getState) => {
//     const accessToken = getState().user.signin.accessToken
//     const userId = getState().user.signin.userId
//     fetch(`${USERS_URL}/${userId}/previousCakeOrders`, {
//       method: 'GET',
//       headers: { Authorization: accessToken }
//     })
//       .then((res) => {
//         if (res.ok) {
//           return res.json()
//         }
//         throw 'Could not access this site. Try signing in.'
//       })
//       .then((json) => {
//         dispatch(
//           //här kan den komma åt något i json
//           user.actions.setPreviousCakeOrders({ previousCakeOrders: JSON.stringify(json) })
//         )
//       })
//     dispatch(user.actions.setErrorMessage({ errorMessage: err }))
//   }
// }

//SIGN OUT THUNK
export const signout = () => {
  return (dispatch) => {
    dispatch(user.actions.setErrorMessage({ errorMessage: null }))
    dispatch(user.actions.setAccessToken({ accessToken: null }))
    dispatch(user.actions.setUserId({ userId: 0 }))
  }
}