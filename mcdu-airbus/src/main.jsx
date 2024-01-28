import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css'
import { BaseContextProvider } from './context/BaseContext';
import { Mcdu } from './components/Mcdu';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BaseContextProvider>
      <Mcdu/>
    </BaseContextProvider>
  </React.StrictMode>,
)
