import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App.jsx'

import Home from './routes/home/Home.jsx'
import Leaderboard from './routes/leaderboard/Leaderboard.jsx'
import Racing from './routes/racing/Racing'
import Login from './routes/login/Login.jsx'

const router = createBrowserRouter ([
  {
    path:"/", element:<App/>,
    errorElement:<Error/>,
  
    children:[
      {path:"/",element:<Home/>},
      {path:"/Login",element:<Login/>},
      {path:"/Racing",element:<Racing/>},
      {path:"/Leaderboard",element:<Leaderboard/>}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)