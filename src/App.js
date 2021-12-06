import './App.css';

import { Navbar, Footer } from "./app/components";
import { Home, Play, NotFound } from "./app/views";

import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/play" element={<Play/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
