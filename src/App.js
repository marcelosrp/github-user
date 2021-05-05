import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'
import ErrorBoundary from './utils/error-boundary'

import 'react-toastify/dist/ReactToastify.css'
import './assets/scss/app.scss'

const App = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Routes />
      </ErrorBoundary>
    </BrowserRouter>
  )
}

export default App
