import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

import './customHooks.css';

export const MultipleCustomHooks = () => {

  const { counter, incremet } = useCounter(1);

  const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);

  const { author, quote } = !!data && data[0];

  return (
    <div>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {
        loading 
        ?
          (
            <div className="alert alert-info text-center">
              Loading...
            </div>
          )
        :
          (
            <figure className="text-end">
              <blockquote className="blockquote">
                <p className="mb-0"> { quote } </p>
              </blockquote>
              <figcaption className="blockquote-footer">
                { author } 
              </figcaption>
            </figure>
          )
      }

      <button 
        onClick={ incremet }
        className="btn btn-primary"
      >
        Siguiente quote
      </button>
      
    </div>
  )
}
