import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import { createTheme,ThemeProvider } from '@material-ui/core'

const theme  = createTheme()
console.log(theme)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <App />
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  </React.StrictMode>
)
