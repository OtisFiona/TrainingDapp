import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import './index.css';
import F12Main from './F12Main';

import Buy from './pages/Buy';
import Create from './pages/Create';
import Detail from './pages/Detail';
import List from './pages/List';
import ProfileInventory from './pages/ProfileInventory';

function AppRoutes() {
  const routes = useRoutes([
    { path: '/', element: <F12Main /> },
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