import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import { Home } from './pages/Home'
import { Game } from './pages/Game'
import Header from './components/Header'
import { ModalContext } from './contexts/ModalContext'
import { ModalContextProvider } from './contexts/ModalContext'

const Router = () => {
  const {handleModal} = useContext(ModalContext)
  
  return (
    <BrowserRouter>
      <ModalContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game-on" element={<Game />} />
        </Routes>
      </ModalContextProvider>
    </BrowserRouter>
  )
}

export default Router;