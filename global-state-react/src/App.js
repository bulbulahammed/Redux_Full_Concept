import { createContext, useState } from 'react';
import { Route, Routes } from "react-router";
import Footer from './components/Footer';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ParentToChild from './pages/ParentToChild';

export const COUNTER_CONTEXT = createContext();

function App() {
  const [count, setCount] = useState(0);
  const value = {count,setCount}
  return (
    <COUNTER_CONTEXT.Provider value={value}>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/parentToChild" element={<ParentToChild/>}/>
      </Routes>
      <Footer/>
    </COUNTER_CONTEXT.Provider>
  );
}

export default App;
