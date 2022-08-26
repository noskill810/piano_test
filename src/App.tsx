import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom'
import { Concept } from './components/pages/Concept';
import { Contact } from './components/pages/Contact';
import { Course } from './components/pages/Course';
import { Home } from './components/pages/Home'
import { Instructor } from './components/pages/Instructor';
import "./css/style.css"; 


{/* <SLink to="/home">Home</SLink> 
<SLink to="/concept">Concept</SLink> 
<SLink to="/instructor">Instructor</SLink> 
<SLink to="/course">Course</SLink>  */}

const App: React.FC = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/concept" element={<Concept />} />
          <Route path="instructor" element={<Instructor />} />
          <Route path="course" element={<Course />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
    </BrowserRouter>
    )
}
 
export default App