import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'

import ThemeConfig from './theme.config';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeConfig>
      <App />
    </ThemeConfig>
  </React.StrictMode>
);