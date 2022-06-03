import React from 'react'
import { StylesProvider } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core'
import GlobalStyle from './commons/styles/global-style'
import Main from './containers' 

function App() {
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <GlobalStyle />
      <div>
        <h1> TESTE </h1>
      </div>
      <main/>
    </StylesProvider>
    
  )
}

export default App
