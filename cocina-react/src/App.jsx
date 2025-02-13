import { useState } from 'react'
import Header from './components/Header/Header'
import Hero from './Pages/Hero/Hero'
import Footer from './components/Footer/Footer';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>
    </>
  )
}

export default App
