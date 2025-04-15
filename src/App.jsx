import React from 'react'
import Catalogo from './screen/Catalogo'
import Homescreen from './screen/homescreen'
import Contactscreen from './screen/contactsreen'
import { Route, Routes, useLocation } from 'react-router-dom'
const App = () => {
  return (
    <Routes>
      <Route  path="/" element={<Homescreen/>} />
      <Route path={"/contact"} element={<Contactscreen/>} />
      <Route path={"/catalogo"} element={<Catalogo/>} />

    </Routes>
  )
}

export default App