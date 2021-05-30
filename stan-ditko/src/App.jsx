import React, { useState } from 'react'
import './assets/css/Normalize.css'
import './assets/css/App.css'
import NavBar from './components/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="nav-bar">
        <NavBar />
      </div>
    </div>
  )
}

export default App
