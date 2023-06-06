import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './App.css'

function App() {
  const routes = [
    {
      id: 'home',
      element: <iframe src="https://property-report.corelogic.com.au/boq"></iframe>,
      path: '/',
    },
    {
      id: 'report',
      element: <iframe src="https://property-report.corelogic.com.au/dpr/11111111-1111-1111-1111-111111111111"></iframe>,
      path: '/report',
    },
  ]
  const router = createBrowserRouter(routes)
  return (
    <RouterProvider router={router} />
  )
}

export default App
