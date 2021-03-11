import React, { useMemo, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { procesoPesado } from '../../helpers/procesoPesado';

import './memorize.css';

export const MemoHook = () => {

  const { counter, incremet } = useCounter( 1000 );

  const [show, setShow] = useState(true);

  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [ counter ]);
  
  return (
    <div>
      <h1>MemoHook</h1>
      <h3>Counter: <small>{ counter }</small>  </h3>
      <hr />

      <p>{ memoProcesoPesado }</p>

      <button 
        className="btn btn-primary"
        onClick={ incremet }
      >
        +1
      </button>

      <button
        className="btn btn-outline-primary ms-3"
        onClick={ () => {
          setShow( !show);
        }}
      >
        Show/Hide { JSON.stringify( show ) }
      </button>
      
    </div>
  )
};
