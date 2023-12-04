import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter,createHashRouter} from 'react-router-dom'
import App from './component/App/App'

const router = createHashRouter([
  {
    path: "/*",
    element: <App />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter router={router}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
