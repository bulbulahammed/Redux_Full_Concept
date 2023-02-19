import { createContext } from 'react';
import { Route, Routes } from "react-router";
import Footer from './components/Footer';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import LongForm from './pages/LongForm';
import ShortForm from './pages/ShortForm';

export const COUNTER_CONTEXT = createContext();

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shortForm" element={<ShortForm/>}/>
        <Route path="/longForm" element={<LongForm/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
