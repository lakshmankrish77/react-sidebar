import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { LoginPage } from '../pages/auth/LoginPage';
import { RegisterPage } from '../pages/auth/RegisterPage';

export const AuthRouter = () => {
  return (
    <div className="auth__main">
      <Routes>
        <Route exact path="" element={<LoginPage />} />
        <Route exact path="register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
};
