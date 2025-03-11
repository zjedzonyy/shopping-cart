import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Test from '../components/test'
import Homepage from '../components/Homepage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom' 
import App from '../components/App'
import Contact from '../components/Contact'
import Shop from '../components/Shop'
import Checkout from '../components/Checkout'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: 'homepage', element: <Homepage />},
      { path: 'shop', element: <Shop />},
      { path: 'contact', element: <Contact />},
      { path: 'checkout', element: <Checkout />},
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
