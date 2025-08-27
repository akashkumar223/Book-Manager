import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
import Update from './components/Update.jsx'
import Create from './components/Create.jsx'
import List from './components/List.jsx'  

function App() {
  

  return (
    
    <Router>
      <div>
    <h1>Book-Manager</h1>
    
    
<nav className="nav">
  <Link to="/" className="btn btn-info">Book List</Link>
  <Link to="/create" className="btn btn-success">Add Book</Link>
  <Link to="/update/1" className="btn btn-warning">Update Book</Link>
</nav>

  <Routes>
    <Route path="/" element={<List/>}/>
    <Route path="/create" element={<Create/>}/>
    <Route path="/update/:id" element={<Update/>}/>
  </Routes>
    </div> 
    
    </Router>
  )
}

export default App
