import React, {useEffect, useState} from 'react';

export default function SelectTimeframe({onTimeFrameSelected}) {
  return (
     <>
     <div>
      <h2> Please select a timeframe</h2>
      <div className='grid'>
        {['yesterday', 'today' , 'tomorrow'].map((timeframes)=> {
          return <button className='timeframes' key={timeframes}
          onClick={() => onTimeFrameSelected(timeframes)}>
            {timeframes}
          </button>
        })}
      </div>
   </div> 
   </>
   
  )
}
