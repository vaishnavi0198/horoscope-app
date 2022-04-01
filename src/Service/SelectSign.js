import React, {useEffect, useState} from 'react';
import {getSigns} from './api';

export const SelectSign = ({onSignSelected}) => {
    const [signs, setSigns] = useState([]);

    useEffect(() => {
        getSigns().then(setSigns); //.then(res => setSigns(res)
      } , [])
    return (
         <>
      <h2>Please select a sign</h2>
      <div className='grid'>
        {signs.map((sign)=> {
          return <button className='sign' key={sign}
          onClick={() => onSignSelected(sign)}
          >{sign}</button>
        })}
      </div>
    </>
    )
   
}