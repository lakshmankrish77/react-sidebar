import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Switch } from "react-router-dom";
import { MainContainer } from '../../components/Contents/Contents.elements';

import CreateTodo from "../todoPages/create-todo.component";
import EditNewTodo from "../todoPages/edit-todos";
import TodosList from "../todoPages/todos-list.component";
import Box from '@mui/material/Box';
import logo from "../../logo1.png";

export const TodoPage = (props) => {
  
    return (
      
        <div>
          {/* <Box component="main" active={props.toggle} sx={{
          bgcolor: 'background.paper',
          border: '4px grey',
          boxShadow: 8,
          borderRadius: 2,
          p: 2,
          mt: 10,
          mb:10
          
        }}> */}
            {/* <MainContainer active={props.toggle}> */}
          
            <a class="navbar-brand" href="https://codingthesmartway.com" target="_blank">
              <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
            </a>
            <Link to="/" className="navbar-brand">MERN-Stack Todo App</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/Todo/" className="nav-link">Todos</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/Todo/create" className="nav-link">Create Todo</Link>
                </li>
              </ul>
            </div>
          
          <Routes>
            <Route path="/" exact element={<TodosList toggle={props.toggle} />} />
            {/* <Route path="/edit/:id" element={<EditTodo/>} /> */}
            <Route exact path="/edit/:id" element={<EditNewTodo/> } />
            <Route exact path="/create" element={<CreateTodo toggle={props.toggle} />} />
        
          </Routes>
          {/* </Box> */}
          {/* </MainContainer> */}
        </div>
      
    );
  
}

// export default App;