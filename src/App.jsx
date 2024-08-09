import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home'
import Header from './Components/Header'
import Products from './Components/Products'

function App() {
  return (
    <>
      <Header/>
      <Home/>
      <Products/>
    </>
  )
}

export default App
