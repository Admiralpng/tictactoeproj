import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import { Home } from './pages/Home'
import { Game } from './pages/Game'
import { Details } from './pages/Details'
import Header from './components/Header'
import { ModalContext } from './contexts/ModalContext'

// export const Test = ({handleModal}) => {
//   return (
//     <div>
//       <button type="button" onClick={() => 
//         handleModal(<Modal handleModal={handleModal}/>)}>
//           Player _ Has WON!
//       </button>
//     </div>
//   )
// }

// export const Modal = ({handleModal}) => {
//   return (
//     <div onClick={() => handleModal()}>yurrrrrrrrrrrr</div>
//   )
// }

const Router = () => {
  const {handleModal} = useContext(ModalContext)
  
  return (
    <BrowserRouter>
      {/* <Test handleModal={handleModal} /> */}
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