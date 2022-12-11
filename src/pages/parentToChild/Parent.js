import React, { useContext } from 'react';
import { COUNTER_CONTEXT } from '../../App';
import Child from './Child';

const Parent = () => {
    const {count} = useContext(COUNTER_CONTEXT);
  return (
    <>
        <div className='bg-base-500 text-center'>
            <div className="card w-96 mx-auto mt-24 mb-10  bg-primary text-primary-content">
                <div className="card-body">
                    <h2 className='text-2xl text-center'>Parent</h2>
                    <h2 className="text-center text-8xl font-bold my-10">{count}</h2>
                </div>
            </div>
        </div>
        <Child></Child>
    </>
  )
}

export default Parent