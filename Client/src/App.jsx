import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Search from './components/Search.jsx/Search'


function App() {


  return (
    <div className='bg-slate-300'>
     <Header/> 
     <Search/>
    </div>
  )
}

export default App
