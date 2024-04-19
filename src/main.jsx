import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import ResultsByDate from './Components/ResultsByDate.jsx'
import ICCPlayerRanking from './Components/ICCPlayerRanking.jsx'
import PlayerStat from './Components/PlayerStat.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <ResultsByDate />,
      },
      {
        path: 'icc-player-ranking',
        element: <ICCPlayerRanking />,
      },
      {
        path: 'player-stats',
        element: <PlayerStat />,
      }
    ],
  }])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
