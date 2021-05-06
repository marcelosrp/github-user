import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'

import 'react-toastify/dist/ReactToastify.css'
import './assets/scss/app.scss'

const App = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}

export default App
