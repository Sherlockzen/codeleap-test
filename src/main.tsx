import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './reset.css'
import Main from "./pages/Main";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/main",
        element: <Main/>
    }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/*<App />*/}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
