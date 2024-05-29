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
import IgrejaM from './components/IgrejaM';
import IgrejaBJ from './components/IgrejaBJ';
import Cc from './components/CC';
import SaoGoncalo from './components/SaoGoncalo';
import MemorialAM from './components/MemorialAM';
import EstatuaFD from './components/EstatuaFD';


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
    path: "/igrejaM",
    element: <IgrejaM/>,
  },
  {
    path: "/igrejaBJ",
    element: <IgrejaBJ/>,
  },
  {
    path: "/centroc",
    element: <Cc/>,
  },
  {
    path: "/SGoncalo",
    element: <SaoGoncalo/>,
  },
  {
    path: "/memorial",
    element: <MemorialAM/>,
  },
  {
    path: "/EstFD",
    element: <EstatuaFD/>,
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
