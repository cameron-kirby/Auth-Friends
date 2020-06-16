import React from 'react'
import { Route, Redirect } from 'react-router-dom'


// rest operator (looks a lot like spread operator)
const PrivateRoute = ({component: Component, ...rest }) => {
  const token = window.localStorage.getItem('token')
  return(
    <Route {...rest} render={props => {
      if (token) {
        // Return the component
        return <Component {...props} />
      } else {
        // Redirect the user to /login
        return <Redirect to ="/login" />
      }
    }} />
  )
}

export default PrivateRoute