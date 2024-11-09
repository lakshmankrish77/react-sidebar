import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { AuthRouter } from './AuthRouter';
import { DashboardRoutes } from './DashboardRoutes';



export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/*" element={<AuthRouter />} />
        <Route path="/*" element={<DashboardRoutes />} />
      </Routes>
    </BrowserRouter>
  );
};
