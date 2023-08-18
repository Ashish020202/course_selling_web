import { useState } from 'react'
import './App.css'
import Signup from './Signup'
import Appbar from './Appbar'
import Login from './Login';
import Courses from './courses';
import Addcourses from './Addcourses';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
   return <div>
    <Router>
      <Appbar />
        <Routes>
            <Route path="Addcourses" element= {<Addcourses />}></Route>
            <Route path="courses" element= {<Courses />}></Route>
            <Route path="login" element= {<Login />}></Route>
            <Route path="Signup" element= {<Signup />}></Route>
        </Routes>
    </Router>
    </div>
  
}

export default App
