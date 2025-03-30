import { useState } from 'react'
import Header from './components/Header/Header'
import Hero from './Pages/Hero/Hero'
import Food from './Pages/Food/Food';
import Footer from './components/Footer/Footer';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/Food" element={<Food />} />
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
