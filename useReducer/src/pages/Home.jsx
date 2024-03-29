import React, { useReducer } from 'react';

const Home = () => {
    const initialState = 0;
    
    const reducer =(state,action)=>{
        if(action.type === "INCREMENT"){
            return state + 1;
        }else if(action.type === "DECREMENT"){
            return state -1;
        }
    }
    const [state,dispatch] = useReducer(reducer,initialState);

  return (
    <div className='h-screen flex items-center justify-center'>
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
                <h2 className='font-bold text-6xl mb-20'>{state}</h2>
                <div className="card-actions">
                    <button onClick={()=>dispatch({type:"DECREMENT"})} className="btn btn-active btn-secondary">Decrement</button>
                    <button onClick={()=>dispatch({type:"INCREMENT"})} className="btn btn-active btn-primary">Increment</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home