import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <App />
    </MuiPickersUtilsProvider>
  </React.StrictMode>
)
