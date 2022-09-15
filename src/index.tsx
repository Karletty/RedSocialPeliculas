import React from 'react';
import ReactDOM from 'react-dom/client';
import { Layout } from './Components';
import "./assets/style.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import { Home, Login, Recomend, SignUp, User } from './Pages';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route index element={<Home />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="signup" element={<SignUp />}></Route>
        <Route path="recomend" element={<Recomend />}></Route>
        <Route path="user" element={<User />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);