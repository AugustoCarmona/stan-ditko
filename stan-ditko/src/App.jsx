import React, { useState } from 'react'
import './assets/css/Normalize.css'
import './assets/css/App.css'
import SearchBar from './components/SearchBar/SearchBar'
import Grid from './components/Grid/Grid'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="nav-bar">
        <SearchBar />
        <Grid />
      </div>
    </div>
  )
}

export default App
