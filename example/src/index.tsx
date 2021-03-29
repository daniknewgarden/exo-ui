import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { GlobalStyle } from 'exo-design-system'

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root')
)
