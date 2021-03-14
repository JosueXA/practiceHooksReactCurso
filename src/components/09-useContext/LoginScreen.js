import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const LoginScreen = () => {

  // obetener la referencia al context
  const { setUser } = useContext(UserContext);

  return (
    <div>
      <h1>LoginScreen</h1>
      <hr />
      <button 
        className="btn btn-primary"
        onClick={ () => setUser({
          id: 1234,
          name: 'Josué'
        }) }
      >
        Login
      </button>
    </div>
  )
}
