import React, { useState } from 'react';

const Home = () => {
    const [count,setCount] = useState(0);
    const handleDecrement = ()=>{
       setCount((prevState)=> prevState -1 );
    }
  return (
    <div className='h-screen flex items-center justify-center'>
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
                <h2 className='font-bold text-6xl mb-20'>{count}</h2>
                <div className="card-actions">
                    <button onClick={handleDecrement} className="btn btn-active btn-secondary">Decrement</button>
                    <button onClick={()=>setCount((prevState)=> prevState + 1 )} className="btn btn-active btn-primary">Increment</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home