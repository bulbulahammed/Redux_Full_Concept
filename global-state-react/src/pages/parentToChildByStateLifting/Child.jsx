import React, { useContext } from 'react';
import { COUNTER_CONTEXT } from './../../App';

const Child = () => {
const {count,setCount} = useContext(COUNTER_CONTEXT);

  return (
    <div className='flex items-center justify-center m-10'>
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
                <p>Child</p>
                <h2 className='font-bold text-6xl mb-20'>{count}</h2>
                <div className="card-actions">
                    <button onClick={()=>setCount((prevState)=> prevState + 1 )} className="btn btn-active btn-primary">Increment</button>
                    <button onClick={()=>setCount((prevState)=> prevState - 1 )} className="btn btn-active btn-secondary">Decrement</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Child