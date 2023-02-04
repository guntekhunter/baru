import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';
import CheckList from './Pages/CheckList';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Login/>}></Route>
      <Route exact path="/register" element={<Register/>}></Route>
      <Route exact path="/checklist" element={<CheckList/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
