import React, { useContext } from 'react';
import { COUNTER_CONTEXT } from './../App';
import Child from './parentToChildByStateLifting/Child';

const ParentToChild = () => {
  const {count} = useContext(COUNTER_CONTEXT);
  return (
    <div className='h-screen'>
      <div className='flex justify-evenly mt-20'>
        <div className="card w-96 bg-base-100 shadow-xl mb-5">
            <div className="card-body items-center text-center">
                <p>Parent</p>
                <h2 className='font-bold text-6xl mb-20'>{count}</h2>
            </div>
        </div>
        <Child count={count}/>
      </div>
    </div>
  )
}

export default ParentToChild