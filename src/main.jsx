import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App.jsx'

import Home from './routes/Home.jsx'
import Leaderboard from './routes/Leaderboard.jsx'
import Racing from './routes/racing.jsx'
import Login from './routes/Login.jsx'

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