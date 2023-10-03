import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Page2 } from './components/City';
import { Eventos } from './components/Events';
import { News } from './components/News';
import Vale from './components/Vale';
import Igrejas from './components/Igrejas';



const router = createBrowserRouter([
  {
      path: "/",
      element: <App />,
  },
  {
    path: "/segundo",
    element: <Page2/>,
  },
  {
    path: "/events",
    element: <Eventos/>,
  },
  {
    path: "/news",
    element: <News/>,
  },
  {
    path: "/vale",
    element: <Vale/>,
  },
  {
    path: "/igrejas",
    element: <Igrejas/>,
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
