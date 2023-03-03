import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes } from 'react-router-dom'
import App from './App'
import Login from '@/Login';
import Membership from '@/Membership'
import TranscriptionView from '@/TranscriptionView'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Routes path='/Login' element={ Login } />
      <Routes path='/Membership' element={ Membership } />
      <Routes path='/Transcriptionview' element={ TranscriptionView } />    
    </Routes>
    <App />
  </BrowserRouter>
)
