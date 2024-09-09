import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import './index.css';
import Home from './Home';

import Buy from './pages/Buy';
import Create from './pages/Create';
import Detail from './pages/Detail';
import List from './pages/List';
import ProfileInventory from './pages/ProfileInventory';

function AppRoutes() {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/Buy', element: <Buy /> },
    { path: '/Create', element: <Create /> },
    { path: '/Detail', element: <Detail /> },
    { path: '/List', element: <List /> },
    { path: '/ProfileInventory', element: <ProfileInventory /> },
  ]);

  return routes;
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}