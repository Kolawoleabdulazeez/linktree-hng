import React from 'react';
import "./App.css"
import Homepage from './Components/Homepage';
import { Route, Routes} from "react-router-dom"
import Contact from './Pages/Contact';

function App() {
  return (
    <>
    <Routes>
    <Route path='/' element={<Homepage />}/>
    <Route path='/contact' element={<Contact />}/>
     </Routes>
     </>
  )}

export default App;
