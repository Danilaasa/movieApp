import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './global.css'
import { store } from './store/store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ModalWindow } from './components/ModalWindow/ModalWindow'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from './store/store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <BrowserRouter>
  <Provider store={store} >
  <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <App />
        <ModalWindow />
      </React.StrictMode>
    </PersistGate>
  </Provider>  
  </BrowserRouter>
  
)
