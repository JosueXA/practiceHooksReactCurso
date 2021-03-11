import { useState } from 'react';

export const useCounter = ( initialState = 10 ) => {

  const [counter, setCounter] = useState(initialState);

  const reset = () => {
    setCounter( initialState );
  }

  const incremet = () => {
    setCounter( counter + 1 );
  }

  const decrement = () => {
    setCounter( counter - 1 );
  }
  
  return {
    counter,
    incremet,
    decrement,
    reset
  };
  
}
