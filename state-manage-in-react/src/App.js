import { Route, Routes } from "react-router";
import Footer from './components/Footer';
import Navbar from "./components/Navbar";
import Counter2 from "./pages/Counter2";
import Home from "./pages/Home";
import ParentToChild from "./pages/Parent";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="counter2" element={<Counter2/>}/>
        <Route path="parentToChild" element={<ParentToChild/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
