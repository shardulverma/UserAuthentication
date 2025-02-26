import React from 'react';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import { BrowserRouter, Route, Routes,} from 'react-router-dom'

const App = () =>{
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App

