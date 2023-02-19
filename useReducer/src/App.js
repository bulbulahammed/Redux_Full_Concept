import { createContext } from 'react';
import { Route, Routes } from "react-router";
import Footer from './components/Footer';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

export const COUNTER_CONTEXT = createContext();

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
