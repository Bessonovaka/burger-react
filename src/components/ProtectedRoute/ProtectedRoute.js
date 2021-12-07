import { Route, Redirect } from 'react-router-dom';

export const ProtectedRoute = (props, { children, ...rest }) => {
  
  return (
    <Route
      {...rest}
      render={({ location }) =>
        props.isLoggedIn ? (
        children
      ) : (
        <Redirect
          to={{
            pathname:'/login',
            state: {from: location}
          }} />
      )}
    />
  );
}