import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import {Box} from '@mui/material'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import ExerciseDetail from './pages/ExerciseDetail/ExerciseDetail'
import Footer from './components/Footer/Footer'
import './App.css'
const App = () => {
  return (
   <div>
    <Router>
        
           
            <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route exact path='/exercise/:id' element={<ExerciseDetail/>}/>
            </Routes>
            <Footer/>
  
    </Router>
   </div>
  )
}

export default App