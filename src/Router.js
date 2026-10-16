import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import { Home } from './pages/Home'
import { Game } from './pages/Game'
import { Details } from './pages/Details'
import Header from './components/Header'


const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/game-on" element={<Game />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;