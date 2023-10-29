import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Styles/App.css'
import CharacterPage from "./characterPage"
import SingleHero from "./Components/singleHero"
import {Routes,Route} from 'react-router-dom'

function App() {  
  return (
    <>
      <Routes>
        <Route path ='/Heroes' element={<CharacterPage/>}/>
        <Route path ='/Heroes/:id' element={<SingleHero/>}/>
      </Routes>
    </>
  )
}

export default App
