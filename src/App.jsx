import React from 'react'
import Head from './Components/Head/Head'
import Related from './Components/Related/Related'
import { Route, Routes } from 'react-router-dom'


const App = () => {
  return (
    <div>
      <Related/>
          <Routes>
      <Route path="/" element={<Head/>} />
    </Routes>
    </div>
  )
}

export default App