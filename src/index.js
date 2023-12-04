import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider,createHashRouter} from 'react-router-dom'
import App from './component/App/App'

const router = createHashRouter([
  {
    path: "/*",
    element: <App />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>
)
