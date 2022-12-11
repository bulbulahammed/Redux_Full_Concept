import React, { useContext } from 'react';
import { COUNTER_CONTEXT } from './../../App';

const Child = () => {
    const {count,setCount} = useContext(COUNTER_CONTEXT);
  return (
    <>
        <div className='bg-base-500 text-center'>
            <div className="card w-96 mx-auto mb-24  bg-primary text-primary-content">
                <div className="card-body">
                    <h2 className='text-2xl'>Child</h2>
                    <h2 className="text-center text-8xl font-bold my-10">{count}</h2>
                    <div className="card-actions justify-center">
                        <button className="btn btn-warning" onClick={()=>setCount((prevState)=>prevState - 1)}>➖</button>
                        <button className="btn btn-secondary" onClick={()=>setCount((prevState)=> prevState +1 )}>➕</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Child