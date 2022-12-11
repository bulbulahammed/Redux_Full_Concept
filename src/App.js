import { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Parent from './pages/parentToChild/Parent';
import UseState from './pages/UseState';

export const COUNTER_CONTEXT  = createContext();

function App() {
  const [count,setCount] = useState(0);
  const state = {count,setCount}
  return (
    <COUNTER_CONTEXT.Provider value={state}>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/useState' element={<UseState/>}/>
          <Route path='/parentToChild' element={<Parent/>}/>
        </Routes>
      <Footer/>
    </COUNTER_CONTEXT.Provider>
  );
}

export default App;
